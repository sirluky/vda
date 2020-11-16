class garage {

    constructor(name) {
        this.name = name;
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car)
    }

    dumpCars() {
        console.log("Nazev: " + this.name);
        console.log(this.cars.length);
        for (let i = 0; i < this.cars.length; i++) {
            console.log(i);
            console.log("-------");
            console.log("Znacka: " + this.cars[i].znacka);
            console.log("Obsah: " + this.cars[i].obsah);
        }
    }

}

class auto {
    constructor(znacka) {
        this.znacka = znacka;
    }

}


let a = new garage("Moje garaz");
a.addCar(new auto("skoda"))
a.addCar({ znacka: "bmv", obsah: 2000 })
a.addCar({ znacka: "bmv", obsah: 2000 })
a.dumpCars()