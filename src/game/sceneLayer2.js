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
        animations: []
      },
      time: {
        resource: "1950年PNG",
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
        resource: "鸭绿江PNG",
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
      fly: {
        resource: "战斗机PNG",
        size: {
          width: 455 * 2,
          height: 155 * 2
        },
        position: {
          x: 50,
          y: 350
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
