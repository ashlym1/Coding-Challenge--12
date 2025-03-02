// Task 1: Business Dashboard- DOM element selection 
const dashboardById = document.getElementById("dashboard");    // selecting by ID 
const dashboardByQuery = document.querySelector("#dashboard"); // selecting using the querySelector 

//  Created a div to act as the metric card element using createElement 
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
