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
      cover: {
        resource: "地板PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        },
        position: {
          x: 0,
          y: 200
        }
      },
      mask: {
        resource: "国庆底图PNG",
        size: {
          width: this.stageWidth,
          height: 351 * 2
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

      title: {
        resource: "新中国开国大典PNG",
        size: {
          width: 394,
          height: 220
        },
        position: {
          x: 50,
          y: 50
        }
        // animations: [
        //   {
        //     delay: 100,
        //     duration: this.stageHeight,
        //     from: {
        //       y: 50
        //     },
        //     to: { y: this.stageHeight }
        //   }
        // ]
      },
      time: {
        resource: "1949年PNG",
        size: {
          width: 484,
          height: 70
        },
        position: {
          x: 50,
          y: 300
        },
        animations: []
      },
      area: {
        resource: "北京PNG",
        size: {
          width: 256,
          height: 66
        },
        position: {
          x: 50,
          y: 400
        },
        animations: []
      },
      tv_bg: {
        resource: "电视黑色底PNG",
        size: {
          width: 261 * 2,
          height: 152 * 2
        },
        position: {
          x: this.stageWidth / 2,
          y: this.stageHeight / 2
        },
        anchor: {
          x: 0.5,
          y: 0
        }
      },
      tv: {
        resource: "老电视PNG",
        size: {
          width: 261 * 2,
          height: 198 * 2
        },
        position: {
          x: this.stageWidth / 2,
          y: this.stageHeight / 2
        },
        anchor: {
          x: 0.5,
          y: 0
        }
      }
      // guide: {
      //   frames: {
      //     key: "guide",
      //     length: 10
      //   },
      //   size: { width: 438, height: 294 },
      //   position: { x: this.stageWidth, y: this.stageHeight },
      //   anchor: {
      //     x: 1,
      //     y: 1
      //   },
      //   animations: []
      // }
    };
    this.initSprites(this.sprites);
  }
}
