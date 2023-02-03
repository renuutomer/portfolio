    
    <script>
    var typed = new Typed(".input",{
        strings:["Renuu Tomer","Full Stack Web Developer",],
        typeSpeed: 70,
        backSpeed: 60,
        loops: true
    });
    const header = document.querySelector("header");
    window.addEventListener ("scroll", function(){
    header. classList.toggle("sticky" , window.scrolly > 0);
});
</script>

        // <!-- emailjs to mail contact form data -->
        $("#contact-form").submit(function (event) {
            emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
            emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById("contact-form").reset();
                    alert("Form Submitted Successfully");
                }, function (error) {
                    console.log('FAILED...', error);
                    alert("Form Submission Failed! Try Again");
                });
            event.preventDefault();
        });
        // <!-- emailjs to mail contact form data -->
    /* SCROLL CONTACT */
    srtop.reveal('.contact .container', { delay: 400 });
    srtop.reveal('.contact .container .form-group', { delay: 400 });