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