
$(document).ready(function () {
    
    /**
     * Sign Up Button.
     *
     *
     */
    $('#email').keyup(function () {
        $.get("/getCheckEmail", {email: $('#email').val()}, function(result) {

            if(result.email == $('#email').val()) {
                $('#email-validation').css("background-color", "#FF0000");
                $('#error-message').text("The provided email is already registered.");
                $('#signup').prop('disabled', true);
            }
            else {
                $('#email-validation').css("background-color", "white");    
                $('#error-message').text("");
                $('#signup').removeAttr("disabled");
            }
        });
    });

   $('#signup').click(function () {
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var email = $('#email');
    var password = $('#password');
    var id;
    var err = false;

    if (firstname[0].value.length == 0 || 
        lastname[0].value.length == 0 || 
        email[0].value.length == 0 ||
        password[0].value.length == 0)
        err = true;
    
    if (err) {
        alert('err');
    }

    else {
        //add to database
        $.post('/signup', 
        {
            firstname: firstname.val(), 
            lastname: lastname.val(), 
            email: email.val(),
            password: password.val(),
        }, function(result){});
    }
  });

  $('#login').click(function (e) {
    e.preventDefault();
    var email = $('#email-sign-in');
    var password = $('#password-sign-in');

    $.post("/signin", 
    {
        email: email.val(), 
        password: password.val()
    }, function(result) {
        console.log(result.email + email.val() + result.password + password.val());

        if(result.email == email.val() && result.password == password.val()) {
            window.location = '/profile';
            done();
        }
        else
            $('#error-message-sign-in').text("Invalid Credentials.");
    });

  })

  
});

  