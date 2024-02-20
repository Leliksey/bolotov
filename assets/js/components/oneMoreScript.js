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
$('.reviews__slider').owlCarousel({
    loop:true,
    nav:true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:false,
    dots:true,
    autoplay:false,
    margin: 18,
    center: true,
    responsive:{
        0:{
            items:2,
            center: true
        },
        576:{
            items:2
        },
        768:{
            center: false,
            items:2
        },
        992:{
            center: false,
            items:3
        },
        1400:{
            items:3
        }
    }
});
$(".addReview__add-file").click(function() {
    $(".addReview__add-file_hidden").click();
});
var dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', function(e) {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', function() {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', function(e) {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  var files = e.dataTransfer.files;
  // Обрабатываем загруженные файлы
});
$(".addReview__heading svg, .close_popup").click(function() {
    $(".addReview").hide();
});
$(".add_rev").click(function() {
    $(".addReview").show();
});