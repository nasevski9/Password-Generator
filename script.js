// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

function generatePassword() {

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var specialCharacters = "!@#$%^&*()_-+=[]{}|\\:;/?,.<>`~";
  
    var passwordLength = parseInt(prompt("Enter the password length (between 8 and 128):"));
  
    if (passwordLength >= 8 && passwordLength <= 128) {
      var includeUppercase = confirm("Do you want the password to include uppercase letters?");
      var includeLowerCase = confirm("Do you want the password to include lowercase letters?");
      var includeSpecialChars = confirm("Do you want the password to include special characters?");
  
      var characterSet = "";
      if (includeUppercase) {
        characterSet += upperCase;
      }
      if (includeLowerCase) {
        characterSet += lowerCase;
      }
      if (includeSpecialChars) {
        characterSet += specialCharacters;
      }
  
      if (characterSet.length > 0) {
        var unfinishedPassword = [];
        for (let i = 0; i < passwordLength; i++) {
          var randomChar = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
          unfinishedPassword.push(randomChar);
        }
        return unfinishedPassword;
      } else {
        alert("Please select at least one character type. Try Again");
        return [];
      }
    } else {
      alert("Invalid password length. Try Again");
      return [];
    }
   return unfinishedPassword;
};

function writePassword() {
    var password = generatePassword();
    var passwordContainer = document.getElementById("passwordContainer");
  
    if (password.length > 0) {
      // Convert the array to a string and display it in the div
      passwordContainer.innerHTML = "Generated Password: " + password.join("");
    } else {
      passwordContainer.innerHTML = "Invalid Input, Try Again";
    }
  }
  
const button = document.getElementById("myButton");
button.addEventListener("click", writePassword);