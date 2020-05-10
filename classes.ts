class Home {
    _roomNumber: number;
    _windowNumber: number;
    _floor: number;
    
    constructor(roomNumber: number, windowNumber: number, floor: number) {
        this._roomNumber = roomNumber;
        this._windowNumber = windowNumber;
        this._floor = floor;
    }
    
    readProperties() {
        console.log("Room Number: " + this._roomNumber + "\nWindow Number: " + this._windowNumber + "\nFloor: " + this._floor);
    }
}

let home = new Home(3, 4, 3);
home.readProperties();
console.log(home._floor);