
window.onload = function(){
  var timerVal = 100;
  console.log(timerUI);

  var countDown = function(){
    if (timerVal >= 0) {
      // Trigger All TimerUI Methods //
      for (var key in timerUI) {
        timerUI[key](timerVal);
      }
      console.log(timerVal);
      timerVal -= 1;
      setTimeout(countDown, 1000);
    }
  };
  countDown();
};
