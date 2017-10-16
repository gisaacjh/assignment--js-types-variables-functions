/**
 * simpleSum()
 * ------------------------------------------------------
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 *
 **/

function simpleSum(a, b) {
	//YOUR CODE HERE
  //  note you will need to write the functions for
   //     remaining problems in the problem set

 var sum = a + b;
return sum
}

console.log(simpleSum(8, 11));
console.log(simpleSum(4, 101));
console.log(simpleSum(2, 2));

console.log("__________________________________________");


console.assert( simpleSum(8, 11) === 19 );
console.assert( simpleSum(4, 101) === 105 );
console.assert( simpleSum(2, 2) !== 5 );
