document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded triggered");

   
    document.getElementById("bookingToggle").addEventListener("click", function() {
        document.getElementById("bookingDetails").classList.toggle("hidden");
    });

    document.getElementById("settingsToggle").addEventListener("click", function() {
        document.getElementById("settingsOptions").classList.toggle("hidden");
    });

   
    showPersonalizedGreeting();

    const welcomeMessagePart1 = document.getElementById("welcomeMessagePart1");
    const welcomeMessagePart2 = document.getElementById("welcomeMessagePart2");
    const username = localStorage.getItem("clientName") || "User";

    const firstMessage = `Good day, ${username}!`;
    const secondMessage = `How may we take your booking? 😊`;

    let index1 = 0;
    let index2 = 0;
    const typingSound = document.getElementById("typingSound");

    function typeMessage(message, element, index, callback) {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
            typingSound.play();  
            setTimeout(() => typeMessage(message, element, index, callback), 50);
        } else {
            element.style.borderRight = "none"; 
            callback(); 
        }
    }

    if (!welcomeMessagePart1.hasAttribute('data-typing') && !welcomeMessagePart2.hasAttribute('data-typing')) {
        welcomeMessagePart1.setAttribute('data-typing', 'true');
        welcomeMessagePart2.setAttribute('data-typing', 'true');

        setTimeout(() => {
            typeMessage(firstMessage, welcomeMessagePart1, index1, function() {
              
                setTimeout(() => {
                    typeMessage(secondMessage, welcomeMessagePart2, index2, function() {
                      
                    });
                }, 500);
            });
        }, 500);
    }
});


document.getElementById('bankTransfer').addEventListener('click', () => {
    document.getElementById('banksDropdown').classList.remove('hidden');
});

document.getElementById('paypal').addEventListener('click', () => {
    showPayPalForm();
});

document.getElementById('ozow').addEventListener('click', () => {
    showOzowForm();
});


document.getElementById('banksList').addEventListener('change', (e) => {
   
    showBankDetailsForm();
});

document.getElementById('bankForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showPaymentConfirmation();
});

document.getElementById('confirmPayment').addEventListener('click', () => {
    showLoading();
    setTimeout(() => {
        showSuccessMessage();
    }, 5000);
});

document.getElementById('cancelPayment').addEventListener('click', () => {
    resetPaymentSection();
});

function showPayPalForm() {
    const paypalForm = `
        <h3>Enter your PayPal Email</h3>
        <input type="email" id="paypalEmail" placeholder="Email Address" required />
        <button id="paypalSubmit">Submit</button>
    `;
    document.getElementById('paymentFormContainer').innerHTML = paypalForm;
    document.getElementById('paypalSubmit').addEventListener('click', confirmPayment);
}

function showOzowForm() {
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
    }, 2000); 
}

function redirectToBooking() {
    window.location.reload();
}

function resetPaymentSection() {
    document.getElementById('paymentConfirmation').classList.add('hidden');
    document.getElementById('banksDropdown').classList.add('hidden');
    document.getElementById('bankDetailsForm').classList.add('hidden');
    document.getElementById('paymentSuccess').classList.add('hidden');
    document.getElementById('loadingAnimation').classList.add('hidden');
}

function showPersonalizedGreeting() {
    const username = localStorage.getItem('username');

    if (username) {
        const welcomeMessagePart1 = document.getElementById('welcomeMessagePart1');
        const welcomeMessagePart2 = document.getElementById('welcomeMessagePart2');

        const message1 = `Welcome,`;
        const message2 = `It's good to see you here, ${username}!`;

        typeMessage(welcomeMessagePart1, message1, 100);
        setTimeout(() => {
            typeMessage(welcomeMessagePart2, message2, 100);
        }, message1.length * 100);
    }
}

function typeMessage(element, message, delay) {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < message.length) {
            element.textContent += message.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, delay);
}
