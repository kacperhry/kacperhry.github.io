//definicja obiektu
let person = {
    name: "Marcin",
    height: 170,
    print() {
        console.log(this.name + " " + this.height);
    }
}

//odwolac sie do wartosci ktora przetrzymujemy pod kluczem mozemy poprzez uzycie .klucz lub ["klucz"]
//console.log(person.name);
person.print()

//klasy
class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    printInfo() {
        console.log(this.name + ' ' + this.height)
    }
}
let marcin = new Person('Marcin', 170);

//console.log(marcin.name);
marcin.printInfo();


//napisz funkcje, ktora jako parametr przyjmuje promien kola i zwraca na jego podstawie pole kola

function poleKola(r) {
    return Math.PI * Math.pow(r,2);
}

console.log(poleKola(4));



































