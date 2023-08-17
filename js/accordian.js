var $tabs = $(".tab");
var $verticalTabs = $(".tab-vertical");

$tabs.click(function () {
  $(this).parent(".column").toggleClass("show");
  $tabs.not(this).parent().removeClass("show");
});

$verticalTabs.click(function () {
  const $size = $(this).find(".togleSign"); // Update to select the indicator span
  $(this).parent(".slide").toggleClass("show");

  // Toggle the indicator text
  if ($(this).parent(".slide").hasClass("show")) {
    $size.text("-");
  } else {
    $size.text("+");
  }

  $verticalTabs.not(this).parent().removeClass("show");
});
$verticalTabs.focus(function () {
  $(this).parent(".slide").toggleClass("show");
  $verticalTabs.not(this).parent().removeClass("show");
});
