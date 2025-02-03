document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#email-table tbody');
    const refreshButton = document.getElementById('refresh-button');

    const fetchData = async () => {
        tableBody.innerHTML = '<tr><td colspan="8">Loading data...</td></tr>';
        try {
            const response = await fetch('/api/emails');
            if (!response.ok) {
                throw new Error(\`HTTP error! status: ${response.status}\`);
            }
            const emails = await response.json();
            populateTable(emails);
        } catch (error) {
            console.error('Fetch error:', error);
            tableBody.innerHTML = '<tr><td colspan="8">Error loading data.</td></tr>';
        }
    };

    const populateTable = (emails) => {
        tableBody.innerHTML = ''; // Clear loading message
        if (emails.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8">No data available.</td></tr>';
            return;
        }
        emails.forEach(email => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = email.id;
            row.insertCell().textContent = email.sender;
            row.insertCell().textContent = email.recipient;
            row.insertCell().textContent = email.subject;
            row.insertCell().textContent = email.date;
            row.insertCell().textContent = email.status;
            row.insertCell().textContent = email.priority;
            row.insertCell().textContent = email.size;
        });
    };

    refreshButton.addEventListener('click', fetchData);

    fetchData(); // Initial data load
});
