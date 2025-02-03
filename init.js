document.addEventListener('DOMContentLoaded', function load() {

  const styles = document.createElement("link");
  styles.rel = "stylesheet";
  styles.href = "https://tomashapl.github.io/axello-designer-export/axello-designer.css";
  document.head.appendChild(styles);

  if (!window.jQuery) return setTimeout(load, 50);

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://tomashapl.github.io/axello-designer-export/axello-designer.js";
  document.body.appendChild(script);
}, false);