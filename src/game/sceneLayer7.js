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
          x: -50,
          y: this.stageHeight - 300
        },
        rotation: -10,
        animations: []
      },
      certificate2: {
        resource: "准考证JPG",
        size: {
          width: this.stageWidth,
          height: 564 * 2
        },
        position: {
          x: this.stageWidth / 4,
          y: this.stageHeight - 600
        },
        rotation: -20,
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
