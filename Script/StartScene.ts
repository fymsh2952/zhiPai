

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {

    @property(cc.Button)
    btnStart: cc.Label = null;



    start () {
        this.btnStart.node.on(cc.Node.EventType.TOUCH_START,()=>{
            cc.director.loadScene('Game', ()=>{
                console.log('Game 场景切换成功')
            })
        })
    }


}
