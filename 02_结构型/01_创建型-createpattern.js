// 元素创见型
// 功能：创建元素
// 目的：规范创建步骤

// 1. 工厂模式
// 隐藏创建过程、暴露共同接口
// 需求：游戏商店里下载初始化游戏，并且可以直接运行游戏

class Shop {
    static create(name) {
        return new Game(name)
    }
}

class Game {
    constructor(name) {
        this.name = name
    }
    init() {
        // 初始化
    }
    run() {
        // 运行
    }
}

const pubg = new Game('pubg')
pubg.init()
pubg.run()

const lol = Shop.create('LOL')
lol.init()
lol.run()


// 2. 建造者
// 拆分简单模块，独立执行建造 => 注重于过程和搭配
class Product {
    constructor(name) {
        this.name = name
    }

    init() {
        // product init
    }
}

class Skin {
    constructor(name) {
        this.name = name
    }

    init() {
        // Skin init
    }
}

class Shop {
    constructor() {
        this.package = ''
    }

    create(name) {
        this.package = new PackageBuilder(name)
    }

    getGamePackage() {
        return this.package.getPackage()
    }
}

class PackageBuilder {
    constructor(name) {
        this.game = new Product(name)
        this.skin = new Skin(name)
    }
    getPackage() {
        return this.game.init() + this.skin.init()
    }
}



// 3. 单例模式：全局只有一个实例，例如 Router
class PlayStation {
    constructor() {
        this.status = 'off'
    }

    play() {
        if (this.status === 'on') {
            console.log('目前已经开机了')
            return
        }

        this.status = 'on'
        console.log('开机成功')
    }

    shutDown() {
        if (this.status === 'off') {
            console.log('目前已经关机了')
        }

        this.status = 'off'
        console.log('关机成功 ')
    }

    // 单例写法二
    static instance = undefined

    static getInstance() {
        if (!PlayStation.instance) {
            PlayStation.instance = new PlayStation
        }

        return PlayStation.instance
    }
}

// 单例写法一
PlayStation.instance = undefined
PlayStation.getInstance = function() {
    return function() {
        if (!PlayStation.instance) {
            console.log('000000')
            PlayStation.instance = new PlayStation()
        }
        console.log('1111111')
        return PlayStation.instance
    }()
}

const play = PlayStation.getInstance()
const play1 = PlayStation.getInstance()
// 全局只有一个实例


// 模式场景
// 1. 批量生产：频繁用于产出相同元素 => 工厂模式
//    实际应用：Button producer: 生产很多按钮   =>  利用传参批量生产元素  => 工厂模式
// 2. 构建过程独立且包含顺序 => 建造者模式
//    生产页头元素：包含了 title、button、breadcum  =>  建造者模式
// 3. 全局只要一个实例，注重一体化 => 单例模式
