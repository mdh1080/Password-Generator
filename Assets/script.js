// Array of special characters to be included in password
// var specialCharacters = [
//   '@',
//   '%',
//   '+',
//   '\\',
//   '/',
//   "'",
//   '!',
//   '#',
//   '$',
//   '^',
//   '?',
//   ':',
//   ',',
//   ')',
//   '(',
//   '}',
//   '{',
//   ']',
//   '[',
//   '~',
//   '-',
//   '_',
//   '.'
// ];
// Array of numeric characters to be included in password
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
// var lowerCaseCharacters = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z',
// ];

// Array of uppercase characters to be included in password
// var upperCaseCharacters = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z',
// ];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPasswordOptions() {
  // 3)
  // Variable to store length of password from user input
  

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  // Object to store user input
  var passwordOptions = {
    length: length,
    specialCharacters,
    numericCharacters,
    lowerCaseCharacters,
    upperCaseCharacters,
    //more options here
  };

  return passwordOptions
}

// function randomizedCharacters(options) {
//   console.log("random", options)
// }

function generatePassword() {
  var lowerCaseCharacters = "qwertyuiopasdfghjklzxcvbnm"
  var upperCaseCharacters = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var numericCharacters = "1234567890"
  var specialCharacters = "!@#$%^&*()_+-="
  
  var possibleChars = "";
  
  var length = prompt('How many characters would you like your password to contain?');
  
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  
  
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    
  }
  
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    
  }
  // Variable to store boolean regarding the inclusion of special characters
  var specialChars = confirm(
    'Click OK to confirm including special characters.'
    );
    
    // Variable to store boolean regarding the inclusion of numeric characters
    var numericChars = confirm(
      'Click OK to confirm including numerical characters.'
      );
      
      // Variable to store boolean regarding the inclusion of lowercase characters
      var lowerCharacters = confirm(
        'Click OK to confirm including lower case characters.'
        );
        // Variable to store boolean regarding the inclusion of uppercase characters
        var upperCharacters = confirm(
          'Click OK to confirm including upper case characters.'
          );
          
          if (specialChars == true) {
            possibleChars += specialCharacters
          }
          
          if (numericChars == true) {
            possibleChars += numericCharacters
          }
          
          if (lowerCharacters == true) {
            possibleChars += lowerCaseCharacters
          }
          
          if (upperCharacters == true) {
            possibleChars += upperCaseCharacters
          }
          
          
          
          
          
          var generatedPassword = "";
          
          for (var i = 0; i < length; i++) {
            generatedPassword += possibleChars.charAt(Math.floor(Math.random()*possibleChars.length))
          }
          return generatedPassword
          
          






  // 2)
 // var options = getPasswordOptions();


 // var randomChars = getRandom(options);

  

  //Code Your logic Below
  // return "123456789"

  // Write password to the #password input

}
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)

