// Your JavaScript code for the third page goes here

function bookRoom() {
    // Get user input from the form
    var numPeople = parseInt(document.getElementById("numPeople").value);
    var roomType = document.getElementById("roomType").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var checkOutDate = document.getElementById("checkOutDate").value;

    // Perform validation on user input here

    // Calculate the number of days
    var numberOfDays = calculateNumberOfDays(checkInDate, checkOutDate);

    // Calculate the total cost based on room price and number of days
    var roomPricePerDay = getRoomPricePerDay(); // Implement logic to fetch room price
    var roomCost = roomPricePerDay * numberOfDays;

    // Display the booking summary
    var bookingSummary = "Room Type: " + roomType + "\n" +
                         "Check-in Date: " + checkInDate + "\n" +
                         "Check-out Date: " + checkOutDate + "\n" +
                         "Number of People: " + numPeople + "\n" +
                         "Total Cost: Rs. " + roomCost;

    alert("Booking Summary:\n" + bookingSummary);

    // You can implement further actions like sending booking details to a server here
}

// Function to calculate the number of days between check-in and check-out dates
function calculateNumberOfDays(checkInDate, checkOutDate) {
    // Implement the calculation logic here
    // Return the number of days as an integer
}

// Function to fetch the room price per day based on room type
function getRoomPricePerDay() {
    // Implement logic to fetch room price based on room type
    // Return the room price as a floating-point number
}
