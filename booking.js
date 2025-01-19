document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded triggered");

    // Toggle visibility for booking and settings sections
    document.getElementById("bookingToggle").addEventListener("click", function() {
        document.getElementById("bookingDetails").classList.toggle("hidden");
    });

    document.getElementById("settingsToggle").addEventListener("click", function() {
        document.getElementById("settingsOptions").classList.toggle("hidden");
    });

    // Typing welcome message
    const welcomeMessagePart1 = document.getElementById("welcomeMessagePart1");
    const welcomeMessagePart2 = document.getElementById("welcomeMessagePart2");
    const username = localStorage.getItem("username") || "User";
    
    // Split the message into two parts
    const firstMessage = `Good day, ${username}!`;
    const secondMessage = `How may we take your booking today? 😊`;

    let index1 = 0;
    let index2 = 0;
    const typingSound = document.getElementById("typingSound");

    // Function to type out a message
    function typeMessage(message, element, index, callback) {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
            typingSound.play();  // Play typing sound
            setTimeout(() => typeMessage(message, element, index, callback), 50); // Adjust speed if needed
        } else {
            element.style.borderRight = "none"; // Remove cursor effect
            callback();  // Callback to trigger next action
        }
    }

    // Prevent multiple typing animations
    if (!welcomeMessagePart1.hasAttribute('data-typing') && !welcomeMessagePart2.hasAttribute('data-typing')) {
        welcomeMessagePart1.setAttribute('data-typing', 'true');  // Mark that typing has started
        welcomeMessagePart2.setAttribute('data-typing', 'true');

        // Type the first message
        setTimeout(() => {
            typeMessage(firstMessage, welcomeMessagePart1, index1, function() {
                // After first message is done, type the second message
                setTimeout(() => {
                    typeMessage(secondMessage, welcomeMessagePart2, index2, function() {
                        // Both messages are now typed
                    });
                }, 500);  // Delay before second message starts typing
            });
        }, 500); // Initial delay before typing starts
    }
});
