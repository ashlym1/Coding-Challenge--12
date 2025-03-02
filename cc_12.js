// Task 1: Business Dashboard- DOM element selection 
const dashboardById = document.getElementById("dashboard");    // selecting by ID 
const dashboardByQuery = document.querySelector("#dashboard"); // selecting using the querySelector 

//  Created a div to act as the metric card element 
const revenueCard = document.createElement("div");

// Set class and Attributes for identification 
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Adding a title and placeholder inside the revenue card 
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
`;
// adding  the revenueCard that was created into the dashboard section of the page
dashboardById.appendChild(revenueCard);

// Task 2: Updating Dashboard Metrick 
 const metricCards = document.querySelectorAll( ".metric-cad"); // selecting all the metric cards 
 const metricCardArray={...metricCard};
 metricCardArray.forEach(card => {
        const title = card.querySelector("h3");
        title.innerText += " - Updated";
        card.style.backgroundColor = "mintcream";
  });

  // Task 3: Dynamic Inventory Management - Adding and Removing Items 
    // Adding  a product to the inventory list
function addInventoryItem(productName) {
    const inventoryList = document.getElementById("inventoryList");  // selecting  the inventory list
    const productItem = document.createElement("li");  // created a  list item
    productItem.setAttribute("class", "product-item");  // added a  class for styling
    productItem.innerText = productName;  // set product name as text

    // Add click event to remove the item when clicked
    productItem.addEventListener("click", () => {
        removeProductItem(productItem);  // call removes function when clicked
    });

    inventoryList.appendChild(productItem);  // added item to the list
};

// removing the  product item from the list
function removeProductItem(item) {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.removeChild(item);  // removes the clicked item
};

// Test case: adding products 
addInventoryItem("Ceremonial Matcha");
addInventoryItem("Matcha Whisk Set");

// Test case 2:  button listener 
document.getElementById("addProductButton").addEventListener("click", () => {
    addInventoryItem("New Product");  // 
});

// Task 4 - business customer section
// Selecting the customer section 
const customerSection = document.getElementById("customerSection");
customerSection.addEventListener("click", () => {
    console.log("This item has been selected (parent container)");
}); // Added an  event listener to the parent container

// Selecting all customer cards
const customerCards = document.querySelectorAll(".customer-card");

// Added click events to each customer card
customerCards.forEach((card) => {
    card.addEventListener("click", (event) => {
        console.log("This card has been selected");  //  logs when a card is clicked
        event.stopPropagation();  // Stops the parent container's click event from going off 
    });
});




