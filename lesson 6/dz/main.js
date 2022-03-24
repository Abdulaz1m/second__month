let mass1 = [1]
let mass2 = [2]
let mass3 = [3]
let mass4 = [4]
let mass5 = [5]
let mass = [...mass1, ...mass2, ...mass3, ...mass4, ...mass5]
console.log(mass)

let obj = {
    key1: 1,
    key2: 2,
    key3: 3,
    key4: 4,
    key5: 5
}
let obj_inner = {
    ...obj,
    key6: 6,
    key7: 7,
    key8: 8
}
console.log(obj_inner)

function setName() {
    document.getElementById("name").innerHTML = document.getElementById("input").value+"!"
}