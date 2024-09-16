document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const usernameOrEmail = document.getElementById('usernameOrEmail').value;
    const password = document.getElementById('password').value;

    // Example validation (replace with actual validation logic)
    if (usernameOrEmail === 'user@example.com' && password === 'password123') {
      // Redirect or perform a successful login action
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // Replace with the actual URL
    } else {
      errorMessage.style.display = 'block';
    }
  });
});
