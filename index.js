
const CAPTCHA_SITE_KEY="6LfhSvgmAAAAAItU2PTnL0kvuBEIgG_h2_CWRl9K";

let captchaLoaded = false;
function onRecaptchaloadCallback() {
    grecaptcha.render("captcha-placeholder", {
        "sitekey": CAPTCHA_SITE_KEY,
        "size": "normal",
        "badge": "inline",
    }, true);
    captchaLoaded = true;
}
function onSubmitButton(token){
    submitHandler(token)
}
function submitHandler(token){
    // Hide any previous messages
    $("#form-message-warning").hide();
    $("#form-message-success").hide();
    
    // Form data
    var formData = {
        'name': $('input[name=name]').val(),
        'property': $('input[name=property]').val(),
        'email': $('input[name=email]').val(),
        'phone': $('input[name=phone]').val(),
        token
    };

    alert("Form submitted!\n" + JSON.stringify(formData, null, 2))
    // AJAX request
    // $.ajax({
    //     type: "POST",
    //     url: 'addlead.php', // Add your post URL here
    //     data: formData,
    //     success: function (data) {
    //         $("#form-message-success").show();
    //         console.log("Form successfully submitted");
    //     },
    //     error: function (error) {
    //         $("#form-message-warning").show();
    //         console.log("Error in form submission");
    //     }
    // });
}
$(document).ready(function () {
   
    $("#contactForm").submit(function(e){

        e.preventDefault();
        // CAPTCHA validation
        if (!captchaLoaded) {
            alert("Please wait for captcha to load");
            return false;
        }
        var response = grecaptcha.getResponse();
        if (response.length == 0) {
            alert("Please validate the captcha");
            return false;
        }
        submitHandler(response);
    });
});
