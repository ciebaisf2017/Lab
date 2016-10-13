// START HERE!
console.log('Mission to Mars is a go!')

// add double check function to button in HTML
const buttonClickHandler = () => {
  $('#launch').click(() => {
    let temp = parseInt(prompt("This is mission control. Please report the current temperature in fahrenheit!"));
    let fuel = parseInt(prompt("Please report the fuel percentage!"));
    let password = prompt("Please report the password!");
    if (temp <= 200 && fuel > 60 && password === "fizzbuzz") {
      alert("Houston is ready for takeoff! Start the countdown!!");
      countdown();
    }
  });
};

// countdown function
const countdown = () => {
  let timer = 10;
  $('#count').text(timer);
  let clearTimer = setInterval(() => {
    if (timer === 0) {
      $('#count').text('');
      clearInterval(clearTimer);
      // scrollToJQ($('body'), 0, 12000);
      scrollToJQInterval($('body'), 0, 10000);
    } else {
      timer--;
      $('#count').text(timer);
    }
  }, 1000);
};


$(() => {
  // Scroll to the bottom of the page at the start so we can go back up!!
  window.scrollBy(0, 20000);

  // Attach the click event to the Go! button
  buttonClickHandler();
});
