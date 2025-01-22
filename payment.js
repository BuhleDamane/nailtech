document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.querySelector('form');
    const submitButton = document.querySelector('.pay-now-button');
    const accountNumberInput = document.getElementById('account-number');
    const cvvInput = document.getElementById('cvv');
    const paypalEmailInput = document.getElementById('paypal-email');
    const ozowPhoneInput = document.getElementById('ozow-phone');

    if (paymentForm) {
        paymentForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            if (paypalEmailInput) {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailPattern.test(paypalEmailInput.value)) {
                    alert('Please enter a valid PayPal email address.');
                    return;
                }
            }

            if (ozowPhoneInput) {
                ozowPhoneInput.value = ozowPhoneInput.value.replace(/\D/g, ''); // Remove non-numeric characters
                if (ozowPhoneInput.value.length !== 10) {
                    alert('Phone number must be exactly 10 digits.');
                    return;
                }
            }

            // Validate account number: must be between 13 and 18 digits and allow only numbers
            if (accountNumberInput) {
                accountNumberInput.value = accountNumberInput.value.replace(/\D/g, '');
                if (accountNumberInput.value.length < 13 || accountNumberInput.value.length > 18) {
                    accountNumberInput.setCustomValidity('Card number is incorrect.');
                    return;
                } else {
                    accountNumberInput.setCustomValidity('');
                }
            }

            // Validate CVV: must be exactly 3 digits
            if (cvvInput) {
                cvvInput.value = cvvInput.value.replace(/\D/g, '');
                if (cvvInput.value.length < 3) {
                    alert('CVV is incorrect. It must be exactly 3 digits.');
                    return;
                }
            }

            // Show processing text
            submitButton.textContent = 'Processing...';
            submitButton.disabled = true;

            setTimeout(() => {
                alert('Payment Successful!');
                window.location.href = 'booking.html';
            }, 3000); // Simulate processing delay
        });
    }

    if (accountNumberInput) {
        accountNumberInput.addEventListener('input', function () {
            accountNumberInput.value = accountNumberInput.value.replace(/\D/g, '');
            if (accountNumberInput.value.length < 13 || accountNumberInput.value.length > 18) {
                accountNumberInput.setCustomValidity('Card number is incorrect.');
            } else {
                accountNumberInput.setCustomValidity('');
            }
        });
    }

    if (cvvInput) {
        cvvInput.addEventListener('input', function () {
            cvvInput.value = cvvInput.value.replace(/\D/g, '');
            if (cvvInput.value.length > 3) {
                cvvInput.value = cvvInput.value.slice(0, 3); // Truncate if more than 3 digits
            }
        });
    }
});