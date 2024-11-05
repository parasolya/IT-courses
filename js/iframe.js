// MapComponent.js

function MapComponent({ width = "280", height = "150", address = "" }) {
    const src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}&language=ro`;

    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.width = width;
    iframe.height = height;
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";

    return iframe;
}

function renderMap(containerId, options) {
    const container = document.getElementById(containerId);
    if (container) {
        // Apply the .footer__address class to the container
        container.classList.add("footer__address");

        const mapIframe = MapComponent(options);
        container.appendChild(mapIframe);
    }
}
