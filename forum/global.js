let rwAdBanner = 'https://i.servimg.com/u/f39/15/70/85/29/top_ba10.jpg';

let rwMobileVar;
// mobile layout
function mobileView() {
  $( document ).ready(function() {
	if(rwMobileVar === 'true') {
          $('body').removeClass('desktop_view');
          $('#desktop_view span').html('Desktop');
	}else{
          $('body').addClass('desktop_view');
          $('#desktop_view span').html('Mobile');
        }
  });
}

function getCache() {
	// store which roster was clicked
	if(!localStorage.getItem('rwMobile')) {
		localStorage.setItem('rwMobile', true);
		rwMobileVar = localStorage.getItem('rwMobile');
	} else {
		rwMobileVar = localStorage.getItem('rwMobile');
	}
	mobileView();
}
getCache();


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

// mobile layout
  if (rwMobileVar === 'true') {
     $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
  }
	$('.mark_read_table td:first-of-type span').after('<br /><span id="desktop_view"><span></span> view</span>');
	mobileView();
  
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

// change second table header row
  $('.topics_list tr').not(':first, :lt(2)').find('th:contains("Topics")').attr('colspan', 1).before('<th></th>');
  $('.topics_list tr').not(':first, :lt(2)').find('th:nth-of-type(4)').html('Views');
  $('.topics_list tr').not(':first, :lt(2)').find('th:nth-of-type(5)').html('Author');
	
// Edit profile page: links & other stuff
  if ( _userdata["user_id"] != 1 ) {
    $('table:not(.forumline) .gen a.mainmenu:contains("Avatar")').closest('.gen').remove();
    $('table:not(.forumline) .gen a.mainmenu:contains("Signature")').closest('.gen').remove();
    let informationPage = $('table:not(.forumline) .gen strong:contains("Information")');
    if(informationPage.length === 1){
      $('#register .forumline .thSides:contains("Data export")').closest('tr').next().remove();
      $('#register .forumline .thSides:contains("Data export")').closest('tr').remove();
      $('#register .forumline tr:first-of-type th, #register .forumline tr:last-of-type td.catBottom').attr('colspan',2);
    }
    let preferencesPage = $('table:not(.forumline) .gen strong:contains("Preferences")');
    if(preferencesPage.length === 1){
      $('#register .forumline tr:first-of-type').addClass('keep');
      $('#register .forumline tr:nth-of-type(15)').addClass('keep');
      $('#register .forumline tr:nth-of-type(16)').addClass('keep');
      $('#register .forumline tr:nth-of-type(17)').addClass('keep');
      $('#register .forumline tr:last-of-type').addClass('keep');
      $('#register .forumline tr:not(.keep)').remove();
      $('#register .forumline tr:first-of-type th, #register .forumline tr:last-of-type td.catBottom').attr('colspan',2);
    }
  }
  $('table:not(.forumline) .gen a.mainmenu').show();
    
});

$(document).on('click','#desktop_view',function() {
	if(rwMobileVar === 'true') {
		localStorage.setItem('rwMobile', 'false');
        }else{
		localStorage.setItem('rwMobile', 'true');
        }
	getCache();
});
$(document).on('click','#hamburger i',function() {
  $('#hamburger').toggleClass('active');
  $('#menu').toggle('slide');
});
$(document).on('click','.emojis',function() {
  $('#smileyContainer').toggle();
});
