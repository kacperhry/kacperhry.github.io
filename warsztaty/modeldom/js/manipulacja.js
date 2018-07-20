let parFirst = document.getElementById('parFirst');

//get
console.log(parFirst.innerHTML);

//set
parFirst.innerHTML += '<p> Lorem Ipsum </p>'

let parSecond = document.getElementById('parSecond')
console.log(parSecond.innerText);

//parSecond.innerText += '<p> To jest nowy tekst w tym akapicie</p>'
parSecond.innerHTML += '<p> To jest nowy tekst w tym akapicie</p>'


let nav = document.getElementById('main-nav');

nav.outerHTML += '<nav id="new-nav"><ul><li><a href="#">new link</a></li></ul></nav>';


document.getElementById('link').href = "http://google.com"



//document.getElementById('link').className = "nowa_klasa";
document.getElementById('link').classList.add("nowa_klasa");
document.getElementById('link').classList.remove("google");






























