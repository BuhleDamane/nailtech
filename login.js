document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.getElementById("loginPopup");
    const loginMessage = document.getElementById("loginMessage");

    // Show login popup after 3 seconds
    setTimeout(() => {
        loginPopup.style.display = "block";
        alert("Username: admin\nPassword: 1234\n(This is a demo login, just enter these credentials.)");
    }, 3000);
});

function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const clientName = document.getElementById("clientName").value.trim();
    const loginMessage = document.getElementById("loginMessage");

    // Show loading effect
    loginMessage.innerHTML = "⏳ Logging in...";
    loginMessage.className = "loading";

    setTimeout(() => {
        if (username === "admin" && password === "1234") {
            loginMessage.innerHTML = `✅ Success! Welcome, ${clientName}!`;
            loginMessage.className = "success";

            // Redirect to booking page after 2 seconds
            setTimeout(() => {
                window.location.href = "booking.html"; // Change to your actual booking page
            }, 2000);
        } else {
            loginMessage.innerHTML = "❌ Oops! Seems like we have a little problem, please check your login details. 😢";
            loginMessage.className = "error";
        }
    }, 2000); // Simulate a loading effect
}
