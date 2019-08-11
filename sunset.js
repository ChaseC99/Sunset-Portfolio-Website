/**************************
	FULL SCREEN OVERLAY
    The follow code handles full screen images.
    When an image in the gallery is clicked, it is presented full screen.
**************************/

function openImg(url) {
    $('#fullscreen_overlay').css('display', 'block');
    $('#fullscreen_overlay').find("img").attr('src', url);
}

function closeImg() {
    $('#fullscreen_overlay').css('display', 'none');
}

$(document).ready(function() {
    $('#fullscreen_overlay').click(function(e) {
        closeImg();
    });

    $('#gallery li').click(function(e) {
        const imgUrl = $(this).find("img").attr("src");
        openImg(imgUrl);
    });
});
