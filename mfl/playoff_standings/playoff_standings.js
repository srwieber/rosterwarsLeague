function divisionWinners() {
  $('table#standings').has('td#division00').addClass('dd');
  $('table#standings').has('td#division03').addClass('tt');
  $('.dd#standings tr:eq(2), .dd#standings tr:eq(8), .dd#standings tr:eq(14)').addClass('division_winner');
  $('.tt#standings tr:eq(2), .tt#standings tr:eq(8), .tt#standings tr:eq(14)').addClass('division_winner');
}

function wildcardTeams() {
  // Function to find the two highest rows based on 'h2hpct' and 'pf'
  function findTwoHighestRows(selector) {
    var rows = [];

    // Iterate through the rows and add rows with the highest 'h2hpct' values to the array
    $(selector + ' tr:not(.division_winner)').each(function() {
      var row = $(this);
      var h2hpctValue = parseFloat(row.find('.h2hpct').text()) || 0;
      var pfValue = parseFloat(row.find('.pf').text()) || 0;

      rows.push({ row: row, h2hpct: h2hpctValue, pf: pfValue });
    });

    // Sort rows based on 'h2hpct' and 'pf' values
    rows.sort(function(a, b) {
      if (a.h2hpct !== b.h2hpct) {
        return b.h2hpct - a.h2hpct; // Sort by 'h2hpct' in descending order
      } else {
        return b.pf - a.pf; // Sort by 'pf' in descending order if there's a tie
      }
    });

    // Add the class 'wildcard' to the two highest rows
    for (var i = 0; i < Math.min(2, rows.length); i++) {
      rows[i].row.addClass('wildcard');
    }
  }

  // Find the two highest rows in '.dd#standings'
  findTwoHighestRows('.dd#standings');

  // Find the two highest rows in '.tt#standings'
  findTwoHighestRows('.tt#standings');
}

function allPlay() {
  function allPlayForTable(tableSelector) {
    // Find the row in the specified table with the highest number in 'all_play_wlt'
    var highestValue = 0;
    var highestRow;

    $(tableSelector + ' tr:not(.division_winner, .wildcard)').each(function() {
      var playWltCell = $(this).find('.all_play_wlt');
      var playWltValue = parseFloat(playWltCell.text());

      // Check if the value is valid and higher than the current highest value
      if (!isNaN(playWltValue) && playWltValue > highestValue) {
        highestValue = playWltValue;
        highestRow = $(this);
      }
    });

    // Add a class to the row with the highest value (if found)
    if (highestRow) {
      highestRow.addClass('all-play');
    }
  }

  // Call the function for '.dd#standings'
  allPlayForTable('.dd#standings');

  // Call the function for '.tt#standings'
  allPlayForTable('.tt#standings');
}

function playoffTitles() {
  let ifEnded = ' if the Season ended today';
  if(completedWeek > 11){
    ifEnded = '';
  }
  $('.division_winner').before('<tr class="division_title"><td colspan="15">Division Winner' + ifEnded + '</td></tr>')
  $('.wildcard').before('<tr class="wildcard_title"><td colspan="15">Wildcard Team' + ifEnded + '</td></tr>')
  $('.all-play').before('<tr class="all-play_title"><td colspan="15">All-Play Team' + ifEnded + '</td></tr>')
}

if(completedWeek > 0){
  divisionWinners()
  wildcardTeams()
  allPlay()
  playoffTitles()
}
