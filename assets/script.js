// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var specialCharacters = [ "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "/", "}", "~"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var empty = [];
  var userInput = prompt("How many characters would you like your password to be. Minimum 8, Maximum 128","");
  if (!userInput)
  {
    return;
  }
  userInput = parseInt(userInput);
  if (userInput < 8 || userInput > 128) {
    return; 
  }

var useSpecialCharacters = confirm("would you like to use special characters?");
var useUppercaseLetter = confirm("would you like to use uppercase letters?");
var useLowercaseLetter = confirm("would you like to use lower case letters?");
var useNumbers = confirm("would you like to use numbers?");

 if (useSpecialCharacters) {
 empty.concat(specialCharacters)
 }
 if (useUppercaseLetter) {
empty.concat(uppercaseLetters)
 }
 if (useLowercaseLetter) {
empty.concat(lowercaseLetters)
 }
 if (useNumbers) {
  empty.concat(numbers)
 }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
