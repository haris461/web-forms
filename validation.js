function validateSignInForm() {
        const name = document.getElementById('signin_name').value.trim();
        const password = document.getElementById('signin_password').value.trim();

        if (name === '' || password === '') {
            alert('Please enter both name and password.');
            return false;
        }

        // Proceed with form submission
        alert('Sign in successful!');
        return true;
    }

    function validateSignUpForm() {
        const name = document.getElementById('signup_name').value.trim();
        const email = document.getElementById('signup_email').value.trim();
        const dob = document.getElementById('signup_dob').value.trim();
        const password = document.getElementById('signup_password').value.trim();
        const confirmPassword = document.getElementById('signup_confirm_password').value.trim();
        const address = document.getElementById('signup_address').value.trim();
        const phone = document.getElementById('signup_phone').value.trim();
        const gender = document.getElementById('signup_gender').value.trim();

        // Validation logic
        if (name === '' || email === '' || dob === '' || password === '' || confirmPassword === '' || address === '' || phone === '' || gender === '') {
            alert('Please fill out all fields.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (!isValidPassword(password)) {
            alert('Password must contain at least one special character, one numeric character, and be at least 8 characters long.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }

        // Proceed with form submission
        alert('Sign up successful!');
        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    }
