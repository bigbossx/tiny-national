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
      title: {
        resource: "第一艘航空母舰辽宁号开始服役PNG",
        size: {
          width: 446,
          height: 117
        },
        animations: []
      },
      time: {
        resource: "1950年PNG",
        size: {
          width: 290,
          height: 80
        },
        animations: []
      },
      area: {
        resource: "鸭绿江PNG",
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
