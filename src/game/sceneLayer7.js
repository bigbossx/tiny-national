import BaseLayer from "./baseLayer";
export default class Scene7 extends BaseLayer {
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
        resource: "恢复高考背景图PNG",
        size: {
          width: this.stageWidth,
          height: 290 * 2
        },
        position: {
          x: 0,
          y: 200
        }
      },
      title: {
        resource: "恢复高考PNG",
        size: {
          width: 173 * 2,
          height: 47 * 2
        },
        action: true,
        position: {
          x: 50,
          y: 100
        },
        animations: []
      },
      book: {
        frames: {
          key: "书",
          type: "frames",
          length: 7
        },
        size: { width: 180, height: 144 },
        position: { x: this.stageWidth - 250, y: 50 }
      },
      time: {
        resource: "1977PNG",
        size: {
          width: 252,
          height: 70
        },
        position: {
          x: 50,
          y: 250
        },
        animations: []
      },
      certificate1: {
        resource: "准考证JPG",
        size: {
          width: 375,
          height: 564
        },
        position: {
          x: 200,
          y: this.stageHeight
        },
        anchor: {
          x: 0.5,
          y: 0.5
        },
        rotation: -10,
        animations: [
          {
            delay: this.stageHeight * 6,
            duration: 100,
            from: {
              rotation: 0
            }
          },
          {
            delay: this.stageHeight * 6,
            duration: 50,
            from: {
              y: this.stageHeight + 300
            }
          }
        ]
      },
      certificate2: {
        resource: "准考证JPG",
        size: {
          width: this.stageWidth,
          height: 564 * 2
        },
        position: {
          x: this.stageWidth,
          y: this.stageHeight - 100
        },
        anchor: {
          x: 0.5,
          y: 0.5
        },
        rotation: -20,
        animations: [
          {
            delay: this.stageHeight * 6,
            duration: 100,
            from: {
              rotation: 0
            }
          },
          {
            delay: this.stageHeight * 6,
            duration: 50,
            from: {
              y: this.stageHeight + 300
            }
          }
        ]
      },
      write: {
        frames: {
          key: "写字",
          type: "frames",
          length: 3
        },
        size: { width: 80, height: 86 },
        position: { x: 230, y: 560 }
      },
      word: {
        text:
          "高考制度的恢复，改变了几代人的命运，使\n中国的人才培养重新步入健康的发展轨道。",
        style: {
          fontSize: 36,
          lineHeight: 50,
          fill: "#ffffff"
        },
        position: {
          x: 50,
          y: 400
        },
        animations: [
          {
            delay: this.stageHeight * 6,
            duration: this.stageHeight * 0.1,
            from: {
              alpha: 0
            },
            to: { alpha: 1 }
          }
        ]
      }
    };
    this.initSprites(this.sprites);
  }
}
