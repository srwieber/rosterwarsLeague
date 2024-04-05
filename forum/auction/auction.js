function auctionBoard(){
  const isAuction = $('#topic_nav img[alt~="RFA"]');
  if(isAuction.length === 1){
    $('body').addClass('auction');
    let numberOfAuctions = $('.forumline .desktop a.topictitle').length -1;
    let numberOfClosedAuctions = $('.forumline .desktop a.topictitle:has(span)').length;
    let numberOfOpenAuctions = numberOfAuctions - numberOfClosedAuctions;
    $('table#topic_nav').before('<div id="auction_title">Welcome to the Auction!</div>');
    $('#auction_title').after('<div id="auction_info">There are ' + numberOfOpenAuctions + ' auctions open</div>');
    elapsedAuction();
    findMyNominations();
  }
}
auctionBoard();

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
                $(this).addClass('warning');
                $(this).next('.mobile.toprow').addClass('warning');
                $(this).next('.mobile.bottomrow').addClass('warning');
            } else if (timeDifferenceInHours >= 24) {
                $(this).addClass('auction_over');
                $(this).next('.mobile.toprow').addClass('auction_over').next('.mobile.bottomrow').addClass('auction_over');
            }
        } else {
            // If no time match is found, mark the row as "auction_over"
            $(this).addClass('auction_over');
            $(this).next('.mobile.toprow').addClass('auction_over').next('.mobile.bottomrow').addClass('auction_over');
        }
    }
  });
}

function findMyNominations(){
    $('.forumline .desktop:not(.warning, .auction_over) td:nth-child(5):contains("' + _userdata["username"] + '")').closest('tr').addClass('my_nomination');
    let myNumOfNominations = $('.my_nomination').length;
    $('#auction_info').append('<br />You have ' + myNumOfNominations + ' nominations on the board');
}
