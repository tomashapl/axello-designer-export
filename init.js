document.addEventListener('DOMContentLoaded', function load() {

  const styles = document.createElement("link");
  styles.rel = "stylesheet";
  styles.href = "https://tomashapl.github.io/axello-designer-export/axello-designer.css";
  document.head.appendChild(styles);

  const popper = document.createElement("script");
  popper.type = "text/javascript";
  popper.src = "https://unpkg.com/@popperjs/core@2";
  document.body.appendChild(popper);

  const tippy = document.createElement("script");
  tippy.type = "text/javascript";
  tippy.src = "https://unpkg.com/tippy.js@6";
  document.body.appendChild(tippy);

  if (!window.jQuery || !window.tippy || !window.Popper) return setTimeout(load, 50);

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://tomashapl.github.io/axello-designer-export/axello-designer.js";
  document.body.appendChild(script);
}, false);