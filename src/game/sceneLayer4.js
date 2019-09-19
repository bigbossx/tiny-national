import BaseLayer from "./baseLayer";
export default class Scene4 extends BaseLayer {
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
        resource: "首部宪法（背景）PNG",
        size: {
          width: this.stageWidth,
          height: 327 * 2
        },
        position: {
          x: 0,
          y: 300
        },
        animations: []
      },
      title: {
        resource: "首部宪法诞生PNG",
        action: true,
        size: {
          width: 273 * 2,
          height: 50 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "1954年PNG",
        size: {
          width: 126 * 2,
          height: 35 * 2
        },
        position: {
          x: 50,
          y: 200
        },
        animations: []
      },
      area: {
        resource: "北京PNG",
        size: {
          width: 128 * 2,
          height: 33 * 2
        },
        position: {
          x: 50,
          y: 300
        },
        animations: []
      },
      constitution: {
        frames: {
          key: "constitution",
          type: "frames",
          length: 3
        },
        size: { width: this.stageWidth, height: this.stageHeight },
        anchor: {
          x: 0.5,
          y: 0.5
        },
        position: {
          x: this.stageWidth / 2,
          y: this.stageHeight / 2
        },
        animations: [
          {
            delay: this.stageHeight * 3,
            duration: this.stageHeight * 0.5,
            animationAttr: "scale",
            from: {
              x: 1,
              y: 1
            },
            to: {
              x: 1.5,
              y: 1.5
            }
          },
          {
            delay: this.stageHeight * 3.5,
            duration: this.stageHeight * 0.5,
            to: {
              y: this.stageHeight
            }
          }
        ]
      },
      word: {
        text: "继承了共同纲领的建国目标，奠定了新\n中国的基本政治和法律制度",
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
            delay: this.stageHeight * 3,
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
