import BaseLayer from "./baseLayer";
export default class Scene6 extends BaseLayer {
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
        resource: "第一颗人造卫星发射成功PNG",
        size: {
          width: 446,
          height: 117
        },
        animations: []
      },
      time: {
        resource: "1977PNG",
        size: {
          width: 290,
          height: 80
        },
        animations: []
      },
      area: {
        resource: "甘肃酒泉PNG",
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
