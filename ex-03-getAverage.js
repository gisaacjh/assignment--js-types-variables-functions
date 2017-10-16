/**
 * getAverage()
 * ------------------------------------------------------
 * Write a function called getAverage that takes two numbers
 * as inputs and returns the average of the two. To avoid
 * repeating yourself, use your sum function inside
 * of your average function.
 *
 **/

function getAverage(a, b) {
 var average = (a + b) / 2
 return average
}

console.log(getAverage(5, 15));
console.log(getAverage(18, 22));
console.log(getAverage(100, 100));
console.log(getAverage(-12, 12));

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*
console.assert( getAverage(5,15) === 10 )
console.assert( getAverage(18,22) === 20 )
console.assert( getAverage(100,200) === 150 )
console.assert( getAverage(-12,12) === 0 )
