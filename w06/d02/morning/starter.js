console.log('starter.js connected');

// Part 1 - Arenagrams
// const areAnagrams = (wordOne, wordTwo) => {

// };

// const areAnagrams = (wordOne, wordTwo) => {
//   let one = wordOne.split('').sort().join('');
//   let two = wordTwo.split('').sort().join('');
//   if (one === two) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// };
const areAnagrams = (wordOne, wordTwo) => {
 let letters = ""
 if (wordOne.length == wordTwo.length) {
   for(let i = 0; i<wordOne.length; i++){

     if (wordTwo.includes(wordOne[i])) {
       letters+=wordOne[i]
     }
     else {
       return console.log('not anagrams')
     }

   }
   if (letters.length==wordTwo.length){
       return console.log('they are anagrams!')
     }
 }
 else {
   return console.log('not anagrams')
 }
};


areAnagrams('team', 'meat');