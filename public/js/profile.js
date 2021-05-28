$(document).ready(function () {
    let aboutEdit = $('#about-form-container');
    let gameEdit = $('#game-form-container');
    let bioEdit = $('#bio-form-container');
    gameEdit.toggle();
    aboutEdit.toggle();
    bioEdit.toggle();

    // Howl and Echo Functions
    $('#submit-howl').click(function () {
        var howl = $("#post-howl");

        $.get('/howl', {howl:howl.val()},function(data, status) {});
        window.location = '/profile';
    });

    $('.submit-echo').click(function () {
        var formid = this.form.id;
        var form = document.getElementById(formid);
        var howlid = form.elements['howlid'];
        var echo = form.elements['echo'];
        
        $.get('/echo', {echo:echo.value, howlid:howlid.value},function(data, status) {});
        window.location = '/profile';
    });

    // Edit Profile Functions
    $('#about-submit').click(function(){
        let about = $('#about-input');
        
        $.get('/updateabout', {about: about.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#game-submit').click(function(){
        let games = $('#game-input');
        
        $.get('/updategames', {games: games.val()}, function(data, status){});
        window.location = '/profile';
    });

    $('#bio-submit').click(function(){
        let bio = $('#bio-input');
        
        $.get('/updatebio', {bio: bio.val()}, function(data, status){});
        window.location = '/profile';
    });

    // Toggle Functions
    $('#about-edit').click(function(){
        aboutEdit.toggle();
    });

    $('#games-edit').click(function(){
        gameEdit.toggle();
    });

    $('#bio-edit').click(function(){
        bioEdit.toggle();
    });
})