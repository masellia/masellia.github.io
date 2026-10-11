document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nfl-landing a[href^='http']").forEach((link) => {
    if (link.classList.contains("nfl-img-link")) return;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const imageLinks = document.querySelectorAll(".nfl-img-link");
  if (!imageLinks.length || typeof HTMLDialogElement === "undefined") return;

  const dialog = document.createElement("dialog");
  dialog.className = "nfl-lightbox";
  dialog.setAttribute("aria-label", "Enlarged play image");

  const closeButton = document.createElement("button");
  closeButton.className = "nfl-lightbox-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close enlarged image");
  closeButton.textContent = "\u00d7";

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const caption = document.createElement("figcaption");
  figure.append(image, caption);
  dialog.append(closeButton, figure);
  document.body.append(dialog);

  let trigger = null;

  imageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      trigger = link;

      const thumbnail = link.querySelector("img");
      image.src = link.href;
      image.alt = thumbnail ? thumbnail.alt : "";
      caption.textContent = link.closest("figure")?.querySelector("figcaption")?.textContent || "";
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => trigger?.focus());
});
