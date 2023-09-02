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
      passwordContainer.innerHTML = "Generated Password: " + password.join("");
    } else {
      passwordContainer.innerHTML = "Invalid Input, Try Again";
    }
  }
  
const button = document.getElementById("myButton");
button.addEventListener("click", writePassword);
