// 3. DIP：依赖倒置原则
// 上层不应当依赖下层的实现
// 目标：面向抽象进行编程，而不是面向实现进行 coding，降低需求与实现的耦合程度

// 需求
// sprint 1 => 实现一个分享功能
class Store {
    constructor() {
        this.share = new Share()
    }
}

class Share {
    shareTo() {
        // 分享到不同的平台 
    }
}

const store = new Store()
store.share.shareTo('wx')

// sprint 2
// 评分功能
class Store {
    constructor() {
        this.share = new Share()
        this.rate = new Rate()
    }
}

class Share {
    shareTo() {
        // 分享到不同的平台 
    }
}

class Rate {
    star(stars) {
        // 评分
    }
}

const store = new Store()
store.rate.star(5)


// 重构
// 目标：暴露挂载 => 动态挂载
class Rate {
    init(store) {
        store.share = this
    }

    star() {
        // 评分
    }
}

class Share {
    init(store) {
        store.share = this
    }

    shareTo(plateform) {
        // 分享到不同的平台
    }
}

class Store {
    static modules = new Map()

    constructor() {
        // 1. 遍历所有名单作为初始化挂载， 在 constructor 之前需要先调用 inject 方法，modules 才有内容
        for (let module of modules) {
            module.inst(this)
        }
    }
    // 注入功能模块
    static inject(module) {
        Store.modules.set(module.constructor.name, module)
    }
}

// 1. 依次注册所有模块
const rate = new Rate()
Store.inject(rate)

// 2. 初始化商城
const store = new Store()
store.rate.star(5)


