let tempImage = ''; // Store temporary image for profile picture

// Trigger file upload
function triggerUpload() {
    document.getElementById('upload').click();
}

// Handle image upload and preview
document.getElementById('upload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            tempImage = e.target.result;
            document.getElementById('profileImage').src = tempImage;
            document.getElementById('savePhotoBtn').style.display = 'inline-block';
        };
        reader.readAsDataURL(file);
    }
});

// Save profile photo
function savePhoto() {
    document.getElementById('profileImage').src = tempImage;
    document.getElementById('savePhotoBtn').style.display = 'none';
    localStorage.setItem('profileImage', tempImage);
    alert('Profile photo updated successfully!');
}

// Enable editing of user information
function editInfo() {
    document.getElementById('userName').disabled = false;
    document.getElementById('userEmail').disabled = false;
    document.getElementById('userMobile').disabled = false;

    document.getElementById('editInfoBtn').style.display = 'none';
    document.getElementById('saveInfoBtn').style.display = 'inline-block';
}

// Save user information
function saveInfo() {
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userMobile = document.getElementById('userMobile').value;

    // Optionally, save to local storage for persistence (or use server-side storage)
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userMobile', userMobile);

    document.getElementById('userName').disabled = true;
    document.getElementById('userEmail').disabled = true;
    document.getElementById('userMobile').disabled = true;

    document.getElementById('saveInfoBtn').style.display = 'none';
    document.getElementById('editInfoBtn').style.display = 'inline-block';

    alert('Profile information updated successfully!');
}

// Load saved data from local storage (if available)
window.onload = function() {
    if (localStorage.getItem('profileImage')) {
        document.getElementById('profileImage').src = localStorage.getItem('profileImage');
    }
    if (localStorage.getItem('userName')) {
        document.getElementById('userName').value = localStorage.getItem('userName');
    }
    if (localStorage.getItem('userEmail')) {
        document.getElementById('userEmail').value = localStorage.getItem('userEmail');
    }
    if (localStorage.getItem('userMobile')) {
        document.getElementById('userMobile').value = localStorage.getItem('userMobile');
    }
}
