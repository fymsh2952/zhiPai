import GameScene from "./GameScene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SplashScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

  

    start () {
       
        this.label.string = "你好33The ";
        setTimeout(() => {
            cc.director.loadScene('Start',()=>{
                console.log('加载场景成功')
            })
        }, 0);
    }
}
