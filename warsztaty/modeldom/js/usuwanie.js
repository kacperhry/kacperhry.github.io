document.getElementById('parFirst').removeChild(document.getElementById('parSecond'))

document.getElementsByClassName('link')[2].removeAttribute('class');


let classAtr = document.querySelectorAll('.link')[2].getAttributeNode('class');
document.querySelectorAll('.link')[2].removeAttributeNode(classAtr);





