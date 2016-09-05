//array of awesome shows
var buttonList = ['Parks and Rec', 'Bob\'s Burger', 'Rick and Morty', 'Full Metal Alchemist', 'The League', 'Stranger Things'];


// create buttons from array
function createButtons() {
  $('#button-list').empty();
  for (var i = 0; i < buttonList.length; i++) {
    // you cant chain jquery functions by colon
    var newBtn = $('<button>');
    newBtn.text(buttonList[i]).addClass('giphybutton').attr({'data-giphy' : buttonList[i]});
    $('#button-list').append(newBtn);
  }
}

// add a new show to the array
function addShowToButtonList(show){
  // push show to array
  buttonList.push(show);
  // recreate buttons
  createButtons();
  // clear input
  $('#giphy-input').val('');
}

function getGiphyImages(showName){
  // clear the container
  $('#gifsView').empty();
  // contruct query url from function argument
  var queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + showName + '&api_key=dc6zaTOxFJmzC&limit=10';
  // AJAX call gify url
  $.ajax({url: queryUrl, method:'GET'})
    .done(function(response) {
      // console log the response object
      console.log(response);
      // set gif collection to it's own var
      var gifs = response.data;
      // use jquery each to iterate through gifs
      $.each(gifs, function(key, value){
        // assign a container div
        var container = $('#gifsView'),
        // set value name to "gif"
        gif = value,
        // get original gif url from object
        original_url = gif.images.original.url,
        // create a new image with jQuery
        newImage = $('<img>');
        // set that img's src to url from response
        newImage.attr('src', original_url);
        // append the new image to the container div
        container.append(newImage);
      });
    });
}

// click event to add new button
$('#addGiphy').on('click', function(){
  // get inputs value
  var inputVal = $('#giphy-input').val();
  addShowToButtonList(inputVal);
  // prevent default behavior
  return false;
});


// click event to add new gifs
$(document).on('click', '.giphybutton', function(){
  // get show name from data attribute
  var showName = $(this).data('giphy');
  // append gifs to the dome
  getGiphyImages(showName);
});

// create initial buttons from array
createButtons();
