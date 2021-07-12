// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // generatePassword() function is getting called here
    var password = generatePassword();

    // target html textare id 'password'
    var passwordText = document.querySelector("#password");

    // show generated password to user
    passwordText.value = password;
}

// Add event listener to the 'generate' button

generateBtn.addEventListener("click", writePassword);

// genratePassword () function starts here
function generatePassword() {
    var passwordCharacters = "";
    var passwordLength = "";

    // set all criteria's to false until user says true
    var lowerCaseOption = false,
        upperCaseOption = false,
        numericOption = false,
        specialCharactersOption = false;

    // ask users the length of password
    passwordLength = prompt(
        "Please enter the length of the password, must be between 8 and 128"
    );

    // verify password length
    if (passwordLength >= 8 && passwordLength <= 128) {
        // prompt that asks user the way they would to have their passwords generated
        lowerCaseOption = confirm("Do you want lowercase letters?");
        upperCaseOption = confirm("Do you want uppercase letters?");
        numericOption = confirm("Do you want numbers?");
        specialCharactersOption = confirm("Do you want special characters?");

        // confirm at least one chacter type has been chosen
        if (
            lowerCaseOption ||
            upperCaseOption ||
            numericOption ||
            specialCharactersOption
        ) {
            return passwordCharacters = buildPassword(passwordLength, [lowerCaseOption, upperCaseOption, numericOption, specialCharactersOption]);

        } else {
            // if not, let user know to select one
            alert("You need to pick at least one character type.");
        }
    } else {
        // let user know their selection is invalid
        alert("Invalid password length.");
    }
}

function buildPassword(pLength, pOptions) {
    var generatedPassword = "";
    const LOWERCASE_SET = "abcdefghijklmnopqrstuvwxyz";
    const UPPERCASE_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NUMERIC_SET = "0123456789";
    const SPECIALCHAR_SET = "~`!@#$%^&*()_-+={[}]|:;<,>./?";

    for (var i = 0; i < pLength; i++) {
        var randomSet;
        do {
            randomSet = Math.floor(Math.random() * pOptions.length);
        } while (!pOptions[randomSet]);
        // switch case for each varities
        switch (randomSet) {
            case 0:
                generatedPassword +=
                    LOWERCASE_SET[Math.floor(Math.random() * LOWERCASE_SET.length)];
                break;

            case 1:
                generatedPassword +=
                    UPPERCASE_SET[Math.floor(Math.random() * UPPERCASE_SET.length)];
                break;

            case 2:
                generatedPassword +=
                    NUMERIC_SET[Math.floor(Math.random() * NUMERIC_SET.length)];
                break;

            case 3:
                generatedPassword +=
                    SPECIALCHAR_SET[Math.floor(Math.random() * SPECIALCHAR_SET.length)];
                break;
        }
    }
    return generatedPassword;
}