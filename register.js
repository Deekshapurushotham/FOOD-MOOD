document.getElementById('registerform').addEventListener('submit', function (event) {
    event.preventDefault();
        // Clear previous error messages
        document.querySelectorAll('.error').forEach(function (error) {
            error.textContent = '';
        });

        // Validate form fields
        let isValid = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const gender = document.getElementById('gender').value;
        const country = document.getElementById('country').value;
        const city = document.getElementById('city').value;
        const password = document.getElementById('password').value
        const confirmpassword = document.getElementById('confirmpassword').value

        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        }

        if (email === '') {
            document.getElementBy('emailError').textContent = 'Email is required.';
            isValid = false;
        }

        if (phone === '') {
            document.getElementById('phoneError').textContent = 'Phone number is required.';
            isValid = false;
        }

        if (gender === '') {
            document.getElementById('genderError').textContent = 'gender is required.';
            isValid = false;
        }

        if (country === '') {
            document.getElementById('countryError').textContent = 'country  is required.';
            isValid = false;
        }

        if (city ==='') {
            document.getElementById('cityError').textContent = 'city is required.';
            isValid = false;
        }
        if (password ==='') {
            document.getElementById('passwordError').textContent = 'password is required.';
            isValid = false;
        }
        if (confirmpassword ==='') {
            document.getElementById('confirmpasswordError').textContent = 'confirmpassword is required.';
            isValid = false;
        }
        if (password !== confirmPassword) {
            document.getElementById('passwordError').textContent = 'Passwords do not match.';
        }else {
                document.getElementById('successMessage').textContent = 'Passwords match.';
        }

        if (isValid) {
            alert('Reservation submitted successfully!');
            // Here you can add code to send the form data to your server
        }
        
    });