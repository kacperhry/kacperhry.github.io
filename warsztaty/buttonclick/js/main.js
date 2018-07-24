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
//        console.log(jsonObj.userId s) ;
        let paragraf1 = document.createElement('p');
        let paragraf2 = document.createElement('p');
        let paragraf3 = document.createElement('p');
    
        paragraf1.innerHTML = jsonObj.userId;
        paragraf2.innerHTML = jsonObj.userName;
        paragraf3.innerHTML = jsonObj.userURL;
        
        document.body.appendChild(paragraf1);
        document.body.appendChild(paragraf2);
        document.body.appendChild(paragraf3);
    }
    
    httpReq.send();
}     

    document.getElementById('btn').addEventListener('click', pobierzDane)

//wywolanie funkcji
function pobierzDane() {
ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');
}



//document.getElementById('btn').addEventListener()

















