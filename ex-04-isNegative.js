/**
 * isNegative()
 * ------------------------------------------------------
 * Write a function called isNegative that returns true/false for
 * whether a number is negative or not.
 *
 **/
 function isNegative(num) {

   if (num < 0) {
     return true
   } else {
     return false
  }
}

console.log(isNegative(100));
console.log(isNegative(14));
console.log(isNegative(2));
console.log(isNegative(0));
console.log(isNegative(-1));
console.log(isNegative(-64));
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( isNegative(100) === false )
console.assert( isNegative(14) === false )
console.assert( isNegative(2) === false )
console.assert( isNegative(0) === false )
console.assert( isNegative(-1) === true )
console.assert( isNegative(-64) === true )
