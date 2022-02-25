let section = 0;
let boardLength = 0;
let centerImage = [];
/*
let centerImage = ['https://i.ibb.co/6mgCdrp/Sanders-Barry-4.png', 
                   'https://i.ibb.co/ZNGHMk4/darksteal.jpg', 
                   'https://i.ibb.co/FhWr4cM/stadium.jpg',
                   'https://i.ibb.co/KmP6Y2c/Rice-Jerry-5.png', 
                   'https://i.ibb.co/7zthggG/Taylor-Sean.png']; 
let centerImage = ['https://i.ibb.co/FhWr4cM/stadium.jpg', 
                   'https://i.ibb.co/FhWr4cM/stadium.jpg', 
                   'https://i.ibb.co/FhWr4cM/stadium.jpg', 
                   'https://i.ibb.co/FhWr4cM/stadium.jpg', 
                   'https://i.ibb.co/FhWr4cM/stadium.jpg']; 
*/
function mouseDown() {
//    $(this).closest('.mainsection_container').removeClass('bg' + index - 1);
//    $(this).closest('.mainsection_container').addClass('bg' + index);
//    $(this).closest('.mainsection_container').css('backgroundColor', 'mycolor' + index);
  $('.section' + section).animate({top: '-1200px'}, 400, function () { $(this).removeAttr('style'); });
  section++;
  if (section == boardLength) {section = 0;}
  $('.section' + section).css('opacity', '0');
  $('.section' + section).slideDown();
  $('.section' + section).animate({opacity: '1', marginTop: '1200px'},0, function () { $(this).animate({marginTop: '0'}, 200); });
  $('#section_number').html(section + 1);
//    $('.section' + section).closest('.mainsection_bg img').html('<img src="' + centerImage[section] + '">');
    $('.section' + section).closest('.mainsection_container').css('background-image', 'url(' + centerImage[section] + ')');
}
function mouseUp() {
  $('.section' + section).animate({top: '1200px'}, 400, function () { $(this).removeAttr('style'); });
  section--;
  if (section == -1) {section = boardLength - 1;}
  $('.section' + section).css('opacity', '0');
  $('.section' + section).slideDown();
  $('.section' + section).animate({opacity: '1', marginTop: '-1200px'},0, function () { $(this).animate({marginTop: '0'}, 200); });
  $('#section_number').html(section + 1);
//  $('.mainsection').hide();
//  $('.section' + section).show();
//  $('.mainsection').fadeOut();
//  $('.section' + section).fadeIn();
  $('#section_number').html(section + 1);
    $('.section' + section).closest('.mainsection_container').css('background-image', 'url(' + centerImage[section] + ')');
}

$(document).ready(function () {
  
//  ads
  $('#center_column .forumline').not('.maintable').addClass('adtable');
  // who is online
  //$('.forumline a.cattitle:contains("Who is online")').closest('table').addClass('whosonline');
  //$('.whosonline').insertAfter('#content-container table.three-col');
  
// slider columns
  //$('#left, #right').show();
  //$('#board_nav').hide();
  
// main board class name
  //$('.three-col .forumline').addClass('mainsection');
  
// Mark all forums read
  //$('table a.gensmall:contains("Today\'s active topics")').closest('table').addClass('mark_read_table');
  
  //$('table a.gensmall:contains("View unanswered posts")').closest('table').addClass('unanswered_table');
  
//add new post colors
  //$('.mainsection img[src*="https://2img.net/h/www.agent575.com/mbindicatormainnewxmas.png"]').closest('tr').addClass('newpost');
    
	$('#transactions tr').each(function () {
		$(this).find('ul').addClass('fa-ul');
/*
		$(this).find('li:contains(Acquired)').prepend('<i class="fa-li fa fa-plus" aria-hidden="true"></i>');
		$(this).find('li:contains(Dropped)').prepend('<i class="fa-li fa fa-minus" aria-hidden="true"></i>');
		$(this).find('li:contains(Activated)').prepend('<i class="fa-li fa fa-chevron-up" aria-hidden="true"></i>');
		$(this).find('li:contains(Deactivated)').prepend('<i class="fa-li fa fa-chevron-down" aria-hidden="true"></i>');
		$(this).find('li:contains(Promoted)').prepend('<i class="fa-li fa fa-hand-o-up" aria-hidden="true"></i>');
		$(this).find('li:contains(Demoted)').prepend('<i class="fa-li fa fa-hand-o-down" aria-hidden="true"></i>');
*/
	});
	$('#transactions li').each(function(){
		$(this).html( $(this).html().split(";").join("<br />") );
		$(this).html( $(this).html().split("Year ").join("- ") );
		$(this).html( $(this).html().split("Draft ").join("") );
		$(this).html( $(this).html().split(" gave up ").join("<br /><center>Gave Up:</center>") );
/*
		$(this).find('a:first-of-type').before(':<br />');
		$(this).find('a').css('margin-left','10px');
*/
	});
  
//  $('.mark_read_table, .unanswered_table').appendTo('footer');
  $('.unanswered_table td').each(function(){
    $(this).appendTo('footer tr');
  });
  $('.mark_read_table td').each(function(){
    $(this).appendTo('footer tr');
  });
  
  let newPostRow = $(".maintable img[title*='New posts']").closest('tr').clone();
//  let newPostRow = $('.lastpost-avatar').closest('tr').clone();
  $('.mainsection:eq(0) tr').after(newPostRow);
  if ( $('.mainsection:eq(0) tr').length < 2 ) {
    $('.mainsection:eq(0)').remove();
  }
  $('.mainsection:eq(0)').show();
  boardLength = $('.mainsection').length;
  $('#board_nav').append('<div><div class="up"><i class="fa fa-chevron-up" aria-hidden="true"></i></div><div class="down"><i class="fa fa-chevron-down" aria-hidden="true"></i></div><div class="section_number"><span id="section_number">1</span>/<span>' + boardLength + '</span></div></div>');

  $('.mainsection').each(function( index ){
    $(this).addClass('section' + index);
  });

});

jQuery(document).on("click","#board_nav .up",function() {
  mouseUp();
});
jQuery(document).on("click","#board_nav .down",function() {
  mouseDown();
});

$(document).on('wheel', function(event){
  if(event.originalEvent.deltaY !== 0){
    if(event.originalEvent.deltaY < 0){
      mouseUp();
    }else{
      mouseDown();
    }
  }
});
$(document).on('keydown', function(e){
    // get keycode of current keypress event
    var code = (e.keyCode || e.which);

    if(code == 38) {
      mouseUp();
    }
    if(code == 40) {
      mouseDown();
    }
});
