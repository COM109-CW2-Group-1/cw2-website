$(document).ready(function() {
    alert("Welcome to the CW2 website! Fill out our form!");

    $('#contactForm').submit(function(event) {
        event.preventDefault();

        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var address = $('#address').val();

        console.log("Form submitted with the following data:");
        console.log("Name: " + name);
        console.log("Phone: " + phone);
        console.log("Email: " + email);
        console.log("Address: " + address);

        alert("Thank you for your message, " + name + "! We will get back to you soon.");
        
        // Reset the form fields
        $(this).trigger("reset");
    });
});