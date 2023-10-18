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
        for (let observer of this.observers) {
            observer.update(state)
        }
    }
}

class Observer {
    constructor(name, center) {
        this.name = name
        this.center = center
        this.center.attach(this)
    }

    update() {
        console.log(1111111)
    }
}

const center = new MediaCenter()

const o1 = new Observer('o1', center)
const o2 = new Observer('02', center)

center.setState(8888)