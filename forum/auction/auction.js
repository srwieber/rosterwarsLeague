function auctionBoard(){
  const isAuction = $('#topic_nav img[alt~="RFA_Auction"]');
  if(isAuction.length === 1){
    $('body').addClass('auction');
    elapsedAuction();
    findMyNominations();
  }
}
$( document ).ready(function() {
    auctionBoard();
});

function elapsedAuction(){
  $('.forumline tr.desktop').each(function(index) {
    let postDetails = $(this).find('.postdetails').text();
    let lockedTopic = $(this).find('img[title*="This topic is locked"]').length > 0; // Check if the row contains a locked topic image
    
    if (!lockedTopic) { // Skip the row if it contains a locked topic image
        let timeMatch = postDetails.match(/(?:Today|Yesterday) at (\d{1,2}:\d{2}\s(?:am|pm))/i);
        if (timeMatch) {
            let timeString = timeMatch[0].trim(); // Use the entire matched string
            
            // Parse the time string
            let timeParts = timeString.split(/:|\s/); // Split by colon or space
            let hours = parseInt(timeParts[2]); // Extract hours
            let minutes = parseInt(timeParts[3]); // Extract minutes
            let ampm = timeParts[4].toLowerCase(); // Extract AM/PM and convert to lowercase
            
            // Adjust hours for PM and midnight
            if (ampm === 'pm' && hours !== 12) {
                hours += 12;
            } else if (ampm === 'am' && hours === 12) {
                hours = 0;
            }
            
            // Get current date
            let currentDate = new Date();
            
            // Set hours and minutes in the extracted time object
            let extractedTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes);
            
            // Adjust for "Yesterday"
            if (timeString.includes('Yesterday')) {
                extractedTime.setDate(extractedTime.getDate() - 1); // Subtract 1 day
                extractedTime.setHours(hours); // Reset hours to match yesterday's time
            }

            // Calculate time difference in milliseconds
            let currentTime = new Date();
            let timeDifferenceInMilliseconds = Math.abs(currentTime - extractedTime);
            
            // Convert milliseconds to hours
            let timeDifferenceInHours = timeDifferenceInMilliseconds / (1000 * 60 * 60);
            
            // Round the elapsed time to two decimal places
            timeDifferenceInHours = parseFloat(timeDifferenceInHours.toFixed(2));

            // Add class based on elapsed time
            if (timeDifferenceInHours >= 23 && timeDifferenceInHours < 24) {
                $(this).addClass('warning').next('.mobile.toprow').addClass('warning').next('.mobile.bottomrow').addClass('warning');
            } else if (timeDifferenceInHours >= 24) {
                $(this).addClass('auction_over').next('.mobile.toprow').addClass('auction_over').next('.mobile.bottomrow').addClass('auction_over');
            }
        } else {
            // If no time match is found, mark the row as "auction_over"
            $(this).addClass('auction_over').next('.mobile.toprow').addClass('auction_over').next('.mobile.bottomrow').addClass('auction_over');
        }
    }
  });
}

function findMyNominations(){
    $('.forumline .desktop:not(.auction_over) td:nth-child(5):contains("' + _userdata["username"] + '")').closest('tr').addClass('my_nomination').next('.mobile.toprow').addClass('my_nomination').next('.mobile.bottomrow').addClass('my_nomination');
    $('.forumline .desktop:not(.auction_over) td:nth-child(6):contains("' + _userdata["username"] + '")').closest('tr').addClass('high_bidder').next('.mobile.toprow').addClass('high_bidder').next('.mobile.bottomrow').addClass('high_bidder');    const myNumOfNominations = $('.desktop.my_nomination').length;
    const numberOfAuctions = $('.forumline .desktop a.topictitle').length - 1;
    const numberOfClosedAuctions = $('.forumline .desktop.auction_over').length;
    const numberOfOpenAuctions = numberOfAuctions - numberOfClosedAuctions;
    $('table#topic_nav').before('<div id="auction_info">There are ' + numberOfOpenAuctions + ' auctions open</div>');
    const myAuctionBoard = $('.auction #info_open:contains("You can post new topics")').length;
    if(myAuctionBoard > 0){
        $('#auction_info').append('<br />You have <span class="my_nominations_' + myNumOfNominations +'">' + myNumOfNominations + '</span> nominations on the board');
    }
}
