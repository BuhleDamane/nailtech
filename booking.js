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

// Show different payment options
document.getElementById('bankTransfer').addEventListener('click', () => {
    document.getElementById('banksDropdown').classList.remove('hidden');
});

document.getElementById('paypal').addEventListener('click', () => {
    showPayPalForm();
});

document.getElementById('ozow').addEventListener('click', () => {
    showOzowForm();
});

// Bank transfer - show bank options when clicked
document.getElementById('banksList').addEventListener('change', (e) => {
    // Simulate redirection to a page where card details are entered
    showBankDetailsForm();
});

// Bank details form submission
document.getElementById('bankForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showPaymentConfirmation();
});

// Handle Payment Confirmation
document.getElementById('confirmPayment').addEventListener('click', () => {
    showLoading();
    setTimeout(() => {
        showSuccessMessage();
    }, 5000);
});

// Cancel Payment
document.getElementById('cancelPayment').addEventListener('click', () => {
    resetPaymentSection();
});

// PayPal and Ozow forms
function showPayPalForm() {
    // Simple input for PayPal Email
    const paypalForm = `
        <h3>Enter your PayPal Email</h3>
        <input type="email" id="paypalEmail" placeholder="Email Address" required />
        <button id="paypalSubmit">Submit</button>
    `;
    document.getElementById('paymentFormContainer').innerHTML = paypalForm;
    document.getElementById('paypalSubmit').addEventListener('click', confirmPayment);
}

function showOzowForm() {
    // Simple input for Ozow Phone number
    const ozowForm = `
        <h3>Enter your Registered Phone Number</h3>
        <input type="text" id="ozowPhoneNumber" placeholder="Phone Number" required />
        <button id="ozowSubmit">Submit</button>
    `;
    document.getElementById('paymentFormContainer').innerHTML = ozowForm;
    document.getElementById('ozowSubmit').addEventListener('click', confirmPayment);
}

function confirmPayment() {
    showPaymentConfirmation();
}

function showLoading() {
    document.getElementById('loadingAnimation').classList.remove('hidden');
}

function showSuccessMessage() {
    document.getElementById('loadingAnimation').classList.add('hidden');
    document.getElementById('paymentSuccess').classList.remove('hidden');
    setTimeout(() => {
        redirectToBooking();
    }, 2000); // Redirect after 2 seconds
}

function redirectToBooking() {
    // Reset the page and return to the clean booking container
    window.location.reload(); // Or navigate to a new URL if needed
}

function resetPaymentSection() {
    document.getElementById('paymentConfirmation').classList.add('hidden');
    document.getElementById('banksDropdown').classList.add('hidden');
    document.getElementById('bankDetailsForm').classList.add('hidden');
    document.getElementById('paymentSuccess').classList.add('hidden');
    document.getElementById('loadingAnimation').classList.add('hidden');
}
