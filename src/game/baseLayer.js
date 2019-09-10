import { TweenMax, TimelineMax } from "gsap/TweenMax";
import MyTimeLine from "./timeline";
const eventBus = require("js-event-bus")();
export default class BaseLayer extends Tiny.Container {
  constructor() {
    super();

    const { width, height } = Tiny.WIN_SIZE;
    this.stageWidth = width;
    this.stageHeight = height;
  }

  // initAnimation() {}

  initSprites(sprites) {
    const { resources, Sprite, AnimatedSprite, Texture } = Tiny;

    Object.values(sprites).forEach(item => {
      if (item.frames) {
        // 声明一个数组，用于存放序列帧图的纹理
        let textures = [];
        for (let i = 1; i <= item.frames.length; i++) {
          // 将帧图挨个添加到纹理数组中
          textures.push(
            Texture.fromImage(resources[`${item.frames.key}${i}PNG`])
          );
        }
        // 这个纹理数组就是类初始化的入参
        let mc = new AnimatedSprite(textures);
        // 设置动画速度，值越大速度越快
        mc.animationSpeed = 0.08;
        this.setSize(mc, item.size);
        this.setPosition(mc, item.position);
        this.setAnimation(mc, item.animations);
        if (item.frames.type === "transform") {
          //转场动画
          const { startY, endY, length } = item.frames;
          let interval = (endY - startY) / length;
          eventBus.on("onprogress", progess => {
            if (progess >= startY && progess <= endY) {
              let curIndex = Math.ceil(progess - startY) / interval;
              console.log(curIndex);
              mc.gotoAndStop(curIndex);
            }
          });
        } else {
          // 立即播放
          mc.play();
        }

        this.addChild(mc);
      } else {
        const sprites = Sprite.fromImage(resources[item.resource]);
        this.setPosition(sprites, item.position);
        this.setSize(sprites, item.size);
        this.setAnchor(sprites, item.anchor);
        this.setAnimation(sprites, item.animations);
        this.addChild(sprites);
      }
    });
  }
  setAnimation(obj, animations) {
    if (!animations || !animations.length) {
      return;
    }
    animations.forEach(({ from, to, duration, delay }) => {
      let action;
      duration = duration / (Tiny.WIN_SIZE.height * 13);
      delay = delay / (Tiny.WIN_SIZE.height * 13);
      console.log(duration, delay);
      if (from && to) {
        action = TweenMax.fromTo(obj, duration, from, to);
      } else if (to) {
        action = TweenMax.to(obj, duration, to);
      } else if (from) {
        action = TweenMax.from(obj, duration, from);
      }
      const timeline = new TimelineMax({ delay });
      timeline.add(action, 0);
      timeline.play();
      if (!(to && to.repeat === -1)) {
        MyTimeLine.timeline.add(timeline, 0);
      }
    });
  }
  setPosition(sprites, position) {
    if (!position) {
      return;
    }
    sprites.position.x = position.x;
    sprites.position.y = position.y;
  }
  setSize(sprites, size) {
    if (!size) {
      return;
    }
    sprites.width = size.width;
    sprites.height = size.height;
  }
  setAnchor(sprites, anchor) {
    if (!anchor) {
      return;
    }
    sprites.anchor = anchor.x;
    sprites.anchor.anchor.y;
  }
}
