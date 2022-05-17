$(document).ready(function () {
  
  $('body').addClass('homepage');
  
// who is online
//  $('.forumline a.cattitle:contains("Who is online")').closest('table').addClass('whosonline');
  $('.whosonline').insertAfter('#content-container table.three-col');
  $('.whosonline tr:nth-of-type(6) td:last-of-type a:first-of-type').before('<span id="show_online">Show List</span><span id="hide_online">Hide List</span> <br />');
  
// what is this for? 
  $('#board_nav').hide();
  
// main board class name
  $('.three-col .forumline').addClass('mainsection');
  $('.three-col td:nth-of-type(2)').not('.three-col td td').wrapInner('<div id="center_column"></div>');
  
// Mark all forums read
/*
  $('table a.gensmall:contains("Today\'s active topics")').closest('table').addClass('mark_read_table');
  $('table a.gensmall:contains("View unanswered posts")').closest('table').addClass('unanswered_table');
*/

});

$(document).on('click','#show_online',function() {
  $('.whosonline tr:last-of-type td:last-of-type a').show();
  $('#hide_online').show();
  $(this).hide();
});
$(document).on('click','#hide_online',function() {
  $('.whosonline tr:last-of-type td:last-of-type a').hide();
  $('#show_online').show();
  $(this).hide();
});

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
