// 结构型
// 功能：优化结构的实现方式
// 模式场景：中间转换场景、保持模块间独立的时候   -   适配器模式

// 适配器模式   -   adapter
// 适配独立模块，保证模块间的解藕和连接兼容

class HKDevice {
    getPlug() {
        return '包含两根柱子'
    }
}

class Target {
    constructor() {
        this.plug = new HKDevice()
    }

    getPlug() {
        // 适配器逻辑
        return adapterHK(this.plug.getPlug())
    }
}

const target = new Target()
target.getPlug()



/** 实际应用 */
// 1. 两个模块：筛选器、表哥，需要做一个联动。但是筛选器数据不能直接传入表格，需要做数据结构处理转换
// =>  两个模块之间独立，需要做数据转换  => 适配器模式


