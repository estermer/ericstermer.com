// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

window.onload = function(){
  /// DO NOT EDIT ABOVE THIS LINE ///

  /// Buttons ///
  var startButton = document.getElementById('start');
  var lapButton = document.getElementById('lap');
  var stopButton = document.getElementById('stop');


  /// Display elements ///
  var minutes = document.getElementById('mins');
  var seconds = document.getElementById('secs');
  var milliseconds = document.getElementById('millisecs');
  var lapList = document.getElementById('lap-list');

  /// Application Logic ///
  var Stopwatch = {
    advanceTheClock: function(){ // Provided Code : DO NOT EDIT THIS FUNCTION
      if (Stopwatch.isRunning) {
        Stopwatch.updateTimeValues();
        setTimeout(Stopwatch.advanceTheClock, 10);
      }
    },
    isRunning: false,
    mins: 0,
    secs: 0,
    millisecs: 0,
    laps: [],
    updateTimeValues: function(){
      // Your Code
      if(this.millisecs === 99){
        this.millisecs = 0;
        this.secs++;
      } else if(this.seconds === 59){
        this.secs = 0;
        this.mins++;
      } else {
        this.millisecs++;
      }

      Display.updateTimeDisplay();
    },
    reset: function(){
      // Your Code Here
      this.mins = 0;
      this.secs = 0;
      this.millisecs = 0;
      this.laps = [];

      Display.zeroFill();
      lapList.innerHTML = '';
    },
    start: function(){
      // Your Code Here
      this.isRunning = true;
      this.advanceTheClock();
    },
    stop: function(){
      // Your Code Here
      this.isRunning = false;
      this.advanceTheClock();
    },
    lap: function(){
      // Your Code Here
      var newLap = minutes.innerText + ':' + seconds.innerText + ':' + milliseconds.innerText;
      this.laps.push(newLap);
      Display.updateLapList();
    }
  };

  /// User Interface ///
  var Display = {
    zeroFill: function(){
      // Your Code Here
      minutes.innerHTML = '00';
      seconds.innerHTML = '00';
      milliseconds.innerHTML = '00';
    },
    updateTimeDisplay: function(){
      // Your Code Here
      if(Stopwatch.millisecs < 10){
        milliseconds.innerHTML = '0' + Stopwatch.millisecs;
      } else {
        milliseconds.innerHTML = Stopwatch.millisecs;
      }

      if(Stopwatch.secs < 10){
        seconds.innerHTML = '0' + Stopwatch.secs;
      } else {
        seconds.innerHTML = Stopwatch.secs;
      }

      if(Stopwatch.mins < 10){
        minutes.innerHTML = '0' + Stopwatch.mins;
      } else {
        minutes.innerHTML = Stopwatch.mins;
      }

    },
    updateLapList: function(){
      // Your Code Here
      lapList.innerHTML += '<li>' + Stopwatch.laps[Stopwatch.laps.length - 1] + '</li>';
    },
  };
  var EventHandlers = {
    onClickStart: function() {
      // Your Code Here
      Stopwatch.start();
    },
    onClickLap: function(){
      // Your Code Here
      Stopwatch.lap();
    },
    onClickStopReset: function(){
      // Your Code Here
      if(Stopwatch.isRunning){
        Stopwatch.stop();
      } else {
        Stopwatch.reset();
      }
    }
  };
  // Set your event handlers in the lines below.
  startButton.addEventListener('click', EventHandlers.onClickStart);
  lapButton.addEventListener('click', EventHandlers.onClickLap);
  stopButton.addEventListener('click', EventHandlers.onClickStopReset);
};
