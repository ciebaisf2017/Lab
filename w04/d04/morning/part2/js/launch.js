// START HERE!
console.log('Mission to Mars is a go!');

// Scroll to the bottom of the page at the start so we can go back up!!


// Define the Go! button event listener


// Define the countdown function


// Attach the click event to the Go! button


function buttonClickHandler() {
    // Attach a click event handler to the GO! button with id #
    $('#launch').on('click', function () {
     let temp = parseInt( prompt( "This is mission control: Please report the current temperature in fahrenheit."));
     let fuel = parseInt(prompt("Please report the current fuel percentage."));
     let pw = parseInt(prompt("Please report the password!"));
    });
    // Prompt the user three times for current tempature in F, current fuel percentage, and the password
    // If temp is less than or equal to 200, the fuel is greater than 60, and the password is 'fizzbuzz', alert the User of an iminent launch and initiate countdown()
}
function countdown() {
    // Use setInterval or setTimeout to create a countdown that starts at 10
    // Update the div#launch to reflect the current count
    // When the countdown reaches 0, use the 'scrollTo' function to launch the rocket
}


$(document).ready(function() {
  buttonClickHandler();
});
