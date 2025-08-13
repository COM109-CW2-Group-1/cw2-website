$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault(); 

        let errors = [];

        $('#formErrors').text('');

        let name = $('#name').val().trim();
        if (name.length < 3) {
            errors.push('Full Name must be at least 3 characters.');
        }
        let email = $('#email').val().trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push('Please enter a valid email address.');
        }

        let phone = $('#phone').val().trim();
        let phonePattern = /^[0-9\s\-()+]+$/;
        if (!phonePattern.test(phone)) {
            errors.push('Please enter a valid phone number.');
        }

        let address = $('#address').val().trim();
        if (address.length < 10) {
            errors.push('Address must be at least 10 characters.');
        }

        let postcode = $('#postcode').val().trim();
        if (!/^[A-Za-z0-9\s]+$/.test(postcode)) {
            errors.push('Please enter a valid postcode.');
        }

        let dob = $('#dob').val();
        if (!dob) {
            errors.push('Please select your date of birth.');
        }

        let reason = $('#reason').val();
        if (!reason) {
            errors.push('Please select a reason for contact.');
        }

        if (!$('#agree').is(':checked')) {
            errors.push('You must agree to the Terms & Conditions.');
        }

        if (errors.length > 0) {
            $('#formErrors').html(errors.join('<br>'));
        } else {
            alert('Form submitted successfully!');
            this.submit();
        }
    });
});

