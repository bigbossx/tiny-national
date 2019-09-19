import BaseLayer from "./baseLayer";
export default class Scene5 extends BaseLayer {
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
      floor: {
        resource: "地板PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        },
        position: {
          x: this.stageWidth,
          y: this.stageHeight
        },
        rotation: 180
      },
      paper: {
        resource: "原子弹号外PNG",
        size: {
          width: this.stageWidth,
          height: 1106
        },
        position: {
          x: this.stageWidth - 100,
          y: 700
        },
        anchor: {
          x: 0.5,
          y: 0.5
        },
        rotation: -15,
        animations: [
          {
            delay: this.stageHeight * 4 + 50,
            duration: 50,
            from: {
              rotation: 180
            }
          },
          {
            delay: this.stageHeight * 4 + 50,
            duration: 50,
            from: {
              x: this.stageWidth * 2
            }
          }
        ]
      },
      yuanzidan: {
        frames: {
          key: "yuanzidan",
          type: "frames",
          length: 6
        },
        size: { width: this.stageWidth / 2, height: 604 },
        position: { x: 0, y: 500 },
        animations: [
          {
            delay: this.stageHeight * 4,
            duration: 300,
            from: {
              x: this.stageWidth
            }
          }
        ]
      },
      qingdan: {
        frames: {
          key: "qingdan",
          type: "frames",
          length: 4
        },
        size: { width: this.stageWidth, height: 746 },
        position: { x: 150, y: 300 },
        animations: [
          {
            delay: this.stageHeight * 4 + 300,
            duration: 50,
            from: {
              y: this.stageHeight
            }
          }
        ]
      },
      bottom: {
        resource: "戈壁滩PNG",
        size: {
          width: this.stageWidth,
          height: 372
        },
        position: {
          x: 0,
          y: this.stageHeight - 372
        }
      },
      title: {
        resource: "第一颗原子弹&氢弹爆炸成功PNG",
        action: true,
        size: {
          width: 492,
          height: 266
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "1964PNG",
        size: {
          width: 252,
          height: 132
        },
        position: {
          x: 100,
          y: this.stageHeight - 372 - 112
        },
        animations: [
          {
            delay: this.stageHeight * 4,
            duration: 300,
            from: {
              x: this.stageWidth
            }
          }
        ]
      },
      time2: {
        resource: "1967PNG",
        size: {
          width: 252,
          height: 112
        },
        position: {
          x: this.stageWidth - 252 - 50,
          y: this.stageHeight - 372
        },
        animations: [
          {
            delay: this.stageHeight * 4 + 300,
            duration: 50,
            from: {
              y: this.stageHeight
            }
          }
        ]
      },
      area: {
        resource: "罗布泊PNG",
        size: {
          width: 270,
          height: 70
        },
        position: {
          x: 50,
          y: 330
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
