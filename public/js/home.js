$(document).ready(function () {

    // TODO: howl and add to database then reload body.
    $('#submit-howl').click(function () {
        var howl = $("#post-howl");

        $.get('/howl', {howl:howl.val()},function(data, status) {});
        window.location = '/home';
    });

    $('.submit-echo').click(function () {
        var formid = this.form.id;
        var form = document.getElementById(formid);
        var howlid = form.elements['howlid'];
        var echo = form.elements['echo'];
        
        $.get('/echo', {echo:echo.value, howlid:howlid.value},function(data, status) {});
        window.location = '/home';
    });
})