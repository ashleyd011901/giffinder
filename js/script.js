// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/*global $*/


$(document).ready(function() {
    // var counter = 0;
    var currentInput = '';

    $("#searchButton").click(function() {
        var input = $("#searchInput").val();
        fetchGiphy(input);
    });
});

function fetchGiphy(i) {
    $.ajax({
        url: "https://api.soundcloud.com/tracks?q=" + i + "&limit=50&client_id=5aa8e389ba4e24b6106af5159ab3e344",
        method: "GET",
        success: function(response) {
            var songs = [];
            
            for (var i = 0; i < response.length; i++) {
                if (response[i].artwork_url != null) {
                    var song = {
                        "title": response[i].title,
                        "image": response[i].artwork_url,
                        "duration": millisToMinutesAndSeconds(response[i].duration)
                    }
                    songs.push(song);
                }
            }
            
            $('#listOfSongs').html("");
            for (var i = 0; i < songs.length; i++) {
                displaySong(songs[i], i);
            }
        },
    });
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


function displaySong(song, index) {
    
    $('#listOfSongs').append(
     '<div id="album_cover' + index + '" class="text-center"></div>' +
                  ' <div id="title'+ index +'" class="text-center"></div>' +
                   '<div id="duration' + index + '" class="text-center"></div>'
    )
    var titleHtml = "<p> Title: " + song.title + "</p>";
    var durationHtml = "<p> Duration: " + song.duration + "</p>";
    var imageHtml = "<img src =" + song.image + ">";

    $('#album_cover' + index).html(imageHtml);
    $('#title' + index).html(titleHtml);
    $('#duration' + index).html(durationHtml);
}

function displaySong_old(song, order) {
    var songIndex = $("#song-" + order);
    console.log("renderPlayList");
    $(".songs").append("<div class='song' id='song-" + order + "'><br><div class='remove'>&#10007;</div></div>");
    songIndex.append("<p> Title:" + song.title + "</p>");
    songIndex.append("<p> Artist:" + song.artist + "</p>");
    songIndex.append("<a href ='" + song["mp3-url"] + "'> <h5 class= 'header'>Play Song</h5> </a>");
    songIndex.append("<img src =" + song["image-url"] + ">");
}
