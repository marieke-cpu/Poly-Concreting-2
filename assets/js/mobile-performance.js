(function () {
  if (!window.matchMedia("(max-width: 760px), (prefers-reduced-motion: reduce)").matches) return;

  var createElement = React.createElement;
  React.createElement = function (type, props) {
    if (type === "video" && props && props.autoPlay && /assets\/video\/hero/.test(props.src || "")) {
      return createElement("img", {
        src: props.poster || "assets/img/hero-poster.webp",
        alt: "Decorative concrete project by Poly Concreting",
        width: 900,
        height: 1629,
        fetchPriority: "high",
        decoding: "async",
        className: props.className || "hero-bg-image",
        style: props.style
      });
    }
    return createElement.apply(this, arguments);
  };
})();
