import BaseLayer from "./baseLayer";
export default class Scene1 extends BaseLayer {
  constructor() {
    super();
    this.sprites = {
      background: {
        resource: "底PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      flag: {
        frames: {
          key: "flag",
          type: "frames",
          length: 7
        },
        size: { width: this.stageWidth, height: 666 }
      },
      guide: {
        frames: {
          key: "guide",
          length: 10
        },
        size: { width: 438, height: 294 },
        position: { x: this.stageWidth - 438, y: this.stageHeight - 294 },
        animations: []
      },
      title: {
        resource: "新中国开国大典PNG",
        size: {
          width: 394,
          height: 220
        },
        animations: [
          {
            delay: 100,
            duration: this.stageHeight,
            from: {
              y: 0
            },
            to: { y: this.stageHeight }
          }
        ]
      },
      time: {
        resource: "1949年PNG",
        size: {
          width: 484,
          height: 70
        },
        animations: []
      },
      area: {
        resource: "北京PNG",
        size: {
          width: 256,
          height: 66
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
