// public/scripts/main.js
document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello, World!');
});
" > public/scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
  // Fetch data and populate the dashboard
  fetchDataAndPopulateDashboard();

  // Set up event listeners or additional functionality as needed
});

function fetchDataAndPopulateDashboard() {
  // Example: Fetch data from an API
  // Replace this with your actual data source or API endpoint
  const data = [
    { name: 'Tenant 1', bills: ['Electricity', 'Water'] },
    { name: 'Tenant 2', bills: ['Internet', 'Gas'] },
    // Add more data as needed
  ];

  // Call a function to populate the dashboard with the fetched data
  populateDashboard(data);
}

function populateDashboard(data) {
  const dashboardElement = document.getElementById('dashboard');

  // Loop through the data and create HTML elements for each tenant
  data.forEach(item => {
    const tenantElement = document.createElement('div');
    tenantElement.classList.add('tenant');

    const tenantHeader = document.createElement('h2');
    tenantHeader.textContent = item.name;

    const tenantBills = document.createElement('p');
    tenantBills.textContent = `Bills: ${item.bills.join(', ')}`;

    const payButton = document.createElement('button');
    payButton.classList.add('pay-btn');
    payButton.textContent = 'Pay Bills';

    // Append the elements to the tenant div
    tenantElement.appendChild(tenantHeader);
    tenantElement.appendChild(tenantBills);
    tenantElement.appendChild(payButton);

    // Append the tenant div to the dashboard
    dashboardElement.appendChild(tenantElement);
  });
}
