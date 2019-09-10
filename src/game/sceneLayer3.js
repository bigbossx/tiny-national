import BaseLayer from "./baseLayer";
export default class Scene3 extends BaseLayer {
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
        resource: "第一批国产汽车试制成功PNG",
        size: {
          width: 676,
          height: 172
        },
        animations: []
      },
      time: {
        resource: "1953PNG",
        size: {
          width: 290,
          height: 80
        },
        animations: []
      },
      area: {
        resource: "长春PNG",
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
