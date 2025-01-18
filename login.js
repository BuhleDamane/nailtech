document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.getElementById("loginPopup");
    const loginMessage = document.getElementById("loginMessage");

   
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

    loginMessage.innerHTML = "⏳ Logging in...";
    loginMessage.className = "loading";

    setTimeout(() => {
        if (username === "admin" && password === "1234") {
            loginMessage.innerHTML = `✅ Success! Welcome, ${clientName}!`;
            loginMessage.className = "success";

            
            setTimeout(() => {
                window.location.href = "booking.html";
            }, 2000);
        } else {
            loginMessage.innerHTML = "❌ Oops! Seems like we have a little problem, please check your login details. 😢";
            loginMessage.className = "error";
        }
    }, 2000); 
}
