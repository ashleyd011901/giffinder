// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/*global $*/
  
$(document).ready(function() {
    var counter = 0;
    var currentInput = '';
    function fetchGiphy(i) {
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + i + "&api_key=dc6zaTOxFJmzC&limit=13",
            method: "GET",
            success: function(response) {
                //Log the orignal image to the console    
                var image = response.data[counter].images.original.url;
                //Log the url from the orignial gif to the console  
                $('#gif').html('<img src=' + image + '>'); //adding info from gif to url
            },
        });
    }
    $("#searchButton").click(function() {
        var input = $("#searchInput").val();
        fetchGiphy(input);
        if (currentInput == input) {
            counter++;
        }else {
            counter = 0; //addition of new gif
        }
        currentInput = input;
    });
});
