var $tabs = $(".tab");
var $verticalTabs = $(".tab-vertical");
var $size = $(".size");

$tabs.click(function () {
  $(this).parent(".column").toggleClass("show");
  $tabs.not(this).parent().removeClass("show");
});

$verticalTabs.click(function () {
  $("#change").val("-");
  $(this).parent(".slide").toggleClass("show");
  $verticalTabs.css({ opacity: "0.3", color: black });
  $verticalTabs.not(this).parent().removeClass("show");
});

$verticalTabs.focus(function () {
  $(this).parent(".slide").toggleClass("show");
  $verticalTabs.not(this).parent().removeClass("show");
});

$verticalTabs.click(function () {
  $size.val("-");
});
