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
      title: {
        resource: "首部宪法诞生PNG",
        size: {
          width: 446,
          height: 117
        },
        animations: []
      },
      time: {
        resource: "1954年PNG",
        size: {
          width: 290,
          height: 80
        },
        animations: []
      },
      area: {
        resource: "北京PNG",
        size: {
          width: 312,
          height: 80
        },
        animations: []
      },
      boom: {
        frames: {
          key: "boom",
          type: "transform",
          startY: this.stageHeight * 3 - 200,
          endY: this.stageHeight * 3,
          length: 19
        },
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
