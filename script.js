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
    // NEED A VARIABLE TO STORE THE PASSWORD AS IT IS BEING BUILT
    // NEED A VARIABLE FOR OUR MEGA - ARRAY OF CHARACTERS
    // NEED TO ASK THE USER HOW LONG THE VARIABLE SHOULD BE 
        //PROMPT()
        // NEED TO STORE IT IN A VARIABLE
    // CONFIRM WHETHER TO USE UPPERCASE,LOWERCASE, AND/OR SPECIAL CHARACTERS
    // NEED TO CHECK WHETHER THE USER SELECTED A VALID PASSWORD LENGTH AND AT LEAST 1 CHARACTER TYPE
        // IF NOT PROMT THEM AGAIN OR ALERT THAT THE INPUT WASN'T VALID
    //NEED TO MAKE SURE THAT AT LEAST 1 CHARACTER IS CHOSEN FROM EACH CHAR TYPE
        //WHEN THE USER SELECTS A CHARACTER TYPE, GENERATE A RANDOM CHAR FORM THAT SET AND CONCATENATE IT TO THE UNFINISHED PASSWORD
            // GENERATE A RANDOM CHAR: Math.floor(Math.random() * array.length)  gives me Index, NOT CHARACTER
            // CAN USE .charAt()
            //ONCE WE HAVE THE ACTUAL CHARACTER, CONCATENATE IT TO THE VARIABLE THAT IS STORING THE UNFINISHED PASSWORD
        // PUSH THE SET TO THE MEGA - ARRAY
    //ONCE WE HAVE OUR MEGA - ARRAY
        // FOR LOOP:
            // GENERATE A RANDOM CHAR: Math.floor(Math.random() * array.length)  gives me Index, NOT CHARACTER
            // CAN USE .charAt()
            //ONCE WE HAVE THE ACTUAL CHARACTER, CONCATENATE IT TO THE VARIABLE THAT IS STORING THE UNFINISHED PASSWORD
            // I = UNFINISHEDPASSWORD.LENGTH; I < PASSWORDLENGTH
        // RETURN UNFINISHED PASSWORD



    var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
    var specialCharacters = ["!@#$%^&*()_-+=[]{}|\:;/?,.<>`~"];

    var password = [];
    alert("Hello, answer a couple of questions to get started");
    var passwordLength = prompt("How long do you want your password?");

    var unfinishedPassword = [];
    
    fuunction isValid() {
        if (passwordLength >= 8 && passwordLength <= 128){
            var includeUppercase = confirm("Do you want the password to include uppercase letters?");
             if (includeUppercase === true) {var selectedUpperCase = prompt("Select at least 1 character that you want the password to include") unfinishedPassword.push(selectedUpperCase)};
                 else {alert("Invalid Input Try Again") return}
            var includeLowercase = confirm("Do you want the passsword to include lowercase letters?");
             if (includeLowerase === true) {var selectedLowerCase = prompt("Select at least 1 character that you want the password to include") unfinishedPassword.push(selectedLowerCase)};
                 else {alert("Invalid Input, Try Again") return}
            var includeSpecialChars = confirm("Do you want the password to include special characters?");
    ``       if (includeSpecialChars === true) {var selectedSpecialCharacter = prompt("Select at least 1 character that you want the password to include") unfinishedPassword.push(selectedSpecialCharacter)};
                else {alert("Invalid Input, Try Again") return}
        } else {
            alert("Invalid Input, Try Again");
            return;     
        }
    
    }
   































}

function writePassword() {
    var password = generatePassword();

}
generatePassword();