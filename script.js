var newPasswordBtn = document.getElementById("newPasswordBtn");
var copyPasswordBtn = document.getElementById("copyPasswordBtn");
var securePassword = document.getElementById("securePassword");

newPasswordBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Get password length
    var passwordLength = document.getElementById("password-length").value;
    // Check if user selected at least one option
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Value must be between 8 - 128")
        return;
    }
    // Characters to be used in the password
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+={}|[]\;':.,/?><`~";
    // Set password variable to empty
    var password = "";
    // Loop through the values variable and set random characters for the length of the password
    for (i = 0; i <= passwordLength; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
    // Display new randomly generated password 
    securePassword.textContent = "Your secure password is: " + password;

})



copyPasswordBtn.addEventListener("click", function(e) {
    e.preventDefault();

    document.execCommand("copy", false,
    document.getElementById("securePassword").parseFromString.select());
    debugger;
});




// validate user input & ensure at least one character type is selected

// Password length must be between 8 - 128 characters
// Character type:
// Special, Numberic, Lowercase and Uppercase

// Generate new password

// Copy password to users' clipboard