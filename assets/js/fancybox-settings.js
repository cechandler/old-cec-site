$(".fancybox").fancybox({
    nextEffect  : 'fade',
    prevEffect  : 'fade',
    padding     : 0,
    margin      : [15, 15, 40, 15],
    afterLoad   : addLinks,
    beforeClose : removeLinks,
    beforeShow  : disableClick
});

function addLinks() {
    var list = $("#links");

    if (!list.length) {
        list = $('<ul id="links">');

        for (var i = 0; i < this.group.length; i++) {
            $('<li data-index="' + i + '"><label></label></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
        }

        list.appendTo( 'body' );
    }

    list.find('li').removeClass('active').eq( this.index ).addClass('active');
};

function removeLinks() {
    $("#links").remove();
};

/* Disable right click */
function disableClick() {
  $.fancybox.wrap.bind("contextmenu", function (e) {
    return false;
  });
};
