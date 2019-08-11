/**************************
	FULL SCREEN OVERLAY
    The follow code handles full screen images.
    When an image in the gallery is clicked, it is presented full screen.
**************************/

let selectedCard = null;

function openImg() {
    selectedCard.addClass('no-hover');

    const url = selectedCard.find("img").attr("src");
    $('#fullscreen_overlay').css('display', 'block');
    $('#fullscreen_overlay').find("img").attr('src', url);
}

function closeImg() {
    if (selectedCard) {
        selectedCard.removeClass('no-hover');
        selectedCard = null;
        $('#fullscreen_overlay').css('display', 'none');
    }
}

$(document).ready(function() {
    $('#fullscreen_overlay').click(function(e) {
        closeImg();
    });

    $('#gallery li').click(function(e) {
        selectedCard = $(this);
        openImg();
    });
});
