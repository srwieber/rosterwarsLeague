function auctionBoard(){
  const isAuction = $('#topic_nav img[alt~="RFA"]');
  if(isAuction.length === 1){
    $('body').addClass('auction');
    let numberOfAuctions = $('.forumline a.topictitle').length / 2 -1;
    let numberOfClosedAuctions = $('.forumline a.topictitle:has(span)').length / 2;
    let numberOfOpenAuctions = numberOfAuctions - numberOfClosedAuctions;
    $('table#topic_nav').before('<div id="auction_title">Welcome to the Auction!</div>');
    $('#auction_title').after('<div id="auction_info">There are ' + numberOfOpenAuctions + ' auctions open</div>');
    elapsedAuction();
    findMyNominations();
  }
}
auctionBoard();

function elapsedAuction(){
$('.forumline tr.desktop, .forumline tr.mobile.bottomrow').each(function(index) {
    let postDetails = $(this).find('.postdetails').text();
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
            $(this).prev('.mobile.toprow').addClass('warning');
        } else if (timeDifferenceInHours >= 24) {
            $(this).addClass('auction_over');
            $(this).prev('.mobile.toprow').addClass('auction_over');
        }
    }
});

}

function findMyNominations(){
    $('.forumline .desktop:not(.auction_over) td:nth-child(5):contains("' + _userdata["username"] + '")').closest('tr').addClass('my_nomination');
    $('.forumline .mobile.toprow:not(.auction_over) td:last-child:contains("' + _userdata["username"] + '")').closest('tr').addClass('my_nomination').next('.mobile.bottomrow').addClass('my_nomination');
    let myNumOfNominations = $('.desktop.my_nomination').length;
    $('#auction_info').append('<br />You have ' + myNumOfNominations + ' nominations on the board');
}
