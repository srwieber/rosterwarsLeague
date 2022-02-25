$( document ).ready(function() {

  $('footer').insertAfter('main');
  /*
  let rwAdBanner = 'https://i.servimg.com/u/f39/15/70/85/29/top_ba10.jpg';
  
  const myTimeout = setTimeout(topad, 10);
  let adloop = 0;
  function topad() {
    $('.forumline tr:first-of-type td:first-of-type table div div').has('iframe').closest('div').wrap('<span class="topad"></span>');
    $('.topad').closest('td div').prepend('<center><img width="770" height="90" src="' + rwAdBanner + '" /></center>');
    $('.topad').closest('.forumline').addClass('topadtable');
    adloop++;
    topadlength = $('.topad').length;
    if (adloop < 3 && topadlength < 1) {setTimeout(topad, 1000);}
  }
*/
// MFL league info. not in use. 
  var league_id = '38933';
  var year = 2021;
  var baseURLDynamic = 'https://www65.myfantasyleague.com';

// memberlist
  $('.forumline').find('th:contains(Website)').closest('table').addClass('memberlist');
  $('.memberlist').find('th:nth-of-type(4), td:nth-of-type(4), th:nth-of-type(8), td:nth-of-type(8), th:nth-of-type(9), td:nth-of-type(9)').remove();

// remove jump to
  $('.gensmall:contains("Jump to:")').remove();

  // This is the current user id for the forum
  //  console.log(_userdata["user_id"]);  
  if ( _userdata["user_id"] == 1 ) {
//    $('#page-footer').appendTo('footer');
//    $('#page-footer').show();
  }

});

/*
function globalMouseUp() {
      $
}
  
$(document).on('wheel', function(event){
  if(event.originalEvent.deltaY !== 0){
    if(event.originalEvent.deltaY < 0){
      globalMouseUp();
    }else{
      globalMouseDown();
    }
  }
});
$(document).on('keydown', function(e){
    // get keycode of current keypress event
    var code = (e.keyCode || e.which);

    if(code == 38) {
      globalMouseUp();
    }
    if(code == 40) {
      globalMouseDown();
    }
});
*/
