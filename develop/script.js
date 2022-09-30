// Assignment Code
var generateBtn = document.querySelector("#generate");
    // generateBtn.onclick = generatePassword;
    // console.log(generateBtn)

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
    
    
    function passwordCondition() {
      var choiceArr = [];
      var passwordLength = prompt("How many characters for your password? (between 8 - 128)");
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
    // randomPassword = (Math.floor(Math.random() * userChoice-1));
    // get the array of all user choice char 
    
    // write a loop to pick a char with a random index from the user choice arr.
    // push each char to the final array
    for (var i = 0; i < finalArr.length; i++) {
        var a = choiceArr[(Math.floor(Math.random() * finalArr.length-1))];
        randomPassword = randomPassword.push(a);
    }
    // display the password from the array, inside of the div
    console.log(randomPassword)
    var randomPassword = document.querySelector("#password");
}

// Write password to the #password input
function writePassword() {

  passwordCondition();
  // var password = generatePassword();

  
  // passwordText.value = randomPassword;

  // entryValidation();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
