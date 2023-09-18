function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace these hardcoded values with the actual username and password pairs
    var validUsers = {
        "Harish": "FlowerGodzilla",
        "Amrish": "Extermina",
        "Jayanth": "Jayanths20"
        "Aadhithya: "Aadhi250904"
    };

    if (validUsers[username] === password) {
        alert("Login successful!");
        // Redirect the user to another page or perform other actions
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
