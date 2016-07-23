$(document).ready(function() {
  var flikrURL = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  var dog = {tags: "dog", format: "json"};
  var cat = {tags: "cats", format: "json"};
  var moose = {tags: "moose", format: "json"};
  var photoDisplay = document.getElementById("photos");
  
  function displayPhotos(json) {
    var photos = '<ul>';
    
    for(var i = 0; i < 4; i++){
      var photoThumb = '<img src="' + json.items[i].media.m + '">';
      var photoLink = '<a href="' + json.items[i].link + ' class="image">';
      var listElement = '<li class="grid-25 tablet-grid-50">';
      
      listElement = listElement + photoLink + photoThumb + '</a></li>';
      
      photos += listElement;
    }
    
    photos += '</ul>';
    
    $(photoDisplay).html(photos);
    
  }
  
 $('button').click(function(){
    $('button').removeClass('selected');
   $(this).addClass('selected');
   
   if($(this).is('#dog')){
    $.getJSON(flikrURL, dog, displayPhotos);
   } else if($(this).is('#cat')){
    $.getJSON(flikrURL, cat, displayPhotos);
   } else if($(this).is('#moose')){
    $.getJSON(flikrURL, moose, displayPhotos);
   }
 });
  
  
  
});
