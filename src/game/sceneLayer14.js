import BaseLayer from "./baseLayer";
export default class Scene14 extends BaseLayer {
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
        resource: "纸币PNG",
        size: {
          width: this.stageWidth,
          height: 293 * 2
        },
        position: {
          x: 0,
          y: this.stageHeight
        },
        anchor: {
          x: 0,
          y: 1
        }
      },
      title: {
        resource: "中国GDP超过日本成为世界第二PNG",
        size: {
          width: 302 * 2,
          height: 95 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "2010PNG",
        size: {
          width: 115 * 2,
          height: 33 * 2
        },
        position: {
          x: 50,
          y: 300
        },
        animations: []
      },
      gdp: {
        frames: {
          key: "GDP",
          type: "frames",
          length: 8
        },
        size: {
          width: 166 * 2,
          height: 285 * 2
        },
        position: {
          x: this.stageWidth / 2,
          y: this.stageHeight / 2
        },
        anchor: {
          x: 0.5,
          y: 0.3
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
