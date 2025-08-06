document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = document.getElementById('submitBtn');
    const spinner = document.getElementById('spinner');
    const formMessage = document.getElementById('formMessage');

    const fields = ['name', 'email', 'phone', 'subject', 'message'];
    const values = {};
    let hasError = false;

    // Clear previous errors
    fields.forEach(field => {
        document.getElementById(field + 'Error').textContent = '';
        values[field] = form.elements[field].value.trim();
    });
    formMessage.textContent = '';
    formMessage.classList.remove('visible');

    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check for empty fields
    fields.forEach(field => {
        if (!values[field]) {
            document.getElementById(field + 'Error').textContent = "This field cannot be empty.";
            hasError = true;
        }
    });

    if (hasError) return;

    // Individual validations
    if (!nameRegex.test(values.name)) {
        document.getElementById('nameError').textContent = "Name can only contain letters and spaces.";
        return;
    }

    if (!emailRegex.test(values.email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        return;
    }

    if (!phoneRegex.test(values.phone)) {
        document.getElementById('phoneError').textContent = "Phone number must be exactly 11 digits.";
        return;
    }

    // Show spinner
    spinner.style.display = "block";
    submitBtn.disabled = true;

    // Simulate sending
    setTimeout(() => {
        spinner.style.display = "none";
        submitBtn.disabled = false;
        form.reset();

        alert("Thank you! Your message has been sent.");
    }, 2000);
});
