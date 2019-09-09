import ScrollerLayer from "tinyjs-plugin-scroller";

export default class Scene1 extends Tiny.Container {
  constructor() {
    super();
    console.log(this);
    this.scroll = null;
  }
  initScroll() {
    this.scroll = new ScrollerLayer(
      (left, top, zoom) => {
        console.log(left, top, zoom);
      },
      {
        scrollingY: true
      }
    );
    this.scroll.setDimensions(
      Tiny.WIN_SIZE.width,
      Tiny.WIN_SIZE.height,
      Tiny.WIN_SIZE.width,
      Tiny.WIN_SIZE.height
    );
  }
}
