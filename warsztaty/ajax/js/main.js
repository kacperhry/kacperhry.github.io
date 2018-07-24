//definicja funkcji ajax
function ajax(method, url) {
//    utworzenie obiektu XMLHttpsRequest
    let httpReq = new XMLHttpRequest();
    
    httpReq.open(method, url);
//    otwieranie polaczenia z serwerem
//    httpReq.open(method, url);
//    jesli status polaczenia zostal zmieniony -> httpReq.readyState
//    0:polaczenie nie nawiaane
//    1:polaczenie nawiazzane,
//    2:zadanie odebrane,
//    3:przetwarzanie,
//    4: dane zwrocone i gotowe do uzycia    
    httpReq.onreadystatechange = function () {
        if(httpReq.readyState == 4) {
//            sprawdzam stats polaczenia
            if(httpReq.status == 200) {
//                pojemnik na zwrocone dane
                let returnData = httpReq.responseText;
                
//                definiujemy metode obrabiajaca dane
                httpReq.onsuccess(returnData);
                
//                zerujemy polaczenie z serwerem
                httpReq = null;
            }
        }
    }
//    definicja onsuccess na obiecie httpReq
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
        console.log(jsonObj.userId s) ;
    }
    
    httpReq.send();
}     

    

//wywolanie funkcji
ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl')




















