$(document).ready(function() {
//   $('.container a').click(function(e) {
//       e.preventDefault();
//       $(this).css('color', 'red');
//   }) 
    $('.container a').on({
        "click": function(e) {
            e.preventDefault();
            $(this).css('color', 'red')
        },
        "mouseover": function() {
            $(this).css('color', 'green')
        },
        "mouseout": function() {
            $(this).css('color', 'blue')
        }
    })
});

$(window).scroll(function() {
    var scrolled = $(this).scrollTop();
    var result = -(scrolled / 2);
    $('#background').css('background-position', result + 'px 0px');
})

















