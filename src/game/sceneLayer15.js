import BaseLayer from "./baseLayer";
export default class Scene15 extends BaseLayer {
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
        resource: "第一艘航母背景PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        },
        position: {
          x: 0,
          y: this.stageHeight
        },
        anchor: {
          x: 0,
          y: 1
        }
      },
      title: {
        resource: "第一艘航空母舰辽宁号开始服役PNG",
        size: {
          width: 272 * 2,
          height: 97 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "2012PNG",
        size: {
          width: 115 * 2,
          height: 33 * 2
        },
        position: {
          x: 50,
          y: 300
        },
        animations: []
      },
      frigate: {
        resource: "护卫舰PNG",
        size: {
          width: 198 * 2,
          height: 34 * 2
        },
        position: {
          x: this.stageWidth / 2,
          y: this.stageHeight / 2
        },
        anchor: {
          x: 0.5,
          y: 0.7
        },
        animations: []
      },
      name: {
        resource: "辽宁号航空母舰PNG",
        size: {
          width: 154 * 2,
          height: 29 * 2
        },
        position: {
          x: this.stageWidth / 2,
          y: this.stageHeight / 2
        },
        anchor: {
          x: 0.5,
          y: 0
        }
      },
      warship: {
        frames: {
          key: "辽宁号",
          type: "frames",
          length: 6
        },
        size: {
          width: 874 * 2,
          height: 184 * 2
        },
        position: {
          x: this.stageWidth / 2,
          y: this.stageHeight / 2
        },
        anchor: {
          x: 0.5,
          y: 0
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
