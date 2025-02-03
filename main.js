import './style.css';

const API_ENDPOINT = 'https://api.example.com/emails'; // Replace with your API endpoint

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('#email-table tbody');
  const refreshButton = document.querySelector('#refresh-button');

  const fetchData = async () => {
    tableBody.innerHTML = '<tr><td colspan="8">Loading data...</td></tr>'; // Show loading state

    try {
      const response = await fetch(API_ENDPOINT);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: ${response.status}\`);
      }
      const emails = await response.json();
      populateTable(emails);
    } catch (error) {
      console.error('Fetch error:', error);
      tableBody.innerHTML = '<tr><td colspan="8">Error loading data.</td></tr>'; // Show error state
    }
  };

  const populateTable = (emails) => {
    tableBody.innerHTML = ''; // Clear loading state or previous data
    if (emails && emails.length > 0) {
      emails.forEach(email => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = email.id;
        row.insertCell().textContent = email.subject;
        row.insertCell().textContent = email.sender;
        row.insertCell().textContent = email.recipient;
        row.insertCell().textContent = email.date;
        row.insertCell().textContent = email.status;
        row.insertCell().textContent = email.priority;
        row.insertCell().textContent = 'View | Edit | Delete'; // Example actions
      });
    } else {
      tableBody.innerHTML = '<tr><td colspan="8">No data available.</td></tr>'; // Show no data message
    }
  };

  refreshButton.addEventListener('click', fetchData);

  // Initial data fetch on page load
  fetchData();
});
