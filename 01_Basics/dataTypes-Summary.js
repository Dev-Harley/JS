//# Primitive data types

// 7 Categories : String, Number, Boolean, NULL, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 99.98

const isQualified = true
const weatherTemp = null

let winner;

const id = Symbol("IND")
const state = Symbol("HR")

console.log(id== state)

const bigNumber = 681436185435423453434n

console.log(typeof bigNumber)

//  ---------------------------------

// # Non-Primitive/Reference 
// 3 Types
// Array, Objects, Functions

const games = ["Valo", "Diablo", "PalWprld", "FIFA"];

let details = {
    name: "Rio",

}

console.log(games)

const myfunction = function(){
console.log("Hello Dawg")
}

console.log(typeof myfunction)

