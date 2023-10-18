// 里氏替换原则
// 子类能够覆盖父类 / 父类能够出现的地方，子类就一定能出现

// sprint
class Game {
    start() {
        // 开机
    }

    shutdown() {
        // 关机
    }

    play() {
        // 开始游戏
    }
}

const game = new Game()
game.play()


// sprint 2
class MobileGame extends Game {
    tombStone() {
        // tombStone
    }

    play() {
        // 开始移动端游戏
    }
}

const mobile = new MobileGame()
mobile.play()



// 重构
class Game {
    start() {
        // 开机
    }

    shutdown() {
        // 关机
    }
}

class MobileGame extends Game {
    tombStone() {
        // tombStone
    }

    play() {
        // 开始移动端游戏
    }
}

class PCGame extends Game {
    speed() {
        // 加速器
    }

    play() {
        // 开始 
    }
}
