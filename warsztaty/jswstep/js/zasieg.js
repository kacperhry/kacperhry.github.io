//zmienna globalna dostepn jes z kazego miejsca w skrpcie, definiowana poza jakimkolwiek blokiem kodu
let zmiennaGlobalna = 10;

//zmienna lokalna zdefiniowana jest w bloku kodu (petla, instrukcja warunkowa etc.) i dostepna jest tylko w bloku
function zalogujDoKonsoli() {
    let zmiennaLokalna = 5;
    console.log(zmiennaLokalna);
    if (1 > 0) {
        zmiennaLokalna = 10;
    }
    console.log(zmiennaLokalna)
}

zalogujDoKonsoli();
