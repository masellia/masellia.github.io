document.addEventListener("DOMContentLoaded", () => {
  const mapElement = document.querySelector("#conference-dining-map");
  const dataElement = document.querySelector("#conference-dining-data");
  if (!mapElement || !dataElement) return;

  const showUnavailable = () => {
    mapElement.classList.add("is-unavailable");
    mapElement.replaceChildren();
    const message = document.createElement("p");
    message.className = "conference-map-status";
    message.textContent = "The interactive map is temporarily unavailable. Use the dining list below for addresses.";
    mapElement.append(message);
  };

  let places = [];
  try {
    places = JSON.parse(dataElement.textContent || "[]");
  } catch (_error) {
    showUnavailable();
    return;
  }

  if (!window.L || !places.length) {
    showUnavailable();
    return;
  }

  const textElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  const popupContent = (place) => {
    const popup = document.createElement("article");
    popup.className = "conference-map-popup-content";

    const heading = document.createElement("header");
    heading.append(textElement("span", "conference-map-popup-number", place.marker_label));
    const headingCopy = document.createElement("div");
    headingCopy.append(textElement("h3", "", place.name));
    headingCopy.append(textElement("p", "", place.address));
    heading.append(headingCopy);
    popup.append(heading);

    if (place.type) {
      popup.append(textElement("p", "conference-map-popup-type", place.type));
    }
    if (place.note) {
      popup.append(textElement("p", "conference-map-popup-note", place.note));
    }

    const directions = document.createElement("a");
    directions.className = "conference-map-directions";
    directions.href = place.directions_url;
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
  const allBounds = [];
  const markers = new Map();
  places.forEach((place, index) => {
    const latitude = Number(place.latitude);
    const longitude = Number(place.longitude);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return;

    const markerLabel = String(place.marker_label || index + 1).replace(/[^a-zA-Z0-9-]/g, "");
    const icon = window.L.divIcon({
      className: "conference-map-marker-shell",
      html: `<span class="conference-map-marker"><b>${markerLabel}</b></span>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -18],
    });
    const marker = window.L.marker([latitude, longitude], {
      alt: `${place.name}, ${place.address}`,
      icon,
      keyboard: true,
      riseOnHover: true,
      title: place.name,
    }).addTo(map);
    marker.bindPopup(popupContent(place), {
      className: "conference-map-popup",
      maxWidth: 360,
      minWidth: 220,
    });
    markers.set(place.id, marker);
    allBounds.push([latitude, longitude]);
    if (place.include_in_bounds !== false) bounds.push([latitude, longitude]);
  });

  if (!allBounds.length) {
    map.remove();
    showUnavailable();
    return;
  }

  const initialBounds = bounds.length ? bounds : allBounds;
  if (initialBounds.length === 1) {
    map.setView(initialBounds[0], Number(mapElement.dataset.mapZoom) || 17);
  } else {
    map.fitBounds(initialBounds, {
      maxZoom: Number(mapElement.dataset.mapZoom) || 17,
      padding: [45, 45],
    });
  }
  mapElement.classList.add("is-ready");

  document.querySelectorAll(".conference-dining-show-on-map").forEach((button) => {
    const marker = markers.get(button.dataset.placeId);
    if (!marker) return;
    button.hidden = false;
    button.addEventListener("click", () => {
      map.setView(marker.getLatLng(), 18, { animate: true });
      marker.openPopup();
      mapElement.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});
