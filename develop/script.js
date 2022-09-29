// Assignment Code
var generateBtn = document.querySelector("#generate");
    generateBtn.onclick = generatePassword;

var lowercaseChar = ["a","b","c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["0", "1","2","3","4","5","6","7","8","9"];
var specialChar = [" ", "\"","!","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

var chars = [];
var randomPassword = "";

function generatePassword() {
    var passwordLengthDefine = prompt("How many characters for your password? (between 8 - 128)");
    var passwordLength = document.write(passwordLengthDefine.length);
    var lowercase = confirm("including lowercase?");
    var uppercase = confirm("including uppercase?");
    var numeric = confirm("including numeric?");
    var special = confirm("including special characters?");

    
    while (passwordLength <128 || passwordLength >8) {
      function charSelect(){
       if (lowercase === true && uppercase === false && numeric === false && special === false) {
          chars = chars.concat(lowercaseChar);
        } else if (lowercase === true && uppercase === true && numeric === false && special === false) {
          chars = chars.concat(lowercaseChar).concat(uppercase);
        } else if (lowercase === true && uppercase === true && numeric === true && special === false) {
          chars = chars.concat(lowercaseChar).concat(uppercaseChar).concat(numericChar);
        } else if (lowercase === true && uppercase === true && numeric === true && special === true) {
          chars = chars.concat(lowercaseChar).concat(uppercaseChar).concat(numericChar).concat(specialChar);

        } else if (lowercase === false && uppercase === true && numeric === false && special === false) {
          chars = chars.concat(uppercaseChar);
        } else if (lowercase === false && uppercase === true && numeric === true && special === false) {
          chars = chars.concat(uppercaseChar).concat(numericChar);
        } else if (lowercase === false && uppercase === true && numeric === true && special === true) {
          chars = chars.concat(specialChar).concat(uppercaseChar).concat(numericChar);

        } else if (lowercase === false && uppercase === false && numeric === true && special === false) {
          chars = chars.concat(numericChar);
        } else if (lowercase === false && uppercase === false && numeric === true && special === true) {
          chars = chars.concat(specialChar).concat(numericChar);

        } else if (lowercase === false && uppercase === false && numeric === false && special === true) {
          chars = chars.concat(specialChar);
        } 
        return chars;
        
      } 
    }
    
       while (passwordLength > 128 || passwordLength < 8) {
          if(confirm("Invalid entry, try again?") === ture) {
            charSelect();
          }
          else {
            break;
          }
        }
        randomPassword = chars.charAt(Math.floor(Math.random() * passwordLength));   
} 


    // var tempPassword = [];
    // if (passwordLength>128 || passwordLength <8){
    //   confirm("this is a vilid entry");
    // } else {
    // if (lowercase === true) {
    //   tempPassword = tempPassword.concat(lowercaseChar);
    // } else if (uppercase === true) {
    //   tempPassword = tempPassword.concat(uppercaseChar);
    // } else if (numeric === true) {
    //   tempPassword = tempPassword.concat(numericChar);
    // } else if (special === true) {
    //   tempPassword = tempPassword.concat(specialChar);
    // }
    // return tempPassword;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
