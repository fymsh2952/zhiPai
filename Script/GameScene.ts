

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

  

    start () {
        console.log('加载场景成功 start')
        this.label.string = "GameScene"
    }

   
}
