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
   // Assignment code here
    var pChar = "";
    var pLength= "";

    // set all criteria's to false until user says true
    var lowercase = false,
        uppercase = false,
        numbers = false,
        spclChr= false;

    // ask users the length of password
    pLength = window.prompt(
        "Please enter the length of the password, must be between 8 and 128"
    );

    // verify pLength
    if (pLength >= 8 && pLength <= 128) {
        // prompt that asks user the way they would to have their passwords generated
        lowercase = window.confirm("Do you want lowercase?");
        uppercase = window.confirm("Do you want uppercase?");
        numbers = window.confirm("Do you want numbers?");
        spclChr = window.confirm("Do you want the special characters?");

        // confirm at least one character type has been choosen:
        if ( lowercase||uppercase || numbers || spclChr ) {
            return pChar = getPword(pLength, [lowercase, uppercase, numbers, spclChr]);

        } else {
            // if not,  user selects one
            alert("You need to pick at least one character type.");
        }
    } else {
        // let user know their selection is invalid
        alert("Invalid password length.");
    }
}

function getPword(pLength, pTYPE) {
    var generatedPassword = "";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const spclChr = "~`!@#$%^&*()_-+={[}]|:;<,>./?";

    for (var i = 0; i < pLength; i++) {
        var any;
        do {
            any = Math.floor(Math.random() * pTYPE.length);
        } while (!pTYPE[any]);
        // switch case for each varities
        switch (any) {
            case 1:
                generatedPassword +=
                    lowercase[Math.floor(Math.random() * lowercase.length)];
                break;

            case 2:
                generatedPassword +=
                    uppercase[Math.floor(Math.random() * uppercase.length)];
                break;

            case 3:
                generatedPassword +=
                    numbers[Math.floor(Math.random() * numbers.length)];
                break;

            case 4:
                generatedPassword +=
                    spclChr[Math.floor(Math.random() * spclChr.length)];
                break;
        }
    }
    return generatedPassword;
}