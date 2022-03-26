// class dog {
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new dog(40, 1.5, "violet");
// const bobik = new dog(3, 30, "yellow")
//
// console.log(rex);
// console.log(bobik);
//

//1: Абстрактный класс

// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//
//     voice(){
//         console.log(this.voiceText)
//     }
// }
//
// class Dog extends Animal{
//     constructor(type, gender, color, voiceText, name, purproseText) {
//         super(type, gender, color, voiceText);
//         this.name = name;
//         this.purproseText = purproseText;
//
//     }
//
//     purprose(){
//         console.log(`Dog: ${this.name}\nPurprose: ${this.purproseText}`)
//     }
// }
//
// const rex = new Dog(
//     "хищник",
//     "male",
//     "pink",
//     "gaf gaf",
//     "Tuzik",
//     'security'
// )
//
// rex.purprose()
//
// console.log(rex)
//
// const bublik = new Dog(
//     "domestic",
//     'female',
//     'red',
//     'tyaf tyaf!',
//     'bublik',
//     'Face control'
// )
// bublik.purprose();

class House {
    constructor(roof, rooms, walls, window, floor, color, adress) {
        this.roof = roof
        this.rooms = rooms
        this.walls = walls
        this.window = window
        this.floor = floor
        this.color = color
        this.adress = adress
    }

}

class home extends House{
    constructor(roof, rooms, walls, window, floor, color, adress) {
        super(roof, rooms, walls, window, floor, color, adress);
    }
}

const myHome = new home(
    "pitched",
    "5",
    "brick",
    "6,7",
    "warm",
    'white',
    "Baytik"
)
console.log(myHome)