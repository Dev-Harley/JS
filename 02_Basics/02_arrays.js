const Valo_agents = ["Phoenix", "Raze", "Reyna", "Brim" , "Deadlock", "Fade"]

const FF_Char = ["Kelly", "Sonia", "Dimitri", "Misha", "Chrono", "Alok"]

// Valo_agents.push(FF_Char)

// console.log(Valo_agents[3])

// const collab = Valo_agents.concat(FF_Char)
// console.log(collab)

// const collab = [...Valo_agents, ...FF_Char]
// console.log(collab)

const collabList = [1,2,3,4,5,6, [7,8,9,], 10,11,[12,13,14,15],16,17,18,[19,20]]

console.log("A", collabList)
const useSortedList = collabList.flat(Infinity)

console.log("B" ,useSortedList)

// Array.isArray("RioHarley")
console.log(Array.isArray("RioHarley"))
console.log(Array.from("RioHarley"))
console.log(Array.from({
    name:'RioHarley'
}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))