import BaseLayer from "./baseLayer";
export default class Scene5 extends BaseLayer {
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
      floor: {
        resource: "地板PNG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        },
        position: {
          x: this.stageWidth,
          y: this.stageHeight
        },
        rotation: 180
      },
      paper: {
        resource: "原子弹号外PNG",
        size: {
          width: this.stageWidth,
          height: 1106
        },
        position: {
          x: 50,
          y: 300
        },
        rotation: -15
      },
      yuanzidan: {
        frames: {
          key: "yuanzidan",
          type: "frames",
          length: 6
        },
        size: { width: this.stageWidth / 2, height: 604 },
        position: { x: 0, y: 500 }
      },
      qingdan: {
        frames: {
          key: "qingdan",
          type: "frames",
          length: 4
        },
        size: { width: this.stageWidth, height: 746 },
        position: { x: 150, y: 300 }
      },
      bottom: {
        resource: "戈壁滩PNG",
        size: {
          width: this.stageWidth,
          height: 372
        },
        position: {
          x: 0,
          y: this.stageHeight - 372
        }
      },
      title: {
        resource: "第一颗原子弹&氢弹爆炸成功PNG",
        size: {
          width: 492,
          height: 266
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "1964PNG",
        size: {
          width: 252,
          height: 132
        },
        position: {
          x: 100,
          y: this.stageHeight - 372 - 112
        },
        animations: []
      },
      time2: {
        resource: "1967PNG",
        size: {
          width: 252,
          height: 112
        },
        position: {
          x: this.stageWidth - 252 - 50,
          y: this.stageHeight - 372
        },
        animations: []
      },
      area: {
        resource: "罗布泊PNG",
        size: {
          width: 270,
          height: 70
        },
        position: {
          x: 50,
          y: 330
        },
        animations: []
      }
    };
    this.initSprites(this.sprites);
  }
}
