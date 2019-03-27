// Giphy API 







// Variables
var cartoons = ['Aqua Teen Hunger Force',  'The Simpsons', 'American Dad', 'Rugrats'];
console.log(cartoons);

//Render Beginning Buttons
function renderButtons() {

    var buttons = $('#button-Box');
    buttons.empty();

    for(var i = 0; i < cartoons.length; i++) {
        var newButton = $('<button>');
        newButton.addClass('allButtons')
        newButton.attr('data-type',cartoons[i]);
        newButton.text(cartoons[i]);
        buttons.append(newButton);
    
    }
}

$(document).on('click', '.allButtons', function(){
    var type = $(this).data('type');
    console.log(type)


var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        type + "&api_key=Oi9wtukFofyfHIGGJBQhyNPJgKEf98HS&limit=5";


        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response){
                var results = response.data;

                for (var i = 0; i < results.length; i++){

                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var cartoonImage = $("<img>");

                    cartoonImage.attr("src", results[i]
                    .images.fixed_height.url);

                    gifDiv.append(cartoonImage);
                    gifDiv.append(p);

                    $("#gifBox").prepend(gifDiv);
                }

            });
});



// Create new button when submit is clicked
$("#add-cartoon").on("click", function(event) {
    event.preventDefault();

    var cartoon = $("#cartoon-input").val().trim();

   cartoons.push(cartoon);
   
    renderButtons();
     console.log(cartoons);
     console.log('data-type'.cartoons)
     
});



renderButtons();







// Fill buttons with data


//create new button on click


        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        //   })
