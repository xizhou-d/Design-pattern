/** 
 * 行为型：不同对象之间划分责任和算法的方式
 * 
 * 命令模式：请求以命令的形式包裹在对象中，并且传递给调用对象
 */

// 接受者
class Receiver {
    execute() {
        // 执行指令
    }
}

// 触发者
class Operator {
    constructor(command) {
        this.command = command
    }

    run() {
        this.command.excute()
    }
}

// 指令器
class Command {
    constructor(receiver) {
        this.receiver = receiver
    }

    excute() {
        this.receiver.excute()
    }
}

const receiver = new Receiver()
const order = new Command(receiver)
const player = new Operator(order)
player.run()