$(".burger").click(function() {
    $(".menu").addClass("active");
    $(".overlay").show();
});
$(".overlay").click(function() {
    $(".menu").removeClass("active");
    $(".overlay").hide();
});
$(".menu__close").click(function() {
    $(".menu").removeClass("active");
    $(".overlay").hide();
});