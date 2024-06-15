var typed = new Typed(".text", {
    strings: ["Undergraguate Software engineer", "Web developer"],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('msamhan307@gmail.com', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
    });
}