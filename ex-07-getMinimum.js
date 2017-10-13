/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/
 function getMinimum(numbers) {
   var numbers = 1, 2, 4, 0
   var minimum = Math.min(1, 2, 4, 0)
console.log(minimum)
 }


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*



console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(4,8,4,20) === 4 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,4,-5) === -11 )
