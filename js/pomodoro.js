window.onload = function() {

  var timer = document.getElementById('timer');
  var time;
  var custom;
  var clock;


  function calculateTime() {
    var minutes = parseInt(document.getElementById('minutes').innerHTML);
    time = minutes*60;
  }

  function initializePomodoro() {
    timer.innerHTML = '<h1 val="pomodoro"><span id="minutes">25</span>:<span id="seconds">00</span></h1>';
    calculateTime();
  }

  function initializeShortBreak() {
    timer.innerHTML = '<h1 val="long"><span id="minutes">5</span>:<span id="seconds">00</span></h1>';
    calculateTime();
  }

  function initializeLongBreak() {
    timer.innerHTML = '<h1 val="short"><span id="minutes">10</span>:<span id="seconds">00</span></h1>';
    calculateTime();
  }

  function initializeCustom() {
    custom = prompt("How many minutes would you like?");
    timer.innerHTML = '<h1 val="custom"><span id="minutes">' + custom + '</span>:<span id="seconds">00</span></h1>';
    calculateTime();
  }

  function countSeconds() {
    var seconds = parseInt(document.getElementById('seconds').innerHTML);

    if(seconds === 0){
      countMinutes();
      seconds = 59;
    } else {
      seconds--;
    }

    if(seconds < 10){
      document.getElementById('seconds').innerHTML = "0" + seconds;
    } else {
      document.getElementById('seconds').innerHTML = seconds;
    }
  }

  function countMinutes() {
    var minutes = parseInt(document.getElementById('minutes').innerHTML);

    minutes = minutes - 1;

    document.getElementById('minutes').innerHTML = minutes;
  }

  function startCounter() {
    stopButton = false;
   //var clock = setInterval(startCounter, 1000);

    if(time !== 0) {
      countSeconds();
      time--;
    }else {
      clearInterval(clock);
    }

  }

  function stopCounter() {
    clearInterval(clock);
  }

  function resetCounter() {
    var counterType = timer.firstElementChild.getAttribute('val');

    if (counterType === 'pomodoro'){
      initializePomodoro();
    }else if (counterType === 'long'){
      initializeShortBreak();
    }else if (counterType === 'short'){
      initializeLongBreak();
    }else if(counterType === 'custom'){
      timer.innerHTML = '<h1 val="custom"><span id="minutes">' + custom + '</span>:<span id="seconds">00</span></h1>';
    }
  }

  /******INITIALIZE COUNTER LENGTH BUTTONS*****/

  //pomodoro
  document.getElementsByClassName('clock-type')[0].addEventListener('click', initializePomodoro);

  //short break
  document.getElementsByClassName('clock-type')[1].addEventListener('click', initializeShortBreak);

  //long break
  document.getElementsByClassName('clock-type')[2].addEventListener('click', initializeLongBreak);

  //custom
  document.getElementsByClassName('clock-type')[3].addEventListener('click', initializeCustom);

  /***************************************/

  /******START STOP and RESET BUTTONS*****/

  //start
  document.getElementById('start').addEventListener('click', function() {
    clock = setInterval(startCounter, 1000);
    startCounter();
  });

  //stop
  document.getElementById('stop').addEventListener('click', stopCounter);

  //reset
  document.getElementById('reset').addEventListener('click', resetCounter);

  /***************************************/

};
