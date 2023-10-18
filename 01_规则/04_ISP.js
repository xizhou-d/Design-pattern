// 4. 接口隔离原则
// 多个专业的接口比单个胖接口好用


// 需求
// 实现游戏中台，快速开发游戏
class Game {
    constructor(name) {
        this.name = name
    }

    run() {
        // 跑
    }

    shot() {
        // 射击
    }

    mega() {
        // 放大招 
    }
}

class PUBG extends Game {
    constructor() {
        // PUBG constructor
    }
}

class LOL extends Game {
    constructor() {
        // LOL constructor
    }
}

const pubg = new PUBG()
pubg.run()
pubg.shot()
pubg.mega() // 如果一下继承过来，那么吃鸡里面也能放大招，这是不行的


// 重构：用多个接口代替他，每个接口服务于一个子模块
class Game {
    constructor(name) {
        this.name = name
    }
    // 通用的能力
    run() {
        // 跑
    }
}

class FPS {
    // 
}

class MOBA {
     
}

class PUBG extends Game {
    constructor() {
        // PUBG constructor
    }

    shot() {

    }
}

class LOL extends Game {
    constructor() {
        // LOL constructor
    }

    mega() {

    }
}


 