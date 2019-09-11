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
      sky: {
        resource: "太空JPG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      satellite: {
        resource: "东方红一号PNG",
        size: {
          width: 730,
          height: 512
        }
      },
      earth: {
        resource: "地球PNG",
        size: {
          width: this.stageWidth * 2,
          height: 570
        },
        position: {
          x: 0,
          y: this.stageHeight - 570
        }
      },
      title: {
        resource: "第一颗人造卫星发射成功PNG",
        size: {
          width: 342,
          height: 268
        },
        position: {
          x: 100,
          y: this.stageHeight - 800
        },
        rotation: 20,
        animations: []
      },
      time: {
        resource: "时间地点PNG",
        size: {
          width: 296,
          height: 176
        },
        rotation: 20,
        position: {
          x: this.stageWidth - 300,
          y: this.stageHeight - 600
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
