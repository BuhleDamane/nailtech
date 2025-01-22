document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.getElementById("loginPopup");
    const loginMessage = document.getElementById("loginMessage");

    // Show login popup and alert user with demo credentials after 3 seconds
    setTimeout(() => {
        loginPopup.style.display = "block";
        alert("Username: admin\nPassword: 1234\n(This is a demo login, just enter these credentials.)");
    }, 3000);
});

// Get the form element and the input fields
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const clientNameInput = document.getElementById('clientName');
const loginMessage = document.getElementById("loginMessage");

// Function to validate login credentials
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const clientName = clientNameInput.value.trim();

    // Capitalize the first letter of the client's name
    const capitalizedClientName = clientName.charAt(0).toUpperCase() + clientName.slice(1);

    // Display loading message
    loginMessage.innerHTML = "⏳ Logging in...";
    loginMessage.className = "loading";

    setTimeout(() => {
        // Check if the credentials are correct
        if (username === "admin" && password === "1234") {
            // If login is successful, show success message with user's capitalized name
            loginMessage.innerHTML = `✅ Success! Welcome, ${capitalizedClientName}!`;
            loginMessage.className = "success";

            // Store the capitalized client name in localStorage for later use
            localStorage.setItem("clientName", capitalizedClientName);

            // Redirect to the booking page after 2 seconds
            setTimeout(() => {
                window.location.href = "booking.html";
            }, 2000);
        } else {
            // If login fails, show error message
            loginMessage.innerHTML = "❌ Oops! Seems like we have a little problem, please check your login details. 😢";
            loginMessage.className = "error";
        }
    }, 2000); // Simulate loading delay
});
