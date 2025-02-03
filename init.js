document.addEventListener('DOMContentLoaded', function load() {
  if (!window.jQuery) return setTimeout(load, 50);

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://tomashapl.github.io/axello-designer-export/axello-designer.js";

  document.body.appendChild(script);

}, false);