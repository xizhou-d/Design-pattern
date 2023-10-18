// 2. 单一职责原则
// 目标：岗位职责单一，互不重叠

// SRP - 通过解藕让每一个职责更加的独立
// 目标 - 一个功能只做一件事

// sprint
// game store
class PUBGManager {
    openDialog() {
        // 计算金额
        setPrice()
    }
}

const game = new PUBGManager()
game.openDialog()   // 弹框  <=>  计算金额   两个功能耦合


// 重构
// gameManager.js   -   业务抽离
class PUBGManager {
    constructor(command) {
        this.command = command
    }

    openDialog(price) {
        this.command.setPrice(price)
    }
}

// optManager.js    -   操作管理器
class PriceManager {
    setPrice(price) {
        // 配置
    }
}

// main.js
const exec = new PriceManager()
const game1 = new PUBGManager(exec)
game.openDialog(15 )