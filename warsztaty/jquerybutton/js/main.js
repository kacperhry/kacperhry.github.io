$(document).ready(function() {
    $('#btn').click(function() {
        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data) 
        {
            var paragraf1 = $('<p>');
            var paragraf2 = $('<p>');
            var paragraf3 = $('<p>');
            
            paragraf1.text(data.userId);
            paragraf2.text(data.userName);
            paragraf3.text(data.userURL);
            
            $('body').append(paragraf1);
            $('body').append(paragraf2);
            $('body').append(paragraf3);
        })
    })
})



























