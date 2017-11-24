# counter

A Node.js package that checks whether a given string is null or empty. A basic package for an npm publish tutorial.

## Usage

First, install the package using npm:

    npm install counter --save

Then, require the package and use it like so:

    var myMethods = require('./index');

	var method = myMethods.counter;
	var newmethod = myMethods.newcounter;

	console.log(method(['Baskar', 'Arun', 'Hema']));
	console.log(newmethod(['Baskar', 'Arun', 'Hema', 'Rithi', 'Shruthi']));
	
	//Following is the output
	There are 3 elements in this array
	There are 5 new elements in this array

## License

Apache 2.0