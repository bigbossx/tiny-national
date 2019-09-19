import BaseLayer from "./baseLayer";
export default class Scene12 extends BaseLayer {
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
        resource: "飞船背景PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      title: {
        resource: "首次成功发射载人宇宙飞船神舟五号PNG",
        size: {
          width: 227 * 2,
          height: 145 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "2003PNG",
        size: {
          width: 115 * 2,
          height: 31 * 2
        },
        position: {
          x: 50,
          y: 145 * 2 + 100
        },
        animations: []
      },
      rocket: {
        frames: {
          key: "火箭",
          type: "frames",
          length: 4
        },
        size: {
          width: 50 * 2,
          height: 394 * 2
        },
        position: {
          x: this.stageWidth - 147 * 2,
          y: this.stageHeight
        },
        anchor: {
          x: 1,
          y: 1
        },
        animations: [
          {
            delay: this.stageHeight * 11,
            duration: 400,
            to: {
              y: this.stageHeight - 400
            }
          }
        ]
      },
      launch: {
        resource: "发射台PNG",
        size: {
          width: 147 * 2,
          height: 362 * 2
        },
        position: {
          x: this.stageWidth,
          y: this.stageHeight
        },
        anchor: { x: 1, y: 1 }
      }
    };
    this.initSprites(this.sprites);
  }
}
