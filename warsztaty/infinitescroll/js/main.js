function ajax(method, url) {
    let httpReq = new XMLHttpRequest();   
    httpReq.open(method, url);
    httpReq.onreadystatechange = function () {
        if(httpReq.readyState == 4) {
            if(httpReq.status == 200) {
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);
        
    jsonObj.forEach(function(element, index) {
        let paragraf1 = document.createElement('p');
        let paragraf2 = document.createElement('p');
        let paragraf3 = document.createElement('p');
        
        paragraf1.innerHTML = element.id;
        paragraf2.innerHTML = element.name;
        paragraf3.innerHTML = element.website;
        
        document.body.appendChild(paragraf1);
        document.body.appendChild(paragraf2);
        document.body.appendChild(paragraf3);
    });
    
//        paragraf1.innerHTML = jsonObj.id;
//        paragraf2.innerHTML = jsonObj.userName;
//        paragraf3.innerHTML = jsonObj.userURL;
        

    }  
    httpReq.send();
}     

//ajax('GET', 'https://jsonplaceholder.typicode.com/users');



//zmienne: 
//1.wysokosc okna(window)
//2.wysokosc dokumentu (document.documentElement)
//3. odleglosc przeskrolowanych pikseli
//
//logika:
//1. obsluga zdarzzenia scroll
//2 .jezeli wysokosc okna + odleglosc === wysokosc dokumntu {
//    zawolaj funkcje ajax(;)
//}

//funkcja ajax():
//1. pobierz liste uzytkownikow.
//2.petla,zeby przejsc po uzytkownikach
//3. wyciagamy pola z kazdego uzytkownika
//4. tworzymy nowe elementy - przypisujemu im wartosci spod kluczy
//5. doklejamy elementy do strony
window.addEventListener('scroll', function() {
    let scrolled = parseInt(window.pageYOffset.toFixed(0));
//    console.log(scrolled);
    let windowHeight = window.innerHeight;
//    console.log(windowHeight);
    let documentHeight = document.documentElement.offsetHeight;
//    console.log(documentHeight);
    
    if(windowHeight + scrolled === documentHeight - 1) {
        ajax('GET', 'https://jsonplaceholder.typicode.com/users');
//        console.log('123');
    }
})














