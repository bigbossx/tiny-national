import BaseLayer from "./baseLayer";
export default class Scene2 extends BaseLayer {
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
        resource: "抗美援朝背景PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        },
        animations: []
      },
      title: {
        resource: "抗美援朝PNG",
        size: {
          width: 446,
          height: 117
        },
        position: {
          x: 50,
          y: 50
        },
        animations: [
          {
            delay: this.stageHeight * 0.5,
            duration: this.stageHeight * 0.3,
            from: {
              x: -500
            },
            to: { x: 50 }
          }
        ]
      },
      time: {
        resource: "1950年PNG",
        size: {
          width: 290,
          height: 80
        },
        position: {
          x: 50,
          y: 200
        },
        animations: []
      },
      area: {
        resource: "鸭绿江PNG",
        size: {
          width: 312,
          height: 80
        },
        position: {
          x: 50,
          y: 300
        },
        animations: []
      },
      word: {
        text:
          "1950年10月19日，中国人民志愿军赴朝鲜\n战场，经过两年多的艰苦斗争，最终取得\n了战争胜利，1953年7月签署停战协议",
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
            delay: this.stageHeight * 1,
            duration: this.stageHeight * 0.1,
            from: {
              alpha: 0
            },
            to: { alpha: 1 }
          }
        ]
      },
      fly: {
        resource: "战斗机PNG",
        size: {
          width: 455 * 2,
          height: 155 * 2
        },
        position: {
          x: 50,
          y: 550
        },
        animations: [
          {
            delay: this.stageHeight * 1,
            duration: this.stageHeight * 0.5,
            from: {
              x: this.stageWidth
            },
            to: { x: 50 }
          }
        ]
      },
      fire: {
        frames: {
          key: "fire",
          type: "frames",
          length: 18
        },
        size: { width: this.stageWidth, height: 249 * 2 },
        position: {
          x: 0,
          y: this.stageHeight
        },
        anchor: {
          x: 0,
          y: 1
        }
      },
      boom: {
        frames: {
          key: "boom",
          type: "transform",
          startY: this.stageHeight * 1.6,
          endY: this.stageHeight * 2 + 100,
          length: 19
        },
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        },
        animations: [
          // {
          //   delay: this.stageHeight * 1.95,
          //   duration: 1,
          //   from: {
          //     alpha: 0
          //   },
          //   to: { alpha: 1 }
          // }
        ]
      }
    };
    this.initSprites(this.sprites);
  }
}
