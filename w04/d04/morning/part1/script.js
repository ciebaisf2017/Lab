console.log('Linked');

 function nameClick(argument) {
   $('#name-click').on('click', function(){
    let name = prompt("Hey what does this button say?");
   $(this).html(name);
   });
 }


function countClick() {
  $('#count-click').on('click', function () {
    let count = prompt( "Enter the number of seconds to wait before I alert 'DONE!' ")
    let r = parseInt(count);
    setTimeout(done, 3000)
  });
  function done() {
    alert('DONE');
  }
}

function scrollClick() {
  $('#scroll-click').on('click',function(){
  let scroll = prompt('How many pixels should I scroll down?');
  let r = parseInt(scroll);
  window.scrollBy(0,r);
  });


}


$(document).ready(function() {
  nameClick();
  countClick();
  scrollClick();
});
