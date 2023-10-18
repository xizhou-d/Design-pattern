/** 
 * 行为型：不同对象之间划分责任和算法的方式
 * 
 * 职责链模式：1. 链式调用 2. 职责独立 3. 顺序执行
 */

class Action {
    constructor(name) {
        this.name = name
        this.nextAction = null
    }

    setNextAction(action) {
        this.nextAction = action
    }

    handle() {
        if (this.nextAction !== null) {
            this.nextAction.handle()
        }
    }
}

const dad = new Action('dad')
const mom = new Action('mom')
const wife = new Action('wife')

dad.setNextAction(mom)
mom.setNextAction(wife) 

dad.handle()