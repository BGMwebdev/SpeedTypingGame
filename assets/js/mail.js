// click event and keydown event to submit email
emailSubmit.addEventListener('click', submitEmail);

emailSubmit.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        submitEmail();
    }
});

/**
 * This is the email function addopted from emailjs and adjusted to fit this website. 
 */
 (function () {
    emailjs.init('DGscXQC-1ku4fZMZ-');
})();

window.onload = function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Your score  has been sent!");
        emailjs.sendForm('service_6c68e72', 'contact_form', this).then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
};