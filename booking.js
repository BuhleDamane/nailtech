document.addEventListener("DOMContentLoaded", function() {
    // Toggle Booking Details
    document.getElementById("bookingToggle").addEventListener("click", function() {
        document.getElementById("bookingDetails").classList.toggle("hidden");
    });

    // Toggle Settings
    document.getElementById("settingsToggle").addEventListener("click", function() {
        document.getElementById("settingsOptions").classList.toggle("hidden");
    });
});
