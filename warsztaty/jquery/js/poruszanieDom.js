$(document).ready(function() {
//    $('.container').find('a').css('color', 'green');
    $('.container').find('a').each(function(index, element) {
        console.log(index + ' ' + element);
    })
    
})