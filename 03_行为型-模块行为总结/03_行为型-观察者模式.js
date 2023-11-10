/** 
 * 行为型：不同对象之间划分责任和算法的方式
 * 
 * 观察者模式：当一个属性发生状态改变的时候，观察者会连续引发所有相关状态的自动流转
 */

class MediaCenter {
    constructor() {
        this.state = ''
        this.observers = []
    }

    attach(observer) {
        this.observers.push(observer)
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state

        this.observers.forEach(ob => {
            ob.update(state)
        })
    }

    notifyAllObservers() {
        this.observers.forEach(ob => {
            ob.update(this.state)
        })
    }
}

class Observer {
    constructor(name, center) {
        this.name = name
        this.center = center
        this.center.attach(this)
    }

    update(state) {

    }
}