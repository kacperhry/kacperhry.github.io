//document.addEventListener('DOMContentLoaded', function() {
//    document.getElementById('button').addEventListener('click', function(e) {
//        e.stopPropagation();
//        document.getElementById('main-nav').style.left = '0px';
//    });
//    
//    document.body.addEventListener('click', function() {
//        document.getElementById('main-nav').style.left = '-300px';
//    });
//    
//    document.getElementById('main-nav').addEventListener('click', function(d) {
//        d.stopPropagation();
//    })
//})
document.getElementById('btn').addEventListener('click', ustawTlo);
function ustawTlo() {
    let paragrafy = document.getElementsByTagName('p');
    paragrafy[0].style.backgroundColor = 'red';
    paragrafy[1].style.backgroundColor = 'yellow';
}