/**
 * getSeasonForMonth()
 * ------------------------------------------------------
 * Write a function called getSeasonForMonth() that accepts
 * an integer as an argument and returns the season of year.
 *   e.g. getSeasonForMonth(6) => 'summer'
 *
 * The function should be built to ONLY accept integer values
 * of 1-12.
 *
 * It the user should also return a boolean value of `false`
 * if the function is given a number less than 1, greater than 12,
 * or a non-number data type.
 *
 **/
function getSeasonForMonth(integer) {
  var spring = [3,4,5]
  var summer = [6,7,8]
  var fall = [9,10,11]
  var winter = [12,1,2,]
  for (var i = 0; i < spring.length; i++) {
    if (integer === spring[i]) {
      return "spring"
    } else if (integer<0 && integer>12 && integer !== typeof number) {
        return false
    }
  }
  for (var j = 0; j < summer.length; j++) {
    if (integer === summer[j]) {
      return "summer"
    } else if (integer<0 && integer>12 && integer !== typeof number) {
        return false
    }
  }
  for (var k = 0; k < fall.length; k++) {
    if (integer === fall[k]) {
      return "fall"
    } else if (integer<0 && integer>12 && integer !== typeof number) {
        return false
    }
  }
  for (var l = 0; l < winter.length; l++) {
    if (integer === winter[l]) {
      return "winter"
    } else if (integer<0 && integer>12 && integer !== typeof number) {
        return false
    }
  }
}

console.log( getSeasonForMonth(1) === "winter");
console.log( getSeasonForMonth(3) === "spring");
console.log( getSeasonForMonth(5) === "spring");
console.log( getSeasonForMonth(7) === "summer");
console.log( getSeasonForMonth(9) === "fall");
console.log( getSeasonForMonth(12) === "winter");

console.log( getSeasonForMonth(13) === false);
console.log( getSeasonForMonth(32) === false);
console.log( getSeasonForMonth(0) === false);
console.log( getSeasonForMonth() === false);
console.log( getSeasonForMonth("June") === false);


//*-*~*~*~*~*~ Don't   Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth() === false)
console.assert( getSeasonForMonth("June") === false)
