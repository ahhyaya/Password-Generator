// Assignment Code
var generateBtn = document.querySelector("#generate");

    var userChoice = [];
    var randomPassword = "";
    var lowercase = "";
    var uppercase ="";
    var numeric = "";
    var special = "";
    var lowercaseChar = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseChar = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numericChar = ["0", "1","2","3","4","5","6","7","8","9"];
    var specialChar = [" ", "\"","!","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
    var passwordLength = 0;
    var choiceArr = [];

    function passwordCondition() {
      
      passwordLength = prompt("How many characters for your password? (between 8 - 128)");
      if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Invalid Entry!");
        return false;
      }
      if (confirm("including lowercase?")) {
        choiceArr = choiceArr.concat(lowercaseChar);
      } 
      if (confirm("including uppercase?")) {
        choiceArr = choiceArr.concat(uppercaseChar);
      } 
      if (confirm("including numeric?")) {
        choiceArr = choiceArr.concat(numericChar);
      } 
      if (confirm("including Special Characters?")) {
        choiceArr = choiceArr.concat(specialChar);
      }
      return choiceArr;
    }

function generatePassword() {
    // get the array of all user choice char 
    // var finalArr = generatePassword(choiceArr);
    // write a loop to pick a char with a random index from the user choice arr.
    // push each char to the final array
    for (var i = 0; i < passwordLength; i++) {
        var a = Math.floor(Math.random() * choiceArr.length);
        randomPassword = randomPassword + choiceArr[a];
    }
    return randomPassword;
}

// Write password to the #password input
function writePassword() {

  passwordCondition();

  var randomPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
