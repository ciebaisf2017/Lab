console.log('loaded!');

var $button = document.querySelector('button');
$button.addEventListener('click', handleMyClicks());

function handleMyClicks() {
  console.log('I was click!');
}
