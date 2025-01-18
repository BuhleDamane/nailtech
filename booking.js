document.addEventListener("DOMContentLoaded", function () {
    // Animated welcome message effect
    let message = "Good day Buhle, how may we take your booking today? 😊";
    let index = 0;
    let welcomeMessage = document.getElementById("welcome-message");

    function typeMessage() {
        if (index < message.length) {
            welcomeMessage.textContent += message[index];
            index++;
            setTimeout(typeMessage, 50);
        }
    }

    welcomeMessage.textContent = ""; // Clear existing text
    typeMessage(); // Start animation
});

function confirmBooking() {
    let paymentStatus = document.getElementById("payment-status");
    paymentStatus.innerHTML = "⏳ Processing Payment...";
    paymentStatus.style.color = "blue";

    setTimeout(() => {
        paymentStatus.innerHTML = "✅ Payment Successful!";
        paymentStatus.style.color = "green";

        // Save booking details
        let nailDesign = document.getElementById("nail-design").value;
        let bookingTime = document.getElementById("booking-time").value;
        let paymentMethod = document.getElementById("payment-method").value;

        let bookingDetails = `💅 Nail Design: ${nailDesign} <br> ⏰ Time: ${bookingTime} <br> 💳 Payment: ${paymentMethod}`;
        localStorage.setItem("lastBooking", bookingDetails);

        // Show in Previous Booking Section
        setTimeout(() => {
            let sidebar = document.querySelector(".sidebar nav ul");
            let newBooking = document.createElement("li");
            newBooking.innerHTML = `📌 ${nailDesign} at ${bookingTime}`;
            sidebar.appendChild(newBooking);
        }, 1000);
    }, 5000); // Simulate payment delay
}
