(function () {
  if (!window.matchMedia("(max-width: 760px), (prefers-reduced-motion: reduce)").matches) return;

  var createElement = React.createElement;
  React.createElement = function (type, props) {
    if (type === "video" && props && props.autoPlay && /assets\/video\/hero/.test(props.src || "")) {
      return null;
    }
    if (type === "img" && props && /Logo's\/1logo\.png$/.test(props.src || "")) {
      props = Object.assign({}, props, {
        src: "Logo's/1logo.webp",
        width: 400,
        height: 235
      });
      arguments[1] = props;
    }
    return createElement.apply(this, arguments);
  };
})();
