document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("bookingToggle").addEventListener("click", function() {
        document.getElementById("bookingDetails").classList.toggle("hidden");
    });

   
    document.getElementById("settingsToggle").addEventListener("click", function() {
        document.getElementById("settingsOptions").classList.toggle("hidden");
    });
});
