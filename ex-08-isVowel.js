/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/
function isVowel(character) {
  var vowel = ['a', 'e', 'i', 'o', 'u']
  for (var i = 0; i < vowel.length; i++) {

    if (character === vowel[i] ) {
      return true
    } else {
      return false
    }
  }
}




console.log(isVowel('x'));
console.log(isVowel('e'));
console.log(isVowel('o'));
console.log(isVowel('n'));
console.log(isVowel('L'));
console.log(isVowel('A'));
console.log(isVowel('O'));
console.log(isVowel('y'));


 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
console.assert(isVowel('y') === false);
  //(of course, 'y' is a vowel!!)
