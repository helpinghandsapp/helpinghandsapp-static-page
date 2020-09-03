var $tabs = $(".tab");
var $verticalTabs = $(".tab-vertical");

$tabs.click(function() {
  $(this).parent(".column").toggleClass("show");
  $tabs.not(this).parent().removeClass("show");
});

$verticalTabs.click(function() {
  $(this).parent(".row").toggleClass("show");
  $verticalTabs.not(this).parent().removeClass("show");
});