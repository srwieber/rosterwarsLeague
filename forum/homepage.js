let onlineCacheVar;
function onlineCache() {
	// store which roster was clicked
	if(!localStorage.getItem('onlineCache')) {
		localStorage.setItem('onlineCache', false);
		onlineCacheVar = localStorage.getItem('onlineCache');
		$('#show_online').hide();
	} else {
		onlineCacheVar = localStorage.getItem('onlineCache');
	}
//	mobileView();
}
onlineCache();


$(document).ready(function () {
  
  $('body').addClass('homepage');
  
// who is online

  $('.whosonline').insertAfter('#content-container table.three-col');
  
  $('.whosonline tr:nth-of-type(6) td:last-of-type .gensmall').addClass('members24');
  $('.whosonline tr:nth-of-type(6) td:last-of-type span.gensmall').html(function (i, html) {
    return html.replace(/(.*?:)/, '<span class="gensmall">$1</span>')
  });
  let onlineCount = $('.whosonline tr:nth-of-type(6) td:last-of-type .gensmall a').length;
  let members24 = $('.whosonline tr:nth-of-type(6) td:last-of-type .gensmall .gensmall').html();
  members24 = '<span>' + onlineCount + '</span> <span class="gensmall">' + members24 + '</span> <span id="show_online">Show List</span><span id="hide_online">Hide List</span> <br />';
  $('.whosonline tr:nth-of-type(6) td:last-of-type').prepend(members24);
  $('.whosonline tr:nth-of-type(6) td:last-of-type .gensmall .gensmall').remove();
  if (onlineCacheVar === 'true'){
    $('#hide_online, .members24').hide();
  }else{
    $('#show_online').hide();
  }
  
//  $('.whosonline tr:nth-of-type(6) td:last-of-type a:first-of-type').before('<span id="show_online">Show List</span><span id="hide_online">Hide List</span> <br />');
  
// what is this for? 
  $('#board_nav').hide();
  
// main board class name
  $('.three-col .forumline').addClass('mainsection');
  $('.three-col td:nth-of-type(2)').not('.three-col td td').wrapInner('<div id="center_column"></div>');
  
});

$(document).on('click','#show_online, #hide_online',function() {
  $('.whosonline tr:nth-of-type(6) td:last-of-type .members24').toggle();
  $('#show_online, #hide_online').toggle();
  if (onlineCacheVar === 'true') {
    localStorage.setItem('onlineCache', false);
//    onlineCacheVar = localStorage.getItem('onlineCache');
  }else{
    localStorage.setItem('onlineCache', true);
//    onlineCacheVar = localStorage.getItem('onlineCache');
  }
});
//$(document).on('click','#show_online',function() {
//  $('.whosonline tr:nth-of-type(6) td:last-of-type a').show();
//  $('#hide_online').show();
//  $(this).hide();
//});
//$(document).on('click','#hide_online',function() {
//  $('.whosonline tr:nth-of-type(6) td:last-of-type a').hide();
//  $('#show_online').show();
//  $(this).hide();
//});

// toggle columns
$(document).on('click','#column_toggle i:nth-of-type(1)',function() {
  $('#column_toggle i').removeClass('active');
  $(this).addClass('active');
  $('#left').show();
  $('#left').closest('td').show();
  $('#center_column').closest('td').hide();
  $('#center_column').hide();
  $('#right').hide();
  $('#right').closest('td').hide();
});
$(document).on('click','#column_toggle i:nth-of-type(2)',function() {
  $('#column_toggle i').removeClass('active');
  $(this).addClass('active');
  $('#left').hide();
  $('#left').closest('td').hide();
  $('#center_column').closest('td').show();
  $('#center_column').show();
  $('#right').hide();
  $('#right').closest('td').hide();
});
$(document).on('click','#column_toggle i:nth-of-type(3)',function() {
  $('#column_toggle i').removeClass('active');
  $(this).addClass('active');
  $('#left').hide();
  $('#left').closest('td').hide();
  $('#center_column').closest('td').hide();
  $('#center_column').hide();
  $('#right').show();
  $('#right').closest('td').show();
});
// toggle wide columns
$(document).on('click','#wide_column_toggle i:nth-of-type(1)',function() {
  $('#wide_column_toggle i').removeClass('active');
  $(this).addClass('active');
  $('#left').show();
  $('#center_column').show();
  $('#right').hide();
});
$(document).on('click','#wide_column_toggle i:nth-of-type(2)',function() {
  $('#wide_column_toggle i').removeClass('active');
  $(this).addClass('active');
  $('#left').hide();
  $('#center_column').show();
  $('#right').show();
});
