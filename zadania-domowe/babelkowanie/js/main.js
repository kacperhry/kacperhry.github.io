function bubbleSort(parametr) {
    for(let i=1; i<parametr.length; i++){
        for(let j=0; j<parametr.length - 1; j++) {
            if(parametr[j] > parametr[j+1]) {
                let zmienna = parametr[j+1];
                parametr[j+1] = parametr[j];
                parametr[j] = zmienna;
            }
        }
    }
    return parametr;
}
    console.log(bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));