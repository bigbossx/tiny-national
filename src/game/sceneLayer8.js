import BaseLayer from "./baseLayer";
export default class Scene8 extends BaseLayer {
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
        resource: "改革开发背景JPG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      title: {
        resource: "改革开放PNG",
        size: {
          width: 176 * 2,
          height: 47 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "1979PNG",
        size: {
          width: 126 * 2,
          height: 34 * 2
        },
        position: {
          x: 50,
          y: 34 * 2 + 47 * 2
        },
        animations: []
      },
      hand: {
        resource: "邓小平手PNG",
        size: {
          width: 134 * 2,
          height: 271 * 2
        },
        position: {
          x: 50,
          y: this.stageHeight - 300
        },
        rotation: 4,
        anchor: {
          x: 0,
          y: 1
        },
        animations: []
      },
      people: {
        resource: "邓小平PNG",
        size: {
          width: 220 * 2,
          height: 302 * 2
        },
        position: {
          x: 50,
          y: 700
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
