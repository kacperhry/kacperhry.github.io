//deklaracja funkcji
//function wypiszDoKonsoli() {
    'use strict';
//    console.log('123');
//}

//wypiszDoKonsoli();
 

//wyrazenie funkcyjne
const wypiszDoKonsoli = function() {
    console.log('123')
}

wypiszDoKonsoli();

//funkcje parametrowe
function dodawanie(parametr1, parametr2) {
    
//    zwracanie wartosci - return, pozwala na wyorzystanie wartosci w pozniejszym miejscu w skrypcie
    return parametr1 + parametr2;
}

//jezeli chcemy zobaczyc wartosc zwrocona, to albo cala funkcje opinamy w console.log(), albo console.log() umieszczamy zaraz przed return we wnetrzu funkcji
console.log(dodawanie(1, 2));

//funkcje strzalkowe
const dodawanie2 = (parametr1, parametr2) => {
    console.log(parametr1 + parametr2);
    return parametr1 + parametr2;
}

console.log(dodawanie2(1, 4));