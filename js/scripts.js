// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let valid = true;

        if (nameInput.value.trim() === '') {
            valid = false;
            alert('Name is required');
        }

        if (emailInput.value.trim() === '') {
            valid = false;
            alert('Email is required');
        } else if (!validateEmail(emailInput.value.trim())) {
            valid = false;
            alert('Please enter a valid email address');
        }

        if (messageInput.value.trim() === '') {
            valid = false;
            alert('Message is required');
        }

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});

// Update Footer Year Dynamically
document.addEventListener('DOMContentLoaded', function () {
    const footerYear = document.querySelector('.footer-year');
    footerYear.textContent = new Date().getFullYear();
});
