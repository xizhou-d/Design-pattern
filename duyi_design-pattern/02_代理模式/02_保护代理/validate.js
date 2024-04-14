function Validate() {
    this.cache = []
    // 在每次重新输入的时候重置 warning
    this.msgDom = []
}

Validate.prototype.strategies = {
    isEmpty: function(value, errMsg) {
        if (value === '') {
            return errMsg
        }
        return true
    },
    maxLength: function(value, maxLength, errMsg) {
        if (value !== '' && value.length > maxLength) {
            return errMsg
        }
        return true
    },
    minLength: function(value, minLength, errMsg) {
        if (value !== '' && value.length < minLength) {
            return errMsg
        }
        return true
    } 
}

Validate.prototype.add = function(contentEl, errMsgEl, strategies) {
    const self = this
    this.msgDom.push(errMsgEl)
    strategies.forEach(function(strategyItem, index) {
        self.cache.push(function() {
            const arr = strategyItem.strategy.split(':')
            const strategyName = arr.shift()
            arr.push(strategyItem.errMsg)
            arr.unshift(contentEl.value)

            const msg = self.strategies[strategyName].apply(null, arr)

            if (msg !== true) {
                errMsgEl.innerHTML = msg
            }

            return msg
        })
    })
}

Validate.prototype.start = function() {
    // 每次提交之前就先清空 警告信息
    this.msgDom.forEach((md) => {
        md.innerHTML = ''
    })            
    let flag = true
    this.cache.forEach(function(func, index) {
        if (func() !== true) {
            flag = false
        }
    })

    return flag
}

Validate.prototype.extend = function(config) {
    for (prop in config) {
        Validate.prototype.strategies[prop] = config[prop]
    }
}