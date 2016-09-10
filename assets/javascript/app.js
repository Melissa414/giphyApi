var buttonList = ['Parks and Rec', 'Bob\'s Burger', 'Rick and Morty', 'Full Metal Alchemist', 'The League', 'Stranger Things'];


function createButtons() {
    $('#button-list').empty();
    for (var i = 0; i < buttonList.length; i++) {
        var newBtn = $('<button>');
        newBtn.text(buttonList[i]).addClass('giphybutton').attr({ 'data-giphy': buttonList[i] });
        $('#button-list').append(newBtn);
    }
}

function addShowToButtonList(show) {
    buttonList.push(show);
    createButtons();
    $('#giphy-input').val('');
}

function getGiphyImages(showName) {
    $('#gifsView').empty();

    var queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + showName + '&api_key=dc6zaTOxFJmzC&limit=10';
    $.ajax({ url: queryUrl, method: 'GET' })
        .done(function(response) {
            // console.log(response);

            var gifs = response.data;


            $.each(gifs, function(key, value) {

                var container = $('#gifsView');
                var gif = value;
                var original_url = gif.images.original.url;
                //attached images
                newImage = $('<img>');
                newImage.attr('src', original_url);
                container.append(newImage);
                //added ratings
                p = $('<p>');
                p.text('Rating: ' + gif.rating);
                container.append(p)
                // ('#gifsView').append(p);
            });
        });
};

$('#addGiphy').on('click', function() {
    //added buttons after searching
    var inputVal = $('#giphy-input').val();
    addShowToButtonList(inputVal);

    return false;
});

$(document).on('click', '.giphybutton', function() {
    var showName = $(this).data('giphy')
    getGiphyImages(showName);
});

createButtons();
