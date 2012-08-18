$(document).ready(function(){
  $('.about').click(function(){
    $('#about').slideToggle('100','linear');
    $('.about').toggleClass('red');
  });
});