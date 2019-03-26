// Giphy API 
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         cartoon + "&api_key=dc6zaTOxFJmzC&limit=5";

// Variables
var cartoons = ["Aqua Teen Hunger Force", "Bob's Burgers", "The Simpsons","American Dad", "Rugrats"];
console.log(cartoons);

//Render Beginning Buttons
function renderButtons() {

    var buttons = $('#button-Box');
    buttons.empty();

    for(var i = 0; i < cartoons.length; i++) {
        var newButton = $('<button>');
        newButton.text(cartoons[i]);
        buttons.append(newButton);
    }
}

// Create new button when submit is clicked
$("#add-cartoon").on("click", function(event) {
    event.preventDefault();

    var cartoon = $("#cartoon-input").val().trim();

   cartoons.push(cartoon);

    renderButtons();
});



renderButtons();







// Fill buttons with data


//create new button on click


        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        //   })
