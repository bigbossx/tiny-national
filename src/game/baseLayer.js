import { TweenMax, TimelineMax } from "gsap/TweenMax";
import MyTimeLine from "./timeline";
import * as UI from "tinyjs-plugin-ui";
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
    Object.values(sprites).forEach(item => {
      // @ts-ignore
      this.renderSpriteFactory(this, item);
    });
  }
  renderSpriteFactory(
    container,
    {
      frames,
      text,
      style,
      html,
      resource,
      position,
      anchor,
      rotation,
      animations,
      action,
      size,
      child
    }
  ) {
    let renderObj = null;
    if (child && child.length > 0) {
      //组合多个精灵在同一个container
      renderObj = new Tiny.Container();
      child.forEach(_item => {
        this.renderSpriteFactory(renderObj, _item);
      });
    } else if (frames) {
      const { key, length, type, startY, endY, reverse } = frames;
      renderObj = this.renderFramesSprite(key, length);
      if (type === "transform") {
        //转场动画
        renderObj.alpha = 0;
        let interval = (endY - startY) / length;
        eventBus.on("onprogress", progess => {
          if (progess >= startY && progess <= endY) {
            renderObj.alpha = 1;
            let curIndex = Math.ceil((progess - startY) / interval);
            console.log(
              `当前是转场动画第${curIndex}帧,反帧${length -
                curIndex},是否反帧${reverse}`
            );
            reverse
              ? renderObj.gotoAndStop(length - curIndex)
              : renderObj.gotoAndStop(curIndex);
          } else {
            renderObj.alpha = 0;
          }
        });
      } else {
        // 立即播放
        renderObj.play();
      }
    } else if (text) {
      renderObj = this.renderTextSprite(html, text, style);
    } else {
      renderObj = this.renderSingleSprite(resource);
    }
    this.setSize(renderObj, size);

    this.setPosition(renderObj, position);
    this.setAnchor(renderObj, anchor);
    this.setRotation(renderObj, rotation);
    this.setAnimation(renderObj, animations);
    if (action) {
      const action = Tiny.MoveBy(1000, Tiny.point(10, 10));
      renderObj.runAction(Tiny.RepeatForever(Tiny.Back(action)));
    }

    container.addChild(renderObj);
  }

  renderSingleSprite(resource) {
    //渲染单个精灵
    return Tiny.Sprite.fromImage(Tiny.resources[resource]);
  }
  renderFramesSprite(key, length) {
    //渲染帧动画
    const { resources, AnimatedSprite, Texture } = Tiny;
    // 声明一个数组，用于存放序列帧图的纹理
    let sprites;
    let textures = [];
    for (let i = 1; i <= length; i++) {
      // 将帧图挨个添加到纹理数组中
      textures.push(Texture.fromImage(resources[`${key}${i}PNG`]));
    }
    // 这个纹理数组就是类初始化的入参
    sprites = new AnimatedSprite(textures);
    // 设置动画速度，值越大速度越快
    sprites.animationSpeed = 0.08;
    return sprites;
  }
  renderTransfromSprite() {
    //渲染转场动画
  }
  renderTextSprite(html, text, style) {
    //渲染文字
    let dom;
    try {
      // 用上面的那段 HTML 生成 DOM 显示对象
      if (html) {
        dom = UI.DOM({
          html: html
        });
      } else {
        dom = new Tiny.Text(text, style);
      }
    } catch (e) {
      // 不支持的设备会报错，此时降级使用普通文本或使用图片
      console.log(
        "%c当前设备不支持html转文字",
        "background-color: yellow;color:red;padding:5px;"
      );
      dom = new Tiny.Text(text, style);
    }
    return dom;
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
    deg && sprites.setRotation(Tiny.deg2radian(deg));
  }
  setPosition(sprites, position) {
    position && sprites.setPosition(position.x, position.y);
  }
  setSize(sprites, size) {
    if (size) {
      sprites.width = size.width;
      sprites.height = size.height;
    }
  }
  setAnchor(sprites, anchor) {
    anchor && sprites.setAnchor(anchor.x, anchor.y);
  }
}
