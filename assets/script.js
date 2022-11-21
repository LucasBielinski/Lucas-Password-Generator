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
    message = "must input number"
    alert(message);
    return
  }
  userInput = parseInt(userInput);
  if (userInput < 8 || userInput > 128) {
    alert("Min:8, Max: 128");
    return; 
  }

var useSpecialCharacters = confirm("would you like to use special characters?");
var useUppercaseLetter = confirm("would you like to use uppercase letters?");
var useLowercaseLetter = confirm("would you like to use lower case letters?");
var useNumbers = confirm("would you like to use numbers?");

 if (useSpecialCharacters) {
 empty = empty.concat(specialCharacters)
 }
 console.log(empty)
 if (useUppercaseLetter) {
  empty = empty.concat(uppercaseLetters)
 }
 console.log(empty)
 if (useLowercaseLetter) {
empty = empty.concat(lowercaseLetters)
 }
 console.log(empty)
 if (useNumbers) {
  empty = empty.concat(numbers)
 }
 console.log(empty)
if(empty.length === 0 ){
  alert ("You should have selected at least one data type")
  return
}
console.log("getting to my for loop")
var finalPassword = ""
for (let i = 0; i < userInput; i++) {
  finalPassword += empty[Math.floor(Math.random()*empty.length)]
}
return finalPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  if(!password || password == undefined){
    passwordText.value = "Unable to generate"
    return
  }
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function getName(){
//   var futureName = prompt("What's your name?")
//   console.log("Here is ", futureName)
//   ''
//   if(!futureName){
//     alert("You must enter a value!")
//     var tryAgain = confirm("Do you want to try again?")
//     if(!tryAgain){
//       return
//     }
//     return getName()
//   }
//   return futureName
  
// }
// //       1st call of getName()   2nd call of getName()
// //       futureName                futureName
// // "" || null || undefined     

// function nameApp(){
//   var name = getName() --> getName()
//   console.log(name)
//   if(!name){
//     alert("Thanks for using the program")
//     return
//   }
//   console.log("moving forward")
// }

// nameApp()
