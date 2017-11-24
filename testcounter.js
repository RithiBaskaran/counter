//var count = require('./counter');
//console.log(count(['Baskar', 'Arun', 'Hema']));

var myMethods = require('./index');

/*var method = myMethods.countermethod;
var newmethod = myMethods.newcountermethod;*/

var method = myMethods.counter;
var newmethod = myMethods.newcounter;

console.log(method(['Baskar', 'Arun', 'Hema']));
console.log(newmethod(['Baskar', 'Arun', 'Hema', 'Rithi', 'Shruthi']));
