
//array of awesome shows
var gif = ["Parks and Rec", "Bob's Burger", "Rick and Morty", "Full Metal Alchemist", "The League", "Stranger Things"];



	$('button').on('click', function() {
		var gif = $(this).data('gif');
		// var movie = $('#data-giphy').val();
		var queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + gif + '&api_key=dc6zaTOxFJmzC&limit=10';


		//when one button likes another button...
		function newButton(){

				$('#giphy-input').empty();
				for (var i = 0; i < results.length; i++) {
					var giphyBtn = $('<button>').text(showTitle[i]).addClass('giphybutton': attr({'data-giphy' : showTitle[i]});
					$('#giphy-input').append(giphyBtn);
					giphyBtn.html(JSON.stringify(gif));
				}
		//attaching the gifs from the click of the button		
		$('.giphyBtn').on('click', function(){
				$('#giphyView').empty();

				var currentGiphy = $(this).data('name');
				$.ajax({url: queryUrl, method: 'GET'}).done(function(gif){
					gif = giphy.data;


					$.each(gif, function(index,value){
							gif = value.images.original.url;

					var currentRating = value.rating;
					var results = response.data;

					}
					
					var rating = $('<h6>').html(currentRating).addClass();
					var giphyPlay = $('<button>').append(rating, gif);
					$('#gifsView').append(giphyScene);
				


					$('#gifsView').append(giphyDiv);
				}
		    }
		  }
		});
	   return false;
	});


