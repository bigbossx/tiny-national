import ScrollerLayer from "tinyjs-plugin-scroller";

let scroller = new ScrollerLayer(
  (left, top, zoom) => {
    console.log(left, top, zoom);
  },
  {
    scrollingY: true
  }
);

scroller.setDimensions(
  Tiny.WIN_SIZE.width,
  Tiny.WIN_SIZE.height,
  Tiny.WIN_SIZE.width,
  Tiny.WIN_SIZE.height
);

export default scroller;
