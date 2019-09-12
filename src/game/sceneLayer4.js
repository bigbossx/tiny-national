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
        animations: [
          {
            delay: this.stageHeight * 3,
            duration: this.stageHeight * 0.5,
            from: {
              "scale.x": 1
            },
            to: { "scale.x": 2 }
          }
        ]
      }
    };
    this.initSprites(this.sprites);
  }
}
