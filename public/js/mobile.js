console.log(screen.width);

$('#hider').hide();
$('#hidden_break').remove();
$('.is-visible').toggleClass('project_img_small');
$('#button_div').toggleClass('button_div');


if ($(window).width() <= 896) {
    $(body).toggleClass('centered');
    $('#2').toggleClass('is-visible');
    $('#2').toggleClass('fade-in');
    $('.portfolio-intro').append('<div id="appendage_div"><a href="/resume"><p>Resume</p></a><a href="/about"><p>About Me</p></a></div>');
    $('.is-visible').toggleClass('project_img');
    $('.is-visible').toggleClass('project_img_small');
    $('#button_div').toggleClass('button_div');

    if ($(window).width() <= 660) {
        $('#1').toggleClass('is-visible');
        $('#1').toggleClass('fade-in');
    }
}


