/** 
 * 行为型：不同对象之间划分责任和算法的方式
 * 
 * 模版模式：在模版中定义好每个方法步骤，方法本身关注于干自己的事情
 */

class Device {
    constructor(pipeLine) {
        // pipeLine: 流水线，执行顺序可以由外部定义
    }
    powerOn() {
        // 开机
    }
    login() {
        // 登陆
    }
    clickStart() {
        // 开始游戏
    }
    enterGame() {
        // 加入一场游戏
    }
    play() {
        this.powerOn()
        this.login()
        this.clickStart()
        this.enterGame()
    }
    quickPlay() {
        this.powerOn()
        this.enterGame()
    }
}