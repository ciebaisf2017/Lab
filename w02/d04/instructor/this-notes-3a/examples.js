// Jason Seminara
'use strict'
// 1
// What is the call-site of THIS?
function foo(a){
  console.log( this.a , a);
}
var a = 2;
foo(88); // <---call site
