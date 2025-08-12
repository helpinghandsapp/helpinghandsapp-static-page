const $tabs = $(".tab");
const $verticalTabs = $(".tab-vertical");

$tabs.click(function () {
  $(this).parent(".column").toggleClass("show");
  $tabs.not(this).parent().removeClass("show");
});

$verticalTabs.click(function () {
  $(this).parent(".slide").toggleClass("show");
  if ($(this).parent(".slide").hasClass("show")) {
    $(this).find(".toggle-icon").html("&ndash;");
  } else {
    $(this).find(".toggle-icon").html("+");
  }
  $verticalTabs.not(this).parent().removeClass("show");
  $verticalTabs.not(this).find(".toggle-icon").html("+");
});

$verticalTabs.focus(function () {
  $(this).parent(".slide").toggleClass("show");
  $verticalTabs.not(this).parent().removeClass("show");
});
