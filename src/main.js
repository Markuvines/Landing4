import $ from 'jquery'
$(document).ready(function() {
  if ($(window).width() <= 564) {
    console.log('fgdfgdfgdfg');
    $('.blockHeader--left').removeClass('blockHeader--left')
  }
  $(window).resize(function() {
    if ($(window).width() <= 564) {
      console.log('fgdfgdfgdfg');
      $('.blockHeader--left').removeClass('blockHeader--left')
    } else {
      $('.services__blockHeader').addClass('blockHeader--left')
    }
  })
 
})