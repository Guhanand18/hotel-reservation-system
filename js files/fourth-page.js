// Your JavaScript code for the fourth page goes here

// Function to log out the user
function logout() {
    // Implement your logout logic here
    // You can redirect the user to the login page or perform any other necessary actions
    // Example: window.location.href = "login.html";
}

// Function to display booking details, including total cost
function displayBookingDetails() {
    // Retrieve booking details from localStorage or your data source
    var username = "[Username]"; // Replace with actual username
    var hotelName = "[Hotel Name]"; // Replace with actual hotel name
    var roomNumber = "[Room Number]"; // Replace with actual room number
    
    // Calculate the total cost (you may have to modify this logic based on your app)
    var roomPricePerDay = parseFloat(localStorage.getItem("roomPricePerDay"));
    var foodCostPerDay = parseFloat(localStorage.getItem("foodCostPerDay"));
    var numberOfDays = parseInt(localStorage.getItem("numberOfDays"));
    
    var totalCost = (roomPricePerDay + foodCostPerDay) * numberOfDays;

    // Update the HTML with booking details and total cost
    document.getElementById("username").textContent = "Username: " + username;
    document.getElementById("hotel-name").textContent = "Hotel Name: " + hotelName;
    document.getElementById("room-number").textContent = "Room Number: " + roomNumber;
    document.getElementById("total-cost").textContent = "Total Cost: Rs. " + totalCost.toFixed(2);
}

// Call the displayBookingDetails function when the page loads
window.onload = function() {
    displayBookingDetails();
};
