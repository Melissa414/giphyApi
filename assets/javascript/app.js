var buttonList = ['Parks and Rec', 'Bob\'s Burger', 'Rick and Morty', 'Full Metal Alchemist', 'The League', 'Stranger Things'];
var pausedGif;
var playingGif;
var currentGif;
var newGif;

function createButtons() {
    $('#button-list').empty();
    for (var i = 0; i < buttonList.length; i++) {
        var newBtn = $('<button>');
        newBtn.text(buttonList[i]).addClass('giphybutton').attr({
            'data-giphy': buttonList[i]
        });

    }
}

function addShowToButtonList(show) {
    buttonList.push(show);
    createButtons();
    $('#giphy-input').val('');
}

$(document).on('click', '.choice', function() {

    console.log("image clicked" + $(this).attr('data-value'));

    $(this).attr('src', $(this).data('play'));
});


$('#addGiphy').on('click', function() {
    //added buttons after searching
    var inputVal = $('#giphy-input').val();
    addShowToButtonList(inputVal);

    return false;
});

function getGiphyImages(showName) {
    $('#gifsView').empty();

    var queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + showName + '&api_key=dc6zaTOxFJmzC&limit=10';
    $.ajax({
            url: queryUrl,
            method: 'GET'
        })
        .done(function(response) {
            // console.log(response);

            var gifs = response.data;

            $.each(gifs, function(key, value) {

                //created a new DIV element
                var container = $('<div>');
                container.attr('id', "gifsDisplayed");

                //gif is the object returned from the API
                var gif = value;
                var original_url = gif.images.original.url;

                //attach images to new element
                newImage = $('<img>');
                newImage.attr('src', original_url);
                newImage.attr('data-value', original_url);
                container.append(newImage);
                //added ratings
                p = $('<p>');
                p.text('Rating: ' + gif.rating);
                container.append(p);

                newImage.addClass('choice');
                newImage.attr('data-play', playingGif);
                newImage.attr('data-paused', pausedGif);

                $('container').append(gifs);
                $('container').append(p);
                $('#gifsView').append(container);
            });
        });
}

$(document).on('click', '.giphybutton', function() {
    var showName = $(this).data('giphy');
    getGiphyImages(showName);
});

function createButtons() {
    $('#button-list').empty();
    for (var i = 0; i < buttonList.length; i++) {
        var newBtn = $('<button>');
        newBtn.text(buttonList[i]).addClass('giphybutton').attr({
            'data-giphy': buttonList[i]
        });
        $('#button-list').append(newBtn);
    }
}


createButtons();
