document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.getElementById("loginPopup");
    const loginMessage = document.getElementById("loginMessage");

    // Show login popup and alert user with demo credentials after 3 seconds
    setTimeout(() => {
        loginPopup.style.display = "block";
        alert("Username: admin\nPassword: 1234\n(This is a demo login, just enter these credentials.)");
    }, 3000);
});

// Function to validate login credentials
function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const clientName = document.getElementById("clientName").value.trim();
    const loginMessage = document.getElementById("loginMessage");

    // Display loading message
    loginMessage.innerHTML = "⏳ Logging in...";
    loginMessage.className = "loading";

    setTimeout(() => {
        if (username === "admin" && password === "1234") {
            // If login is successful, show success message with user's name
            loginMessage.innerHTML = `✅ Success! Welcome, ${clientName}!`;
            loginMessage.className = "success";

            // Store client name in localStorage for later use
            localStorage.setItem("clientName", clientName);

            // Redirect to booking page after 2 seconds
            setTimeout(() => {
                window.location.href = "booking.html";
            }, 2000);
        } else {
            // If login fails, show error message
            loginMessage.innerHTML = "❌ Oops! Seems like we have a little problem, please check your login details. 😢";
            loginMessage.className = "error";
        }
    }, 2000); // Simulate loading delay
}
