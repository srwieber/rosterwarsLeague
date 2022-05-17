let rwAdBanner = 'https://i.servimg.com/u/f39/15/70/85/29/top_ba10.jpg';

$( document ).ready(function() {

// ad banner
  const myTimeout = setTimeout(topad, 10);
  let adloop = 0;
  function topad() {
    $('.forumline tr:first-of-type td:first-of-type table div div').has('iframe').closest('div').wrap('<span class="topad"></span>');
    $('.topad').closest('td div').prepend('<div><img class="responsive" src="' + rwAdBanner + '" /></div>');
    $('.topad').closest('.forumline').addClass('topadtable');
    adloop++;
    topadlength = $('.topadtable').length;
    if (adloop < 3 && topadlength < 1) {setTimeout(topad, 1000);}
  }
  
// for smoother loading
  $('.mainlist, .topics_list').show();

// MFL league info. not in use. 
  var league_id = '38933';
  var year = 2022;
  var baseURLDynamic = 'https://www65.myfantasyleague.com';

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

  // emoticon icon on text editor 
  setTimeout(function() { 
    $('#parent_editor_simple .sceditor-group:first-of-type').before('<div class="sceditor-group"><a class="sceditor-button emojis" title="Emoticons"><img src="https://2img.net/i/fa/i/smiles/icon_biggrin.png"></a></div>');
  }, 20);

});

$(document).on('click','#hamburger i',function() {
  $('#hamburger').toggleClass('active');
  $('#menu').toggle('slide');
});
$(document).on('click','.emojis',function() {
  $('#smileyContainer').toggle();
});
