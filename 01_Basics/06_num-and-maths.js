const score = 12

console.log(score)
console.log(typeof score)

const balance = new Number(score)

console.log(balance.toString().length)


const vpPoints = new Number(1600)

console.log(vpPoints.toFixed(2))

const battelPassDiscount = new Number(652)

console.log(battelPassDiscount.toFixed(2) - vpPoints)

const newTotal = vpPoints - battelPassDiscount

console.log([vpPoints, battelPassDiscount, newTotal])

const hundreads  = 7000000

console.log(hundreads.toLocaleString('en-IN'));

var nextSteap = "---------------Maths -------------------"

console.log(nextSteap)

console.log(Math.round(4.6))
console.log(Math.round(4.4))
console.log(Math.round(4.5))

console.log(Math.random()*10)

const randomNumber = (Math.random()*10) + 1

console.log(randomNumber.toFixed(0))


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
