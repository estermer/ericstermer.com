$(document).ready(function(){
  
  var equation =  '';
  
  /***creating the equation***/
  $('.button').click(function(){
      equation += $(this).val();
      $('#numbers').html(equation);
  });
  
  /***evaluate the equation***/
  $('#enter').on('click', function() {
    equation = eval(equation);
    $('#numbers').html(equation);
  });
  
  /***clear display***/
  $('.clear').on('click', function(){
    equation = "";
    $('#numbers').html("0");
  });
  
});
