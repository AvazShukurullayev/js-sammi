"use strict"
// Todo: Old version
// const car = {
//     color: "grey",
//     motor: 1.6,
//     isAirbag: true,
//     maxSpeed: function () {
//         return 220
//     }
// }
//
// const gm = {
//     isAirbag: false
// }
//
// gm.__proto__ = car
//
// console.log("car => ", car)
// console.log("gm => ", gm)
// console.log(gm.motor)
// console.log(gm.maxSpeed())

// Todo: New version
const car = {
    color: "grey",
    motor: 1.6,
    isAirbag: true,
    maxSpeed: function () {
        return 220
    }
}

const gm = {
    isAirbag: false
}

Object.setPrototypeOf(gm, car)

console.log(gm)

const bmw = Object.create(car)
console.log(bmw)