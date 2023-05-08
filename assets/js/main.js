// MUSIC MIXITUP
$(function(){
  $('.mixitup-music').mixItUp({
  animation: {
    effects: 'fade scale',
  },
  layout: {
    display: 'block',
  },
  selectors: {
    target: '.work',
    filter: '.filter-work',
  }
  });
});

// PERFORMANCES MIXITUP
$(function(){
  $('.mixitup-event').mixItUp({
  animation: {
  	effects: 'fade scale',
  },
  layout: {
  	display: 'block',
  },
  load: {
  	filter: '.recent',
  },
  selectors: {
  	target: '.performance',
  	filter: '.filter-event',
  }
  });
});

// RANDOM BACKGROUND COLOR CHOOSER
// $(document).ready(function(){
//   var colors = ['#e67e22', '#3498db', '#9b59b6', '#e74c3c', '#2c3e50'];
//   $('body').css({'background': '' + colors[Math.floor(Math.random() * colors.length)]});
// });
