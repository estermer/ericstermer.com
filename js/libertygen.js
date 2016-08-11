$(document).ready(function(){
  
  //array to hold the added and delelted strings
  var notepad = [];
  
  //function to add a note from abutton to the notepad array
  function addNote(note){
    notepad.push(note);
  }
  
  //function to delete a note from the notepad array
  function removeNote(note){
    notepad = notepad.filter(function(element){
      return element !== note;
    });
  }
  
  //event for button press to add or remove from notepad array and display the notepad
  $('.button').click(function(){
    var value = $(this).val();
    
    if(notepad.indexOf(value) >= 0){
      removeNote(value);
    }else{
      addNote(value);
    }
    console.log(notepad);
    $('#display').html(notepad.join(' '));
  });
  
  //hide on loading page
  $('#intro, #app, #acc, #admreqs, #reg, #fci, #fa, #post, #disc, #points').hide();
  
  //hide with clear button and clear display
  $('#clear').click(function(){
    $('#intro, #app, #acc, #admreqs, #reg, #fci, #fa, #post, #disc, #points').hide();
    $('#display').text('');
    notepad = [];
  });
  
  //copy text in diplay to clipboard
  $('#copy').click(function(){
    $('#display').select();
    document.execCommand("copy");
  });
    
  //function to toggle preapp <li preapp>
  $('.preapp').click(function(){
    $('#intro, #app, #admreqs, #fa, #disc, #points').toggle();
    $('#yfafsa, #ymilpay, #ycta').hide();
  });
  
  //function to toggle preacc <li preacc>
  $('.preacc').click(function(){
    $('#intro, #acc, #admreqs, #fa, #disc, #points').toggle();
    $('#yfafsa, #ymilpay, #ycta').hide();
  });
  
  //function to toggle prereg <li prereg> and accept button
  $('.prereg').click(function(){
    $('#intro, #reg, #fa, #disc').toggle();
    $('#yfafsa, #ymilpay, #ycta').hide();
  });
  
  //function to toggle prefci <li prefci> reg button
  $('.prefci').click(function(){
    $('#intro, #fci, #fa, #post, #disc').toggle();
    $('#yfafsa, #ymilpay, #ycta').hide();
  });
  
  //function to toggle postfci walked through FCI button
  $('.postfci').click(function(){
    $('#intro, #post').toggle();
  });
  
  //********FA drop downs**********// 
  $('#fafsa').click(function(){
    $('#yfafsa').toggle();
  });
  $('#milpay').click(function(){
    $('#ymilpay').toggle();
  });
  $('#cta').click(function(){
    $('#ycta').toggle();
  });
  /***********************************/
  
});
/* Create an array for the display*/
//add remove notes to array with a button press
//toggle divs with relavant buttons to campaign
//create a function that runs a loop to display the notes in array
//use indexof to check if a note is already in the array or not