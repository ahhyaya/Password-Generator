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
      var passwordLength = prompt("How many characters for your password? (between 8 - 128)");
          if (passwordLength > 128 || passwordLength <8) {
            alert ("Invalid Entry");
          } else {
            lowercase = confirm("including lowercase?");
            uppercase = confirm("including uppercase?");
            numeric = confirm("including numeric?");
            special = confirm("including special characters?");
            charSelect(lowercase, uppercase, numeric, special, passwordLength);
          }
    }



    function charSelect(lowercaseChoice, uppercaseChoice, numericChoice, specialChoice, passwordLength){    
          var choiceArr = [];
          if (lowercaseChoice) {
              choiceArr += choiceArr.concat(lowercaseChar);
          } else if (uppercaseChoice) {
              choiceArr += choiceArr.concat(uppercaseChar);
          } else if (numericChoice) {
              choiceArr += choiceArr.concat(numericChar);
          } else if (specialChoice) {
              choiceArr += choiceArr.concat(specialChar);
          } 
          console.log(choiceArr)
}
   
function generatePassword() {
    // randomPassword = (Math.floor(Math.random() * userChoice-1));
    // get the array of all user choice char 
     var finalArr = charSelect();
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
