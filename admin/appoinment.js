// script.js

function toggleClientDetails(appointmentId) {
    const clientInfoDiv = document.getElementById('client-info');
    const toggleButton = document.getElementById('toggle-details');
  
    // Fetch client details based on appointmentId
    const clientDetails = {
      '001': {
        id: '001',
        name: 'John Doe',
        email: 'john.doe@example.com',
        contactNo: '123-456-7890',
        freeDay: 'Monday'
      }
    };
  
    const client = clientDetails[appointmentId];
    if (client) {
      // Populate client details
      clientInfoDiv.innerHTML = `
        <p>Client ID: ${client.id}</p>
        <p>Name: ${client.name}</p>
        <p>Email: ${client.email}</p>
        <p>Contact No: ${client.contactNo}</p>
        <p>Free Day: ${client.freeDay}</p>
      `;
  
      // Toggle visibility
      if (clientInfoDiv.style.display === 'none') {
        clientInfoDiv.style.display = 'block';
        toggleButton.textContent = 'Hide Details';
      } else {
        clientInfoDiv.style.display = 'none';
        toggleButton.textContent = 'Show Details';
      }
    } else {
      clientInfoDiv.innerHTML = '<p>No client details found.</p>';
    }
  }
  
  // Example of calendar initialization (using a library like FullCalendar can be done here)
  // You can use a calendar library or API to handle this part
  document.getElementById('calendar').innerHTML = '<p>Calendar will be integrated here.</p>';


  


  
  // Mock data for payment slips
const paymentSlips = [
    {
      clientId: '001',
      amount: 7000,
      date: '2024-09-15',
      verified: false
    },
    {
      clientId: '002',
      amount: 12000,
      date: '2024-09-10',
      verified: true
    }
  ];
  
  // Function to load payment slips into the table
  function loadPaymentSlips() {
    const tableBody = document.getElementById('payment-slip-table');
    tableBody.innerHTML = ''; // Clear table
  
    paymentSlips.forEach((slip, index) => {
      const row = document.createElement('tr');
  
      // Client ID
      const clientIdCell = document.createElement('td');
      clientIdCell.textContent = slip.clientId;
      row.appendChild(clientIdCell);
  
      // Payment Amount
      const amountCell = document.createElement('td');
      amountCell.textContent = `Rs. ${slip.amount}`;
      row.appendChild(amountCell);
  
      // Payment Date
      const dateCell = document.createElement('td');
      dateCell.textContent = slip.date;
      row.appendChild(dateCell);
  
      // Payment Status
      const statusCell = document.createElement('td');
      statusCell.textContent = slip.verified ? 'Verified' : 'Unverified';
      row.appendChild(statusCell);

  
      // Actions
      const actionsCell = document.createElement('td');
      const verifyButton = document.createElement('button');
      verifyButton.textContent = slip.verified ? 'Unverify' : 'Verify';
      verifyButton.onclick = () => toggleVerify(index);
      actionsCell.appendChild(verifyButton);
      row.appendChild(actionsCell);
  
      // Add row to table
      tableBody.appendChild(row);
    });
  
  }
  
  // Function to toggle payment verification status
  function toggleVerify(index) {
    paymentSlips[index].verified = !paymentSlips[index].verified;
    loadPaymentSlips(); // Reload the table to reflect changes
  }
  
  // Initialize the table on page load
  document.addEventListener('DOMContentLoaded', loadPaymentSlips);







  // Initialize the calendar with Flatpickr
document.addEventListener('DOMContentLoaded', function () {
  var calendarInput = document.getElementById('calendar');
  
  // Flatpickr configuration to allow date and time selection
  flatpickr(calendarInput, {
    enableTime: true,  // Allow time selection
    dateFormat: "Y-m-d H:i", // Customize date and time format
    onChange: function (selectedDates, dateStr, instance) {
      console.log('Selected date and time:', dateStr);
      // Perform any action when the date is changed, if needed
    }
  });

  // Add an event listener to the button to mark a selected date
  document.getElementById('save-date-time').addEventListener('click', function () {
    var selectedDate = calendarInput.value;
    if (selectedDate) {
      alert('Marked: ' + selectedDate);
      // Perform marking functionality here, e.g., sending to backend or updating UI
    } else {
      alert('Please select a date and time first.');
    }
  });
});




document.addEventListener('DOMContentLoaded', function () {
    const calendarInput = document.getElementById('calendar');
    const reservedDatesList = document.getElementById('reserved-dates-list');
    const reservedDates = {};  // Store reserved dates
  
    // Initialize Flatpickr
    flatpickr(calendarInput, {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  
    // Handle Save/Update Date Button Click
    document.getElementById('save-date-time').addEventListener('click', function () {
      const selectedDate = calendarInput.value;
  
      if (!selectedDate) {
        alert('Please select a date and time first.');
        return;
      }
  
      if (reservedDates[selectedDate]) {
        // If the date is already reserved, update it
        alert('Date is already reserved. Updating the reservation.');
      } else {
        // Mark the date as reserved
        reservedDates[selectedDate] = true;
      }
      displayReservedDates();  // Update the list of reserved dates
    });
  
    // Function to display reserved dates
    function displayReservedDates() {
      reservedDatesList.innerHTML = '';  // Clear the list
      for (const date in reservedDates) {
        const li = document.createElement('li');
        li.textContent = date + ' (Reserved)';
        
        // Add "Remove" button for each reserved date
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
          delete reservedDates[date];  // Remove from reserved dates
          displayReservedDates();  // Refresh the list
        });
        li.appendChild(removeButton);
  
        reservedDatesList.appendChild(li);
      }
    }
  });

  

  











  
  

  