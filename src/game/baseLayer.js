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
      let sprites = null;
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
        sprites = new AnimatedSprite(textures);
        // 设置动画速度，值越大速度越快
        sprites.animationSpeed = 0.08;

        if (item.frames.type === "transform") {
          //转场动画
          sprites.alpha = 0;
          const { startY, endY, length } = item.frames;
          let interval = (endY - startY) / length;
          eventBus.on("onprogress", progess => {
            if (progess >= startY && progess <= endY) {
              sprites.alpha = 1;
              let curIndex = Math.ceil(progess - startY) / interval;
              console.log(`当前是转场动画第${curIndex}帧`);
              sprites.gotoAndStop(curIndex);
            } else {
              sprites.alpha = 0;
            }
          });
        } else {
          // 立即播放
          sprites.play();
        }
      } else if (item.text) {
        sprites = new Tiny.Text(item.text, item.style);
      } else {
        sprites = Sprite.fromImage(resources[item.resource]);
      }
      this.setSize(sprites, item.size);

      this.setPosition(sprites, item.position);
      this.setAnchor(sprites, item.anchor);
      this.setRotation(sprites, item.rotation);
      this.setAnimation(sprites, item.animations);
      if (item.action) {
        const action = Tiny.MoveBy(1000, Tiny.point(10, 10));
        sprites.runAction(Tiny.RepeatForever(Tiny.Back(action)));
      }
      this.addChild(sprites);
    });
  }
  setAnimation(obj, animations) {
    if (!animations || !animations.length) {
      return;
    }
    animations.forEach(({ from, to, duration, animationAttr, delay }) => {
      let sprites = obj;
      let action;
      if (animationAttr) {
        sprites = sprites[animationAttr];
      }
      duration = duration / (Tiny.WIN_SIZE.height * 15);
      delay = delay / (Tiny.WIN_SIZE.height * 15);
      if (from && to) {
        action = TweenMax.fromTo(sprites, duration, from, to);
      } else if (to) {
        action = TweenMax.to(sprites, duration, to);
      } else if (from) {
        action = TweenMax.from(sprites, duration, from);
      }
      const timeline = new TimelineMax({ delay });
      timeline.add(action, 0);
      timeline.play();
      if (!(to && to.repeat === -1)) {
        MyTimeLine.timeline.add(timeline, 0);
      }
    });
  }
  setRotation(sprites, deg) {
    if (!deg) {
      return;
    }
    sprites.setRotation(Tiny.deg2radian(deg));
  }
  setPosition(sprites, position) {
    if (!position) {
      return;
    }
    sprites.setPosition(position.x, position.y);
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
    sprites.setAnchor(anchor.x, anchor.y);
  }
}
