// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.


/**********JS and jQuery Updated and Refactored by Eric Stermer*********/
$(function(){

var App = {

  index: 0,

  counterList: [],

  incrementCounter: function(dataIndex){
    //update underlying data
    for(var i = 0; i < this.counterList.length; i++){
      if(this.counterList[i].indexId === dataIndex){
        this.counterList[i].count++;
        return this.counterList[i].count;
      }
    }
  },

  createCounterHTML: function(){
    // Create new element
    var $newCounter = $('<div></div>').addClass('counter').data('index', this.index);
    $newCounter.html('<h3>Count: <span>0</span></h3><button> +1 </button><button> Delete Counter </button>');

    //put new counter in counterList array
    this.counterList.push({indexId: App.index, count: 0});
    this.index++;

    //event handlers
    UI.createEventHandlers($newCounter);

    // Change UI by inserting new counter into page
    $('#counter-list').append($newCounter);
  },

};

var UI = {

  addNewCounter: function(){
    App.createCounterHTML();
  },

  createEventHandlers: function($newCounter){
    $newCounter.children().eq(1).on('click', function(){
      var i = Number($newCounter.data('index'));
      // Change UI
      $newCounter.find('span').html(App.incrementCounter(i));
    });

    $newCounter.children().eq(2).on('click', function(){
      var i = Number($newCounter.data('index'));
      // Change UI
      $newCounter.remove();
    });
  }

  // plusOne:
  //
  // deleteCounter:
};

  //create new counter on click
  $('#new-counter').on('click', UI.addNewCounter);
});
