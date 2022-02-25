$(document).ready(function () {
  
  //ads
  $('#center_column .forumline:first-of-type').addClass('adtable');
// add more posts notification at the bottom of the page 
/*
  let thispagenum = $('.topic_pagination tr:first-of-type td:first-of-type strong:first-of-type').text();
  let lastpagenum = $('.topic_pagination tr:first-of-type td:first-of-type strong:last-of-type').text();
  let nextpagelink = $('.topic_pagination tr:first-of-type td:last-of-type').html();
  let morepages = '<tr class="postcontainer"><td colspan="2"><table width="100%"><tr><td style="padding:5px;text-align:center;font-size:150%;color:#a00;">But Wait... There\'s More! ' + nextpagelink + '</td></tr></table></td></tr>';
  if (thispagenum < lastpagenum) {$('.topic_table').append(morepages);}  
*/
  let thispagenum = $('.topic_pagination tr:first-of-type td:first-of-type strong:first-of-type').text();
  let lastpagenum = $('.topic_pagination tr:first-of-type td:first-of-type strong:last-of-type').text();
  let morepages = '<div style="padding:5px;float:right;font-size:150%;color:#a00;">Don\'t leave. There are more posts</div>';
  if (thispagenum < lastpagenum) {$('.topic_pagination tr:first-of-type .row2').append(morepages);}  
});
