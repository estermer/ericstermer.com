// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // Your Code Here
    var numberDisplay = document.getElementById('numeric-display');
    numberDisplay.innerHTML = timerValue;
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
    var progressBar = document.getElementsByClassName('progress-bar')[0];
    progressBar.style.width = timerValue + '%';
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
    var flame = document.getElementsByClassName('flame')[0];
    var unburnt = document.getElementsByClassName('unburnt')[0];
    var burnt = document.getElementsByClassName('burnt')[0];
    burnt.style.width = -1 * (timerValue - 100) + '%';
    unburnt.style.width = timerValue - 2 + '%';

  },
  drawCrawlers: function(timerValue){
    // Your Code Here
    var crawlerTrack = document.getElementsByClassName('crawler-track')[0];
    var crawler = document.getElementsByClassName('crawler')[0];

    crawler.style.marginLeft = -12 * (timerValue - 100) + 'px';

    if(timerValue%2 !== 0){
      crawlerTrack.style.paddingTop = '5px';
      crawlerTrack.style.paddingBottom = '0px';
    } else {
      crawlerTrack.style.paddingTop = '0px';
      crawlerTrack.style.paddingBottom = '5px';
    }

  }
};
