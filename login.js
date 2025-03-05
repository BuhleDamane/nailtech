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
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const clientName = clientNameInput.value.trim();

    const capitalizedClientName = clientName.charAt(0).toUpperCase() + clientName.slice(1);

    loginMessage.innerHTML = "⏳ Logging in...";
    loginMessage.className = "loading";

    setTimeout(() => {
        
        if (username === "admin" && password === "1234") {
            loginMessage.innerHTML = `✅ Success! Welcome, ${capitalizedClientName}!`;
            loginMessage.className = "success";

          
            localStorage.setItem("clientName", capitalizedClientName);

           
            setTimeout(() => {
                window.location.href = "booking.html"; 
            }, 2000);
        } else {
            loginMessage.innerHTML = "❌ Oops! Please check your login details.";
            loginMessage.className = "error";
        }
    }, 2000);
});
