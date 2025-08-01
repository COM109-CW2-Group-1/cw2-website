$(document).ready(function () {
  $('#contactForm').on('submit', function (e) {
    e.preventDefault(); // prevent default form submission

    const formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      address: $('#address').val()
    };

    $.ajax({
      url: '/api/contact', // 👈 Replace this with your backend endpoint
      method: 'POST',
      data: JSON.stringify(formData),
      contentType: 'application/json',
      success: function (response) {
        $('#message').text('Form submitted successfully!');
        $('#contactForm')[0].reset();
      },
      error: function () {
        $('#message').text('Error submitting the form. Please try again.');
      }
    });
  });
});
