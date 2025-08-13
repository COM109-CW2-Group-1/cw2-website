$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        let errors = [];
        $('#formErrors').empty();

        const phone = $('#phone').val().trim();
        const postcode = $('#postcode').val().trim();
        const phoneRegex = /^(?:0|\+44)\d{9,10}$/;
        const phoneChanged = phone.replace(/\s+/g, '').replace(/[-()]/g, '');

        if (!phoneRegex.test(phoneChanged)) {
            errors.push('Please enter valid phone number.');
        }

        if (!/^BT\d{1,2}\s\d[A-Z]{2}$/i.test(postcode)) {
            errors.push('Please enter a valid Northern Ireland postcode.');
        }

        if (errors.length > 0) {
            $('#formErrors').html(errors.join('<br>'));
            return false;
            console.log("errors");
        } else {

            console.log("no errors");
            alert('Form submitted successfully!');
            this.submit();

        }
    });
});