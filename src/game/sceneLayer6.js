import BaseLayer from "./baseLayer";
export default class Scene6 extends BaseLayer {
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
      sky: {
        resource: "太空JPG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      satellite: {
        resource: "东方红一号PNG",
        size: {
          width: 730,
          height: 512
        },
        position: {
          x: 100
        },
        animations: [
          {
            delay: this.stageHeight * 5,
            duration: 50,
            from: {
              x: this.stageWidth
            }
          },
          {
            delay: this.stageHeight * 5.5,
            duration: this.stageHeight * 0.5,
            to: {
              x: -this.stageWidth
            }
          }
        ]
      },
      signal: {
        frames: {
          key: "信号",
          type: "frames",
          length: 5
        },
        size: { width: 72 * 2, height: 77 * 2 },
        position: {
          x: 350,
          y: 500
        },
        animations: [
          {
            delay: this.stageHeight * 5,
            duration: 50,
            from: {
              x: this.stageWidth
            }
          },
          {
            delay: this.stageHeight * 5.5,
            duration: this.stageHeight * 0.5,
            to: {
              x: -this.stageWidth
            }
          }
        ]
      },
      earth: {
        resource: "地球PNG",
        size: {
          width: this.stageWidth * 2,
          height: 570
        },
        position: {
          x: 0,
          y: this.stageHeight - 570
        },
        animations: [
          {
            delay: this.stageHeight * 5,
            duration: this.stageHeight * 0.7,
            to: {
              x: -this.stageWidth
            }
          },
          {
            delay: this.stageHeight * 5.7,
            duration: this.stageHeight * 0.3,
            to: {
              y: this.stageHeight
            }
          }
        ]
      },
      title: {
        resource: "第一颗人造卫星发射成功PNG",
        size: {
          width: 342,
          height: 268
        },
        position: {
          x: 300,
          y: this.stageHeight - 700
        },
        rotation: 10,
        animations: [
          {
            delay: this.stageHeight * 5,
            duration: this.stageHeight,
            to: {
              x: -this.stageWidth
            }
          },
          {
            delay: this.stageHeight * 5.7,
            duration: this.stageHeight * 0.3,
            to: {
              y: this.stageHeight
            }
          }
        ]
      },
      time: {
        resource: "时间地点PNG",
        size: {
          width: 296,
          height: 176
        },
        rotation: 10,
        position: {
          x: this.stageWidth - 50,
          y: this.stageHeight - 550
        },
        animations: [
          {
            delay: this.stageHeight * 5,
            duration: this.stageHeight * 0.7,
            to: {
              x: 0
            }
          },
          {
            delay: this.stageHeight * 5.7,
            duration: this.stageHeight * 0.3,
            to: {
              y: this.stageHeight
            }
          }
        ]
      }
    };
    this.initSprites(this.sprites);
  }
}
