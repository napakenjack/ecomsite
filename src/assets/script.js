$(function () {
 $(".sidebar-link").click(function () {
  $(".sidebar-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

$(window)
 .resize(function () {
  if ($(window).width() > 1090) {
   $(".sidebar").removeClass("collapse");
  } else {
   $(".sidebar").addClass("collapse");
  }
 })
 .resize();

 



// 輸送方法・ショー／ハイド
$('.checkout #shipto').change(function () {
   if($(this).is(':checked')) {
      $('.checkout .shipping-address').slideDown();
      } else {
      $('.checkout .shipping-address').slideUp();
   }
});


  
  
// 支払方法・ショー／ハイド
$('.checkout .payment-method .custom-control-input').change(function () {
   if ($(this).prop('checked')) {
      var checkbox_id = $(this).attr('id');
      $('.checkout .payment-method .payment-content').slideUp();
      $('#' + checkbox_id + '-show').slideDown();
   }
});



  


$(function () {
 $(".logo, .logo-expand, .discover").on("click", function (e) {
  $(".main-container").removeClass("show");
  $(".main-container").scrollTop(0);
  $(".stream-area").css("display", "none");
  $(".stream-area-2").css("display", "none");
  $(".stream-area-3").css("display", "none");
 });

 $(".trending").on("click", function (e) {
  $(".main-container").addClass("show");
  $(".main-container").scrollTop(0);
  $(".sidebar-link").removeClass("is-active");
  $(".trending").addClass("is-active");
  $(".stream-area").css("display", "flex");
  $(".stream-area-2").css("display", "none");
  $(".stream-area-3").css("display", "none");
 });


 $(".messenger").on("click", function (e) {
    $(".stream-area").css("display", "none");
    $(".stream-area-2").css("display", "flex");
    $(".stream-area-3").css("display", "none");
    $(".main-container").addClass("show");    
    $(".main-container").scrollTop(0);
    $(".sidebar-link").removeClass("is-active");
    $(".messenger").addClass("is-active");
   });

   $(".product").on("click", function (e) {
      $(".stream-area").css("display", "none");
      $(".stream-area-2").css("display", "none");
      $(".stream-area-3").css("display", "flex");
      $(".main-container").addClass("show");    
      $(".main-container").scrollTop(0);
      $(".sidebar-link").removeClass("is-active");
      $(".product").addClass("is-active");
     });




});




