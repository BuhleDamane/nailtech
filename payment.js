document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.querySelector('form');
    const accountNumberInput = document.getElementById('account-number');
    const cvvInput = document.getElementById('cvv');
    const paypalEmailInput = document.getElementById('paypal-email');
    const submitButton = document.querySelector('.pay-now-button');
    
    // Validate account number: must be between 13 and 18 digits and allow only numbers
    accountNumberInput.addEventListener('input', function () {
        // Remove any non-numeric characters
        accountNumberInput.value = accountNumberInput.value.replace(/\D/g, '');

        if (accountNumberInput.value.length < 13 || accountNumberInput.value.length > 18) {
            accountNumberInput.setCustomValidity('Card number is incorrect.');
        } else {
            accountNumberInput.setCustomValidity('');
        }
    });

    // Validate CVV: must be exactly 3 digits (handled during form submission)
    cvvInput.addEventListener('input', function () {
        // Remove any non-numeric characters
        cvvInput.value = cvvInput.value.replace(/\D/g, '');

        if (cvvInput.value.length > 3) {
            cvvInput.value = cvvInput.value.slice(0, 3); // Truncate if more than 3 digits
        }

        // Reset custom validity for CVV when the user updates the input
        if (cvvInput.value.length >= 2) {
            cvvInput.setCustomValidity('');
        }
    });

    // Handle form submission
    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the PayPal email format before submitting
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (paypalEmailInput && !emailPattern.test(paypalEmailInput.value)) {
            alert('Please enter a valid email address.');
            return; // Prevent form submission if email is invalid
        }

        // Validate the CVV before submitting
        if (cvvInput && cvvInput.value.length < 3) {
            if (cvvInput.value.length < 2) {
                cvvInput.setCustomValidity('CVV is incorrect. It must be exactly 3 digits.');
            } else {
                cvvInput.setCustomValidity('CVV must be exactly 3 digits.');
            }
            return; // Prevent form submission if validation fails
        }

        // Validate fields before submitting
        if (paymentForm.checkValidity()) {
            // Show loading animation
            submitButton.textContent = 'Processing...';
            submitButton.disabled = true;

            // Simulate loading time (3 seconds)
            setTimeout(() => {
                // After "processing", redirect to booking page
                window.location.href = 'booking.html';
            }, 3000); // 3-second loading time
        } else {
            alert("Please ensure all fields are correctly filled.");
        }
    });
});
