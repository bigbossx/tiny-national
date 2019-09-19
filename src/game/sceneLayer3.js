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
      cover: {
        resource: "第一汽车厂背景图PNG",
        size: {
          width: this.stageWidth,
          height: 381 * 2
        },
        position: {
          x: 0,
          y: 300
        },
        animations: []
      },
      title: {
        resource: "第一批国产汽车试制成功PNG",
        size: {
          width: 676,
          height: 172
        },
        action: true,
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "1953PNG",
        size: {
          width: 290,
          height: 80
        },
        position: {
          x: 50,
          y: 250
        },
        animations: []
      },
      area: {
        resource: "长春PNG",
        size: {
          width: 312,
          height: 80
        },
        position: {
          x: 50,
          y: 350
        },
        animations: []
      },
      car: {
        resource: "解放CA10PNG",
        size: {
          width: 664 * 2,
          height: 313 * 2
        },
        position: {
          x: 0,
          y: 550
        },
        animations: [
          {
            delay: this.stageHeight * 2,
            duration: this.stageHeight * 0.5,
            from: {
              x: this.stageWidth
            },
            to: { x: 0 }
          }
        ]
      },
      name: {
        resource: "解放CA10(文字)PNG",
        size: {
          width: 170 * 2,
          height: 35 * 2
        },
        position: {
          x: 200,
          y: this.stageHeight - 250
        },
        animations: []
      },
      desc: {
        resource: "中国第一辆汽车PNG",
        size: {
          width: 159 * 2,
          height: 25 * 2
        },
        position: {
          x: 200,
          y: this.stageHeight - 150
        },
        animations: []
      },
      word: {
        text:
          "第一辆解放牌汽车下线初期生产的解放\n牌的型号是CA10型，包括CA10、CA10B\n和CA10C等型号",
        style: {
          fontSize: 36,
          lineHeight: 50,
          fill: "#ffffff"
        },
        position: {
          x: 50,
          y: 400
        },
        animations: [
          {
            delay: this.stageHeight * 2,
            duration: this.stageHeight * 0.1,
            from: {
              alpha: 0
            },
            to: { alpha: 1 }
          }
        ]
      }
    };
    this.initSprites(this.sprites);
  }
}
