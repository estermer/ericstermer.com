$(document).ready(function(){
    
  function formatSearchText(searchTerm) {
    searchTerm = searchTerm.split(' ');
    searchTerm = searchTerm.join('+')
    searchTerm = searchTerm.toLowerCase();
    return searchTerm;
  }

  $('#myInp').keypress(function (e) {
    if (e.which == 13) {
      $('input#myInp[type="text"]').outerWidth('100%');
      var searchTerm = $('#myInp').val(); 
      searchTerm = formatSearchText(searchTerm);
      var wikiURL = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=" + searchTerm + "&callback=wikiCallback";

      $.ajax({
        url : wikiURL,
        dataType : "jsonp",
        method : "GET",
        success : function(json){
          var wikiResults = '<ul>';

            for(var i = 0; i < json[1].length; i++){
              var listItem = '<li><a href="' + json[3][i] + '" target="_blank"><h4>' + json[1][i] + '</h4><p>' + json[2][i] + '</p></a></li>';
              wikiResults += listItem;
              
            }

          wikiResults += '</ul>';
          console.log(wikiResults);
          $('#searchDisplay').html(wikiResults);
        }
      });



    }
  });
  
});