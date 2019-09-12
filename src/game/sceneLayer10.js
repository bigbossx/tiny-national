import BaseLayer from "./baseLayer";
export default class Scene10 extends BaseLayer {
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
        resource: "香港回归背景PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      title: {
        resource: "香港回归PNG",
        size: {
          width: 187 * 2,
          height: 46 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "1997PNG",
        size: {
          width: 115 * 2,
          height: 31 * 2
        },
        position: {
          x: 187 * 2 + 50 + 20,
          y: 80
        },
        animations: []
      },
      word: {
        text:
          "1997年7月1日中国政府正式对香港恢复\n行使主权，结束了英国一个半世纪的殖\n民统治",
        style: {
          fontSize: 36,
          lineHeight: 50,
          fill: "#ffffff"
        },
        position: {
          x: 50,
          y: 200
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
          x: 210,
          y: 400
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
