// 装饰器模式
// 应用场景：附着于多个组件之上，批量动态赋予功能的时候
// 动态的将责任附加到对象上
// 设备升级

class Device {
    create() {
        console.log('PlayStation4')
    }
}

class Phone {
    create() {
        console.log('iphone14')
    }
}

class Decorator {
    constructor(device) {
        this.device = device
    }

    create() {
        this.device.create()
        this.update(device)
    }

    update(device) {
        console.log(device + 'ro')
    }
}

const device = new Device()
device.create()

const newDevice = new Decorator(device)
newDevice.create()



/** 实际应用 */
// 1. 按钮、icon、title 三个组件。希望开发一个模块让三个组件都有 disabled 的功能    =>  装饰器