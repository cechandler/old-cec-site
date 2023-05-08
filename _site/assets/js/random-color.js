// $(function() {
//
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//
//     $(".colorblock").css({
//
//         backgroundColor: '#' + randomColor
//
//     });
//
//     $("#colorcode").text("#" + randomColor);
//
// });

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

$(function() {
    $(".colorblock").each(function() {
        $(this).css("background-color", get_random_color());
    });
});

// $(function() {
//     $(".container").each(function() {
//         $(this).css("border-top: 0.65rem solid", get_random_color());
//     });
// });
