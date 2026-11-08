document.addEventListener("DOMContentLoaded", () => {
  const mapElement = document.querySelector("#conference-venue-map");
  const dataElement = document.querySelector("#conference-venue-data");
  if (!mapElement || !dataElement) return;

  const showUnavailable = () => {
    mapElement.classList.add("is-unavailable");
    mapElement.replaceChildren();
    const message = document.createElement("p");
    message.className = "conference-map-status";
    message.textContent = "The interactive map is temporarily unavailable. Use the building directory below for venue details.";
    mapElement.append(message);
  };

  let venues = [];
  try {
    venues = JSON.parse(dataElement.textContent || "[]");
  } catch (_error) {
    showUnavailable();
    return;
  }

  if (!window.L || !venues.length) {
    showUnavailable();
    return;
  }

  const textElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  const roomCard = (room) => {
    const card = document.createElement("article");
    card.className = "conference-map-room";

    if (room.image) {
      const image = document.createElement("img");
      image.src = room.image;
      image.alt = room.image_alt || room.name;
      image.loading = "lazy";
      card.append(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "conference-map-room-placeholder";
      placeholder.setAttribute("role", "img");
      placeholder.setAttribute("aria-label", "Room photo coming soon");
      placeholder.append(textElement("span", "", room.caption || "Photo coming soon"));
      card.append(placeholder);
    }

    const copy = document.createElement("div");
    copy.append(textElement("h4", "", room.name));
    if (room.floor) copy.append(textElement("p", "", room.floor));
    if (room.capacity) copy.append(textElement("p", "", `Capacity: ${room.capacity}`));
    card.append(copy);
    return card;
  };

  const popupContent = (venue) => {
    const popup = document.createElement("article");
    popup.className = "conference-map-popup-content";

    const heading = document.createElement("header");
    heading.append(textElement("span", "conference-map-popup-number", venue.marker_label));
    const headingCopy = document.createElement("div");
    headingCopy.append(textElement("h3", "", venue.name));
    headingCopy.append(textElement("p", "", venue.address));
    heading.append(headingCopy);
    popup.append(heading);

    const rooms = document.createElement("div");
    rooms.className = "conference-map-rooms";
    (venue.rooms || []).forEach((room) => rooms.append(roomCard(room)));
    popup.append(rooms);

    const directions = document.createElement("a");
    directions.className = "conference-map-directions";
    directions.href = venue.directions_url;
    directions.target = "_blank";
    directions.rel = "noopener noreferrer";
    directions.textContent = "Open directions";
    popup.append(directions);
    return popup;
  };

  mapElement.replaceChildren();
  const map = window.L.map(mapElement, {
    scrollWheelZoom: false,
    zoomControl: true,
  });
  window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  window.L.control.scale({ imperial: false }).addTo(map);

  const bounds = [];
  const markers = new Map();
  venues.forEach((venue, index) => {
    const latitude = Number(venue.latitude);
    const longitude = Number(venue.longitude);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return;

    const markerLabel = String(venue.marker_label || index + 1).replace(/[^a-zA-Z0-9-]/g, "");
    const icon = window.L.divIcon({
      className: "conference-map-marker-shell",
      html: `<span class="conference-map-marker"><b>${markerLabel}</b></span>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -18],
    });
    const marker = window.L.marker([latitude, longitude], {
      alt: `${venue.name}, ${venue.address}`,
      icon,
      keyboard: true,
      riseOnHover: true,
      title: venue.name,
    }).addTo(map);
    marker.bindPopup(popupContent(venue), {
      className: "conference-map-popup",
      maxWidth: 380,
      minWidth: 240,
    });
    markers.set(venue.id, marker);
    bounds.push([latitude, longitude]);
  });

  if (!bounds.length) {
    map.remove();
    showUnavailable();
    return;
  }

  if (bounds.length === 1) {
    map.setView(bounds[0], Number(mapElement.dataset.mapZoom) || 17);
  } else {
    map.fitBounds(bounds, {
      maxZoom: Number(mapElement.dataset.mapZoom) || 17,
      padding: [45, 45],
    });
  }
  mapElement.classList.add("is-ready");

  document.querySelectorAll(".conference-show-on-map").forEach((button) => {
    const marker = markers.get(button.dataset.venueId);
    if (!marker) return;
    button.hidden = false;
    button.addEventListener("click", () => {
      map.setView(marker.getLatLng(), 18, { animate: true });
      marker.openPopup();
      mapElement.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});
