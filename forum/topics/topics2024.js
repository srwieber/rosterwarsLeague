// if a sig image is broken, use this one instead
const brokenSigImg = 'https://i.servimg.com/u/f39/15/70/85/29/future12.jpg';

// update active members with their user number. these users have sig content. 
const members = ['u1', 'u2', 'u3'];

let sigContentImages = { 
  u1: { // Eternals
    history:   [ 'https://i.servimg.com/u/f48/20/39/60/79/eterna10.jpg' ], 
    meetups:   [ 'https://i.servimg.com/u/f48/20/39/60/79/eterna11.jpg' ], 
    videos:    [ 'https://www.youtube.com/embed/gGtW4AFyLyM?si=9_-f34eXCBAxCPnK',
               'https://www.youtube.com/embed/pSABKRTtJM8?si=AYPxzObEdP1HmWQn',
               'https://www.youtube.com/embed/pSABKRTtJM8?si=AYPxzObEdP1HmWQn',
               'https://www.youtube.com/embed/pSABKRTtJM8?si=AYPxzObEdP1HmWQn'], 
    awards:    [ 'https://i.servimg.com/u/f48/20/39/60/79/eterna12.jpg' ], 
    trophies:  [ 'https://i.servimg.com/u/f48/20/39/60/79/eterna12.jpg' ], 
    mvps:      [ 'https://i.servimg.com/u/f48/20/39/60/79/banner12.jpg',
               'https://i.servimg.com/u/f48/20/39/60/79/banner11.jpg',
               'https://i.servimg.com/u/f48/20/39/60/79/banner10.jpg'], 
    cards:     [ 'https://i.servimg.com/u/f39/15/70/85/29/2024_a11.jpg',
               'https://i.servimg.com/u/f39/15/70/85/29/2024_a10.jpg',
               'https://i.servimg.com/u/f10/19/48/74/40/coxfle10.jpg',
               'https://i.servimg.com/u/f10/19/48/74/40/coxfle11.jpg'], 
    field:     [ 'https://i.servimg.com/u/f48/20/39/60/79/fielde10.jpg' ], 
    wallpaper: [ 'https://i.servimg.com/u/f48/20/39/60/79/wallpa10.jpg' ], 
    shame:     [ 'https://i.servimg.com/u/f48/20/39/60/79/eterna13.jpg' ]
  }, 
    u110: { // Tyrants
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u181: { // Slashers
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u31: { // Dragons
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u5: { // Gadabouts
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u137: { // Nighthawks
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u88: { // Silverballers
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u43: { // Africans
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u84: { // Muskies
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u4: { // Degenerates
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u95: { // Mayhem
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u108: { // Crusaders
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u192: { // Arsenic
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u19: { // Pigskins
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u171: { // Vipers
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u120: { // Doppelgangers
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u25: { // Redknights
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u89: { // Nightmare
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u36: { // SteelCats
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u180: { // Mad Goats
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u15: { // Golddiggers
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u116: { // Oysters
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u151: { // Justice
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u64: { // Goon Squad
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u246: { // Counselors
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u226: { // Saints
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u75: { // Divine
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u111: { // Spurs
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u244: { // Raiders
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u73: { // Tiger Sharks
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u33: { // Bombers
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u239: { // Blizzard
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u202: { // Tremors
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u204: { // Falcons
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u235: { // Badgers
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u182: { // Unicorns
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u217: { // Unforgiven
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u196: { // Warlocks
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u234: { // Malachi Crunch
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u177: { // Rottweilers
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u206: { // Blitz
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u233: { // Mungmen
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u230: { // Legion
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
      u221: { // Gators
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  },
  u3: { // Puffins
    history:   [ 'x' ], 
    meetups:   [ 'x' ], 
    videos:    [ 'x' ], 
    awards:    [ 'x' ], 
    trophies:  [ 'x' ], 
    mvps:      [ 'x',
               'x',
               'x'], 
    cards:     [ 'x' ], 
    field:     [ 'x' ], 
    wallpaper: [ 'x' ], 
    shame:     [ 'x' ]
  } // no comma after last user 
};

const sigButtons = '<div class="sig_buttons"><div class="history"></div><div class="meetups"></div><div class="videos"></div><div class="awards"></div><div class="trophies"></div><div class="mvps"></div><div class="cards"></div><div class="field"></div><div class="wallpaper"></div><div class="shame"></div></div>';
let sigContent = '<div class="sig_content"><div>No content to display.</div></div>';


$(document).ready(function () {
  $('body').addClass('topics');
  $('.signature_div br').remove();
  $('tr.post').each(function(){
    // declare user ID for each post
    let poster = $(this).find('.name strong a').attr('href');
    if(poster != undefined){
      poster = poster.replace("/", "");
    }
    // declare post ID
    let postID = $(this).attr('id');
    // move sig
    let sig = $(this).find('.signature_div');
    $(sig).wrap('<tr id="sig_' + postID + '" class="sigrow sig_' + poster + '" data-post-id="sig_' + postID + '"><td colspan="2"></td></tr>');
    let sigrow = $(this).find('.sigrow');
    //remove email button row
    $(this).next().remove();
    // wrap post and sig into a container
    $(this).wrap('<tr class="postcontainer"><td colspan="2"><table width="100%"></table></td></tr>');
    $(this).after(sigrow);
    // create sig buttons and container 
    if (members.indexOf(poster) !== -1) {
      $(this).next().find('.signature_div').append(sigButtons);
      $(this).next().find('.signature_div').append(sigContent);
    }
  });
  
  // add more posts notification at the bottom of the page 
  $('.forumline.noprint:has(.row2 span.gensmall strong:nth-of-type(2))').addClass('topic_pagination');
  $('.topic_pagination td.row1').addClass('pagination');
  let thispagenum = $('.topic_pagination tr:first-of-type td:first-of-type strong:first-of-type').text();
  let lastpagenum = $('.topic_pagination tr:first-of-type td:first-of-type strong:last-of-type').text();
  let nextPageLink = $('.topic_pagination td.row1 b').next().attr('href');
  let morepages = '<tr><td class="row2 nextpage_url" colspan="2" style="text-align:center;"><a href="' + nextPageLink + '" style="padding:5px;font-size:150%;text-decoration:none;">Next Page <i class="fa-solid fa-angles-right fa-beat-fade" style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;"></i></a></td></tr>';
  if (thispagenum < lastpagenum) {$('.topic_pagination tr:first-of-type').before(morepages);}  
});


$(document).on('click','.sig_buttons .history, .sig_buttons .meetups, .sig_buttons .videos, .sig_buttons .awards, .sig_buttons .trophies, .sig_buttons .mvps, .sig_buttons .cards, .sig_buttons .field, .sig_buttons .wallpaper, .sig_buttons .shame', function() {
  // declare which user has been clicked
  let poster = $(this).closest('.postcontainer').find('.post .name strong a').attr('href');
  if(poster != undefined){
    poster = poster.replace("/", "");
  }  
  // declare which post has been clicked
  let postID = $(this).closest('.sigrow').attr("id"); 
  // declare which element has been clicked
  let clickedSigElement = $(this).attr('class');
  // pass variables as parameters to next function
  showSigImages(poster, clickedSigElement, postID);
});
// card clicks
$(document).on('click','.sig_content .cards_content img:nth-of-type(odd)', function() {
    $(this).removeClass('unflip_card').addClass('flip_card').delay(500).hide(0);
    $(this).next().delay(499).show(0).removeClass('flip_card').addClass('unflip_card');
});
$(document).on('click','.sig_content .cards_content img:nth-of-type(even)', function() {
    $(this).removeClass('unflip_card').addClass('flip_card').delay(500).hide(0);
    $(this).prev().delay(499).show(0).delay(500).removeClass('flip_card').addClass('unflip_card');
});


function showSigImages(poster, clickedSigElement, postID){
  let sigContainer = document.getElementById(postID).querySelector('.sig_content div');
  
  if( clickedSigElement + '_content' === sigContainer.className ){
    sigContainer.className = "";
    $(sigContainer).css('display','none');
  }else{
    sigContainer.className = "";
    sigContainer.classList.add(clickedSigElement + '_content');
    $('.sig_content .fa-solid').css('display','block');
    $(sigContainer).css('display','grid');
  }
  // clear container. add a loading bar 
  sigContainer.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
  // get image urls
  let urls = getSigImageUrls(poster, clickedSigElement);
  // display urls as images
  if( sigContainer.className === 'videos_content' ){
    urls.forEach(function(url){
      var video = document.createElement('iframe');
      video.src = url;
      video.alt = "Video";
      video.width = "560";
      video.height = "315";
      video.style.border = "none";
      video.setAttribute("allowfullscreen","allowfullscreen");
      sigContainer.appendChild(video);
      $('.sig_content .fa-solid').remove();
    }); 
  }else{
    urls.forEach(function(url){
      var img = document.createElement('img');
      img.src = url;
      img.alt = "Image";
      img.onerror = function() {
          img.src = brokenSigImg;
      };
      img.onload = function() {
        sigContainer.appendChild(img);
        $('.sig_content .fa-solid').css('display','none');
      }
    }); 
  }
}


function getSigImageUrls(poster, clickedSigElement){
  if(sigContentImages.hasOwnProperty(poster) && sigContentImages[poster].hasOwnProperty(clickedSigElement) ){
    return sigContentImages[poster][clickedSigElement];
  }else{
    return [];
  }
}
