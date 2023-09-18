// Sample hotel data (replace with your actual data)
var hotels = [
    { name: "Taj Coromandel", city: "Chennai", roomPricePerDay: 5000.0, foodCostPerDay: 300.0 },
    { name: "Grand Hyatt", city: "Mumbai", roomPricePerDay: 4500.0, foodCostPerDay: 250.0 },
    { name: "Marriott", city: "Delhi", roomPricePerDay: 6000.0, foodCostPerDay: 350.0 },
    { name: "Ritz-Carlton", city: "Bangalore", roomPricePerDay: 8000.0, foodCostPerDay: 400.0 },
    { name: "ITC Grand Chola", city: "Chennai", roomPricePerDay: 4800.0, foodCostPerDay: 280.0 },
    { name: "The Oberoi", city: "Mumbai", roomPricePerDay: 5500.0, foodCostPerDay: 320.0 },
    { name: "Leela Palace", city: "Delhi", roomPricePerDay: 6200.0, foodCostPerDay: 380.0 },
    { name: "JW Marriott", city: "Bangalore", roomPricePerDay: 5400.0, foodCostPerDay: 350.0 },
    { name: "Radisson Blu", city: "Hyderabad", roomPricePerDay: 4600.0, foodCostPerDay: 270.0 },
    { name: "Taj Palace", city: "Mumbai", roomPricePerDay: 4900.0, foodCostPerDay: 310.0 },
];

function displayHotels() {
    var hotelList = document.querySelector(".hotel-list");

    // Clear existing content (if any)
    hotelList.innerHTML = "";

    // Loop through hotels and create a card for each
    for (var i = 0; i < hotels.length; i++) {
        var hotel = hotels[i];
        var card = createHotelCard(hotel, i);
        hotelList.appendChild(card);
    }
}

function createHotelCard(hotel, index) {
    var card = document.createElement("div");
    card.className = "hotel-card";

    // Create and append elements for hotel information
    var nameElement = document.createElement("h2");
    nameElement.textContent = hotel.name;

    var cityElement = document.createElement("p");
    cityElement.textContent = "City: " + hotel.city;

    var priceElement = document.createElement("p");
    priceElement.textContent = "Room Price per Day: Rs. " + hotel.roomPricePerDay;

    var foodCostElement = document.createElement("p");
    foodCostElement.textContent = "Food Cost per Day: Rs. " + hotel.foodCostPerDay;

    var bookButton = document.createElement("button");
    bookButton.textContent = "Book a Room";
    bookButton.className = "book-button"; // Add the "book-button" class
    bookButton.onclick = function() {
        bookRoom(index); // Call the bookRoom function with the selected hotel index
    };

    // Append elements to the card
    card.appendChild(nameElement);
    card.appendChild(cityElement);
    card.appendChild(priceElement);
    card.appendChild(foodCostElement);
    card.appendChild(bookButton);

    return card;
}

// Call the displayHotels function to populate the hotel list
displayHotels();
