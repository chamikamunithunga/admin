// Selecting the DOM elements
const editButton = document.getElementById('edit-profile');
const saveButton = document.getElementById('save-profile');
const deleteButton = document.getElementById('delete-profile');
const profilePicture = document.getElementById('profile-picture');
const profileInput = document.getElementById('profile-input');
const inputs = document.querySelectorAll('.profile-details input');

// Enable edit mode
editButton.addEventListener('click', function() {
  inputs.forEach(input => {
    input.disabled = false;
  });
  editButton.style.display = 'none';
  saveButton.style.display = 'inline-block';

  // Enable profile picture click to upload
  profilePicture.addEventListener('click', function() {
    profileInput.click();
  });
});

// Handle profile photo change
profileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePicture.src = e.target.result; // Update profile picture
    };
    reader.readAsDataURL(file);
  }
});

// Save profile changes
saveButton.addEventListener('click', function() {
  inputs.forEach(input => {
    input.disabled = true;
  });
  editButton.style.display = 'inline-block';
  saveButton.style.display = 'none';
  alert('Profile saved successfully!');
});


