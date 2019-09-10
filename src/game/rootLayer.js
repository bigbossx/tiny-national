import ScrollerLayer from "tinyjs-plugin-scroller";
import { TweenMax, TimelineMax } from "gsap/TweenMax";
const eventBus = require("js-event-bus")();
import BaseLayer from "./baseLayer";
import Scene1Layer from "./sceneLayer1";
import Scene2Layer from "./sceneLayer2";
import Scene3Layer from "./sceneLayer3";
import Scene4Layer from "./sceneLayer4";
import Scene5Layer from "./sceneLayer5";
import Scene6Layer from "./sceneLayer6";
import Scene7Layer from "./sceneLayer7";
import Scene8Layer from "./sceneLayer8";
import Scene9Layer from "./sceneLayer9";
import Scene10Layer from "./sceneLayer10";
import Scene11Layer from "./sceneLayer11";
import Scene12Layer from "./sceneLayer12";
import Scene13Layer from "./sceneLayer13";
import Scene14Layer from "./sceneLayer14";
const sceneList = [
  Scene1Layer,
  Scene2Layer,
  Scene3Layer,
  Scene4Layer,
  Scene5Layer,
  Scene6Layer,
  Scene7Layer,
  Scene8Layer,
  Scene9Layer,
  Scene10Layer,
  Scene11Layer,
  Scene12Layer,
  Scene13Layer,
  Scene14Layer
];
import MyTimeLine from "./timeline";
export default class RootScene extends Tiny.Container {
  constructor() {
    super();
    this.scroller = null;
    this.initTimeLine();
    this.initScene();
    this.initGesture();
    this.initScroll();
  }
  initScene() {
    const { width, height } = Tiny.WIN_SIZE;
    for (let i = 0; i < sceneList.length; i++) {
      const scene = new sceneList[i]();
      scene.position.set(0, height * i);
      this.addChild(scene);
    }
  }
  initTimeLine() {
    MyTimeLine.timeline = new TimelineMax({
      paused: true
    });
    // const bgAction = TweenMax.fromTo(
    //   this,
    //   1,
    //   { y: 0 },
    //   { y: this.height }
    // );
    // const bgTimeline = new TimelineMax();
    // bgTimeline.add(bgAction, 0);
    // MyTimeLine.timeline.add(bgTimeline, 0);
  }

  initGesture() {
    this.interactive = true;
    // 设置 container 的可触发区域
    this.hitArea = new Tiny.Rectangle(0, 0, Tiny.WIN_SIZE.width, this.height);
    // 按下时的事件监听
    this.on("pointerdown", function(data) {
      var e = data.data.originalEvent;
      // 同步给 scroller，如果是移动端则使用 e.changedTouches，如果是 PC 上则使用 [e]
      this.scroller.doTouchStart(e.changedTouches || [e], e.timeStamp);
    });
    // 移动时的事件监听
    this.on("pointermove", function(data) {
      var e = data.data.originalEvent;
      this.scroller.doTouchMove(e.changedTouches || [e], e.timeStamp, e.scale);
    });
    // 抬起时的事件监听
    this.on("pointerup", function(data) {
      const e = data.data.originalEvent;
      this.scroller.doTouchEnd(e.timeStamp);
    });
    // 移出屏幕的事件监听
    this.on("pointerupoutside", function(data) {
      const e = data.data.originalEvent;
      this.scroller.doTouchEnd(e.timeStamp);
    });
  }
  changeScene(top) {
    if (top > Tiny.WIN_SIZE.height * 3) {
      this.position.y = -(
        Math.ceil(top / Tiny.WIN_SIZE.height) * Tiny.WIN_SIZE.height
      );
    } else {
      this.position.y = -top;
    }
  }
  initScroll() {
    this.scroller = new ScrollerLayer(
      (left, top, zoom) => {
        // 滚动的状态同步给 container
        this.changeScene(top);

        eventBus.emit("onprogress", null, top);
        MyTimeLine.timeline.seek(top / this.height);
      },
      {
        // 只设置 Y 轴方向可滚动
        scrollingY: true,
        bouncing: false
      }
    );
    console.log(
      "root container height:%c" + this.height,
      "color: yellow; font-style: italic; background-color: pink;padding: 5px"
    );

    this.scroller.setDimensions(
      Tiny.WIN_SIZE.width,
      Tiny.WIN_SIZE.height,
      this.width,
      this.height
    );
    // 设置 container 可交互
  }
}
