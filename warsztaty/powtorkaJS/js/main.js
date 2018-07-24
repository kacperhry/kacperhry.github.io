let innerLinki = document.getElementsByClassName('inner-link');

for(let i=0; i < innerLinki.length; i++) {
    innerLinki[i].addEventListener('click', function(e) {
        e.preventDefault();
        console.log(e.type)
    })
}