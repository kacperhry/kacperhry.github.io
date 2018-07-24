$(document).ready(function () {

    //    var tekst = ($('.container p').text());

    //    wyciaga text we wszystkich trafieniach selektora
    //    console.log($('.container p').text());

    //      ustawia tekst  we wszystkich trafieniach selektora
    //    $('.container p').text('lorem ipsum');

    //    wyciaga html tylko z pierwszego trfienia w selektor
    //    console.log($('.container p').html());

    //    ustawia html we wszystkich trafieniach selektora
    $('.container p').html('<span> zmieniono metoda .html() </span>');

    $('#dodaj').append('<p> dodanie tresci metoda append()</p>');
    $('#dodaj').prepend('<p> dodanie tresci metoda prepend()</p>');
    $('#dodaj').before('<p> dodanie tresci metoda before()</p>');
    $('#dodaj').after('<p> dodanie tresci metoda after()</p>');
    
//    empty() - usuwa wnetrze selektora
    $('#dodaj').empty()
    
//    remove() - usuwa caly selektr wraz z zawartoscia
    $('#dodaj').remove();
    
    console.log($('.container p').css('color'))
    
    $('.container p').css({
        fontSize: '20px',
        color: 'red'
        })
//    val bez parametrow przyjmuje wartosc tylko pierwszego trafienia selektora
    console.log($('form input').val());
    
//    val() z argumentami stawia wartosc wszystkim trafieniom selektora
    $('form input').val('lorem');
    
    $('.container p').addClass('paragraf paragraf1 paragraf2');
    $('.container p').removeClass('paragraf')
})
























