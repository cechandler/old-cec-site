$( document ).ready(function() {

    $('.cropped-images img').each(function() {
      if ($(this).width() > $(this).height()) {
        $(this).addClass('landscape');
      }
    });

});
