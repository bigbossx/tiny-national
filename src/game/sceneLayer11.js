import BaseLayer from "./baseLayer";
export default class Scene11 extends BaseLayer {
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
        resource: "澳门回归背景PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      title: {
        resource: "澳门回归PNG",
        size: {
          width: 187 * 2,
          height: 46 * 2
        },
        position: {
          x: this.stageWidth,
          y: 50
        },
        anchor: {
          x: 1,
          y: 0
        },
        animations: []
      },
      time: {
        resource: "1999PNG",
        size: {
          width: 115 * 2,
          height: 31 * 2
        },
        position: {
          x: this.stageWidth,
          y: 80 + 46 * 2
        },
        anchor: {
          x: 1,
          y: 0
        },
        animations: []
      },
      word: {
        text:
          "1999年12月20日中国政府恢复对澳门\n行使主权，中华人民共和国澳门特别行\n政区成立，结束了葡萄牙对澳门的殖\n民统治",
        style: {
          fontSize: 36,
          lineHeight: 50,
          fill: "#ffffff"
        },
        position: {
          x: 50,
          y: 250
        },
        animations: []
      },
      flag: {
        frames: {
          key: "国旗",
          type: "frames",
          length: 4
        },
        size: { width: 140, height: 95 },
        position: {
          x: 180,
          y: 460
        }
      },
      control: {
        frames: {
          key: "遥控器",
          type: "frames",
          length: 17
        },
        size: { width: this.stageWidth, height: this.stageHeight },
        position: {
          x: 0,
          y: 0
        }
      }
    };
    this.initSprites(this.sprites);
  }
}
