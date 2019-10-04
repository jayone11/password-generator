var newPasswordBtn = document.getElementById("newPasswordBtn");
var copyPasswordBtn = document.getElementById("copyPasswordBtn");
var securePassword = document.getElementById("securePassword");

newPasswordBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    var passwordLength = document.getElementById("password-length").value;

    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+={}|[]\;':.,/?><`~";
    var password = "";

    // Loop through the values variable
    for (i = 0; i <= passwordLength; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    securePassword.textContent = "Your secure password is " + password;

})


// validate user input & ensure at least one character type is selected

// Password length must be between 8 - 128 characters
// Character type:
// Special, Numberic, Lowercase and Uppercase

// Generate new password

// Copy password to users' clipboard