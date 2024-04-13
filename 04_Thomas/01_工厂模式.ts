class PrimaryButton {
    public type = 'primary'
    public text = 'primary button'

    onClick() {
        console.log(this.text + ' clicked!')
    }
}

class SecondaryButton {
    public type = 'secondary'
    public text = 'secondary button'

    onClick() {
        console.log(this.text + ' clicked!')
    }
}

function buttonFactory(type: 'primary' | 'secondary') {
    switch(type) {
        case 'primary':
            return new PrimaryButton()
        case 'secondary':
            return new SecondaryButton()
        default:
            return new Error(`unknow button type ${type}`)
    }
}

const btn = buttonFactory('primary') as PrimaryButton | SecondaryButton
console.log('btn', btn)
btn.onClick()