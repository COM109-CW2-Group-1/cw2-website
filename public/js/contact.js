$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const errors = [];
        $('#formErrors').empty(); 

        const name = $('#name').val().trim();
        if (name.length < 3) {
            errors.push('Your full name should be at least 3 characters.');
        }

        const email = $('#email').val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push('That email doesn’t look right. Please check it.');
        }

        const phone = $('#phone').val().trim();
        const phonePattern = /^[0-9\s\-()+]+$/;
        if (!phonePattern.test(phone)) {
            errors.push('Please enter a valid phone number.');
        }

        const address = $('#address').val().trim();
        if (address.length < 10) {
            errors.push('Your address should be at least 10 characters.');
        }

        const postcode = $('#postcode').val().trim();
        if (!/^[A-Za-z0-9\s]+$/.test(postcode)) {
            errors.push('Please enter a valid postcode.');
        }

        const dob = $('#dob').val();
        if (!dob) {
            errors.push('Don’t forget to select your date of birth.');
        }

        const reason = $('#reason').val();
        if (!reason) {
            errors.push('Please tell us why you’re contacting us.');
        }

        if (!$('#agree').is(':checked')) {
            errors.push('You need to agree to our Terms & Conditions.');
        }

        if (errors.length) {
            $('#formErrors').html(errors.join('<br>'));
        } else {
            alert('Thanks! Your form was submitted successfully.');
            this.submit();
        }
    });
});
