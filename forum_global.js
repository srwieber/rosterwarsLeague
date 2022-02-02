$( document ).ready(function() {

// ads
  $('.forumline tr:first-of-type td:first-of-type table div div').has('iframe').closest('.forumline').addClass('topad');
  const myTimeout = setTimeout(topad, 1000);
  function topad() {
    $('.forumline tr:first-of-type td:first-of-type table div div').has('iframe').closest('.forumline').addClass('topad');
  }

// MFL league info. not in use. 
  var league_id = '38933';
  var year = 2021;
  var baseURLDynamic = 'https://www65.myfantasyleague.com';

// hidden in css for page loading
  $('#content-container').show();
      
// memberlist
  $('.forumline').find('th:contains(Website)').closest('table').addClass('memberlist');
  $('.memberlist').find('th:nth-of-type(4), td:nth-of-type(4), th:nth-of-type(8), td:nth-of-type(8), th:nth-of-type(9), td:nth-of-type(9)').remove();

// remove jump to
  $('.gensmall:contains("Jump to:")').remove();

  // This is the current user id for the forum
  //  console.log(_userdata["user_id"]);  
  if ( _userdata["user_id"] == 1 ) {
    $('#page-footer').show();
  }

});
