if (!window.myPlugins) {
    window.plugins = {}
}

myPlugins.single = function singleCreate(func) {
    let instance;

    return function() {
        if (!instance) {
            instance = func.apply(this, arguments)
        }

        return instance
    }
}