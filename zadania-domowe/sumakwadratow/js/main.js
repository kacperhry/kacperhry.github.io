function sumaKwadrat(parametr) {
//    1.funkcja zwraca z tablicy [0, 1, 2, 3, 4, 5]sume kwadratow;
//    2.0^2 + 1^2 + 2^2 + 3^2 + 4^2 + 5^2;
//    3. trzeba prejsc przez elementy tablcy (for);
//    4. potrzebuje zmienna, ktora bedzie przechowywala dodane kwadraty;
//    5. do zmiennej kazdorazzowo dodaje wynik potegowania kolejnej iteracji
    let result = 0;
    
    for(let i=0; i<parametr.length; i++) {
        result += Math.pow(parametr[i],2);
    }
    return result;
}

console.log(sumaKwadrat([0, 1, 2, 3, 4, 5]));