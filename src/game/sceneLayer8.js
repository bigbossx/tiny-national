import BaseLayer from "./baseLayer";
export default class Scene8 extends BaseLayer {
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
        resource: "改革开发背景JPG",
        size: {
          width: this.stageWidth,
          height: this.stageHeight
        }
      },
      title: {
        resource: "改革开放PNG",
        size: {
          width: 176 * 2,
          height: 47 * 2
        },
        position: {
          x: 50,
          y: 50
        },
        animations: []
      },
      time: {
        resource: "1979PNG",
        size: {
          width: 126 * 2,
          height: 34 * 2
        },
        position: {
          x: 50,
          y: 34 * 2 + 47 * 2
        },
        animations: []
      },
      hand: {
        resource: "邓小平手PNG",
        size: {
          width: 134 * 2,
          height: 271 * 2
        },
        position: {
          x: 50,
          y: this.stageHeight - 300
        },
        rotation: 4,
        anchor: {
          x: 0,
          y: 1
        },
        animations: []
      },
      people: {
        resource: "邓小平PNG",
        size: {
          width: 220 * 2,
          height: 302 * 2
        },
        position: {
          x: 50,
          y: 700
        },
        animations: []
      },
      word: {
        text:
          "1979年7月15日，中央正式批准广东、福建\n两省在对外经济活动中实行特殊政策、灵\n活措施，迈开了改革开放的历史性脚步。",
        style: {
          fontSize: 36,
          lineHeight: 50,
          fill: "#ffffff"
        },
        position: {
          x: 50,
          y: this.stageHeight - 400
        },
        animations: [
          {
            delay: this.stageHeight * 7,
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
