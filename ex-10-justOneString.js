/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/
function justOneString(string, number) {
  if (typeof string === "string" && typeof number === "number") {
    return true
  } else {
    return false
  }
}



console.log(justOneString('a', 5) === true);
console.log(justOneString(6, 'dotron') === true);
console.log(justOneString('peanut', 'butter') === false);
console.log(justOneString(8, true) === false);


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
