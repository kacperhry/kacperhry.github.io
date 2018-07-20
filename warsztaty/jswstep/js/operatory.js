//operatory inkrementacji i dekrementacji
let zmienna = 10;

console.log(zmienna);
console.log(++zmienna);
console.log(zmienna++);
console.log(zmienna);

//operatory przypisania
zmienna += 10;
//zmienna = zmienna + 10
console.log(zmienna);

//operatory porownania
if(2 == '2') {
    console.log("2 == '2'");
}

//operatory logiczne
//&& - iloczyn logiczny(i)
//|| suma logiczna (lub)
//! - negacja (zmiana wartosci true => flase, false => true)
if(2 == '2' && 3 == '3') {
    console.log('iloczyn logiczny');
}

let number = 100 ;
let wynik = (number < 0) ? -1 : 1;
console.log(wynik)


if(1 > 10) {
    console.log('1 > 10');
} else if (1 == 10) {
    console.log('1 == 10');
} else {
    console.log('1 < 10')
}


//switch()

let kolor = 'czerwony'

switch(kolor) {
    case 'zielony':
        console.log('podales kolor zielony');
        break;
        
    case 'niebieski':
        console.log('podales kolor niebieski');
        break;
        
    case 'zolty':
        console.log('podales kolor zolty');
        break;
        
    default:
        console.log('nie podales koloru z listy');
}


let tablica = [10, 100, 35, 94, 105];
//
//for(let i = 0; i < tablica.length; i++) {
//    console.log(tablica[i]);
//}
//
//for(let i = tablica.length - 1; i >= 0 ; i--) {
//    console.log(tablica[i]);
//}

tablica.forEach(function(element, index){
    console.log('Index tablicy: ' + index + '; element tablicy:' + element);
})

//petla for in - na obiektach, podajemy key w obiekcie
let samochod = {
    marka: 'audi',
    kolor: 'bialy',
    pojemnosc: 5.2
}

for(let key in samochod) {
    console.log(samochod[key])
}

//let liczba = 1;
//while(true) {
//    console.log(liczba++)
//}


//while(liczba < 10) {
//    console.log(liczba++);
//}

//do while rozni sie od petli while tym, ze wykona sie zawsze chociaz raz
//let number = 0;
//do {
//    console.log(number=++)
//} while(number > 2) 


let numbers  = 0;
while(true) {
    console.log(numbers++)
    if(numbers == 10) {
        break;
    }
}

for(let i=1; i<=20; i++) {
    if( i % 2 != 0) {
        continue;
    }
    console.log(i + '');
}






























