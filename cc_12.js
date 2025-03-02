// Task 1: Business Dashboard- DOM element selection 
const dashboardById = document.getElementById("dashboard");    // selecting by ID 
const dashboardByQuery = document.querySelector("#dashboard"); // selecting using the querySelector 
   // creating  a metric card
function createMetricCard(id, title) {
    const card = document.createElement("div");
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", id);
    card.innerHTML = `
        <h3>${title}</h3>
        <p>$0</p>
    `;
    return card;
}

// Added 3 metric cards
dashboardById.appendChild(createMetricCard("revenueCard", "Revenue"));
dashboardById.appendChild(createMetricCard("profitCard", "Profit"));
dashboardById.appendChild(createMetricCard("expensesCard", "Expenses"));

// Task 2: Updating Dashboard Metrick 
const metricCards = document.querySelectorAll(".metric-card"); // selected all metric cards
const metricCardArray = [...metricCards];  // Convert List to an Array
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

// adding  the product button  
document.getElementById("addProductButton").addEventListener("click", () => {
    addInventoryItem("Miffy Exclusive: Matcha Whisk Set");  // 
});

// Task 4 - business customer section - event bubbling 
// Selecting the customer section 
const customerSection = document.getElementById("customerSection");

// Added event listener to the parent container
customerSection.addEventListener("click", () => {
    console.log("This item has been selected");
});

// Create customer cards dynamically
const customers = ["Customer 1", "Customer 2"];

customers.forEach((name) => {
    const customerCard = document.createElement("div");
    customerCard.classList.add("customer-card");
    customerCard.innerText = name;

    // Add click event to each customer card
    customerCard.addEventListener("click", (event) => {
        console.log(name + " has been selected");
        event.stopPropagation();  // Prevents parent click event from firing
    });

    customerSection.appendChild(customerCard);  // Add to the customer section
});






