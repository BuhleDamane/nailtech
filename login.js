const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const clientNameInput = document.getElementById('clientName');
const loginMessage = document.getElementById("loginMessage");

setTimeout(() => {
    loginPopup.style.display = "block";
    alert("Username: admin\nPassword: 1234\n(This is a demo login, just enter these credentials.)");
}, 3000);
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const clientName = clientNameInput.value.trim();

    const capitalizedClientName = clientName.charAt(0).toUpperCase() + clientName.slice(1);

    loginMessage.innerHTML = "⏳ Logging in...";
    loginMessage.className = "loading";

    setTimeout(() => {
        // Check credentials
        if (username === "admin" && password === "1234") {
            loginMessage.innerHTML = `✅ Success! Welcome, ${capitalizedClientName}!`;
            loginMessage.className = "success";

            // Save client name in localStorage
            localStorage.setItem("clientName", capitalizedClientName);

            // Redirect to booking page after 2 seconds
            setTimeout(() => {
                window.location.href = "booking.html"; // Ensure booking.html exists
            }, 2000);
        } else {
            loginMessage.innerHTML = "❌ Oops! Please check your login details.";
            loginMessage.className = "error";
        }
    }, 2000);
});
