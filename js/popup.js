$(document).ready(function () {
    $("#boton").click(function () {
        $(".pop").fadeIn(300);
        positionPopup();
    });

    $(".pop > span, .pop").click(function () {
        $(".pop").fadeOut(300);
    });
});