import BaseLayer from "./baseLayer";
export default class Scene9 extends BaseLayer {
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
        resource: "第一枚金牌背景JPG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      title: {
        resource: "许海峰获中国奥运首金PNG",
        size: {
          width: 212 * 2,
          height: 95 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "1984PNG",
        size: {
          width: 290,
          height: 80
        },
        position: {
          x: 50,
          y: 250
        },
        animations: []
      },
      area: {
        resource: "洛杉矶PNG",
        size: {
          width: 312,
          height: 80
        },
        position: {
          x: 50,
          y: 350
        },
        animations: []
      },
      medal: {
        resource: "金牌PNG",
        size: {
          width: 111 * 2,
          height: 259 * 2
        },
        position: {
          x: this.stageWidth,
          y: 0
        },
        anchor: {
          x: 1,
          y: 0
        },
        animations: []
      },
      star: {
        frames: {
          key: "star",
          type: "frames",
          length: 4
        },
        size: { width: 176 * 2, height: 167 * 2 },
        position: {
          x: this.stageWidth,
          y: 0
        },
        anchor: {
          x: 1,
          y: 0
        }
      },

      people: {
        resource: "许海峰PNG",
        size: {
          width: 700,
          height: 622
        },
        position: {
          x: 0,
          y: this.stageHeight
        },
        anchor: {
          x: 0,
          y: 1
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
