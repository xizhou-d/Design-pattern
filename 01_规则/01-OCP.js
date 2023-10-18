// 1. 开闭原则 - 对拓展开放、对修改关闭
// 目标：现有场景下，对于需要拓展的功能进行开放、拒绝直接的功能修改

// sprint 1 - 女生节，吃鸡要高亮 + LOL要弹出折扣
// render   渲染层面
if (game = "PUBG") {
    // 高亮操作
} else {
    // 正常显示
}

// event 事件层面
if (game = 'LOL') {
    // 弹出折扣框
} else {
    // 付款应用
}


// sprint 2 - 要对部分游戏进行置灰 + 其付款页面要显示停止发售
// render
if (game === "PUBG") {
    // 高亮操作
} else if (game === 'wow') {
    // 置灰
} else {
    // 正常显示
}

// event 事件层面
if (game === 'LOL') {
    // 弹出折扣框
} else if (game === 'wow') {
    // break  +  提示停止发售
} else {
    // 付款应用
}



// 重构 1
// render
gameManager(game).setColor()
// event
gameManager(game).openDialog()
// game 库
function gameManager(game) {
    return `${game}Manager`;
}
// 游戏层
const LOLManager = {
    setColor() {
        // 正常 
    },

    openDialog() {
        // 弹出折扣框
    }
}

const PUBGManager = {
    setColor() {
        // 高亮
    },

    openDialog() {
        // 正常付款 
    }
}

const WowManager = {
    setColor() {
        // 置灰
    },

    openDialog() {
        // 下架
    }
}


// 重构 2
// 默认逻辑
class Game {
    constructor(name) {
        this.name = name
    }

    setColor() {

    }

    openDialog() {

    }
}

class LOL extends Game {
    setColor() {
        // 正常
    }
    openDialog() {
        // 弹出折扣
    }
}

class PUBG extends Game {
    setColor() {
        // 高亮
    }
    openDialog() {
        // 付款
    }
}

class Wow extends Game {
    setColor() {
        // 置灰
    }
    openDialog() {
        // 下架
    }
}