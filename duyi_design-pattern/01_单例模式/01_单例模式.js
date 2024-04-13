// 写法一

// function Person(name) {
//     console.log('this', this)
//     if (typeof Person.instance === 'object') {
//         return Person.instance
//     }
//     this.name = name
//     Person.instance = this
// }

// const a = new Person()
// const b = new Person()

// // 如何才能成立
// console.log(a === b)



// 写法二
// function Person(name) {
//     console.log('this', this)
//     const instance = this

//     this.name = name
//     Person = function() {
//         return instance
//     }
// }

// const a = new Person()
// console.log('a', a)

// Person.prototype.lastname = 'lsdkfslk'

// const b = new Person()

// const c = new Person()

// console.log('a.lastname', a.lastname)
// console.log('b.lastname', b.lastname)



// 使用闭包
const Person3 = (function() {
    let instance;
    return function(name) {
        console.log('this', this)

        if (typeof instance === 'object') {
            return instance
        }
        instance = this
        this.name = name
    }
})()

const p1 = new Person3()
const p2 = new Person3()
Person3.prototype.lastname = 'song'

console.log(p1.lastname, p2.lastname)