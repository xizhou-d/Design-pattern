// 代理模式
// 应用场景：代理对象与调用对象解藕，不直接调用对象
// 使用代理人来代替原始对象
// 游戏防沉迷

class Game {
    play() {
        return 'playing'
    }
}

class Player {
    constructor(age) {
        this.age = age
    }
}

class GameProxy {
    constructor(player) {
        this.player = player
    }

    play() {
        return (
            this.player.age < 16
                ? 'too young to play'
                : new Game()
        )
    }
}



/** 实际应用 */
// 1. ul 中有多个 li，每个 li 上的点击事件      =>      利用冒泡做一个事件委托，代理到 ul   =>      代理