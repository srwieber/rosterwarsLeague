$(document).ready(function () {
  
// who is online
  $('.forumline a.cattitle:contains("Who is online")').closest('table').addClass('whosonline');
  $('.whosonline').insertAfter('#content-container table.three-col');
  
// slider columns
  $('#left, #right').show();
  $('#board_nav').hide();
  
// main board class name
  $('.three-col .forumline').addClass('mainsection');
  
// Mark all forums read
  $('table a.gensmall:contains("Today\'s active topics")').closest('table').addClass('mark_read_table');
  
  $('table a.gensmall:contains("View unanswered posts")').closest('table').addClass('unanswered_table');
  
});
