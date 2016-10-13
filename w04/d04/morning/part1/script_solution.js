console.log('Linked');

$(function() {
  $('#name-click').click(function() {
    let name = prompt("Hey what does this button say?");
    $(this).text(name);
  });

  $('#count-click').click(function() {
    let seconds = parseInt(prompt("Enter the number of seconds to wait before I alert 'DONE!'")) * 1000;
    setTimeout(function() {
      alert("DONE!");
    }, seconds);
  });

  $('#scroll-click').click(function() {
    let scrollDistance = parseInt(prompt("How many pixels should I scroll down?"));
    window.scrollBy(0, scrollDistance);
  });
});
