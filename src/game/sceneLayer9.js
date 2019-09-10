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
      title: {
        resource: "许海峰获中国奥运首金PNG",
        size: {
          width: 446,
          height: 117
        },
        animations: []
      },
      time: {
        resource: "1984PNG",
        size: {
          width: 290,
          height: 80
        },
        animations: []
      },
      area: {
        resource: "洛杉矶PNG",
        size: {
          width: 312,
          height: 80
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
