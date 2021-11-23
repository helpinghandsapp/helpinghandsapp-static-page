/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
  "use strict"; // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        1250,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $("body").scrollspy({
    target: ".navbar-fixed-top",
    offset: 51,
  });

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
  });

  // Fit Text Plugin for Main Header
  $("h1").fitText(1.2, {
    minFontSize: "35px",
    maxFontSize: "65px",
  });

  // Offset for Main Navigation
  $("#mainNav").affix({
    offset: {
      top: 100,
    },
  });

  // Change Airtable link to prefill when a selected position is clicked
  $("#administrative-assistant-option").click(function () {
    $("#volunteer-postings-link").attr(
      "href",
      "https://airtable.com/shre7vhoh5QXOswYx?prefill_Position+you+are+applying+for=Administrative+Assistant"
    );
  });
  $("#community-outreach-option").click(function () {
    $("#volunteer-postings-link").attr(
      "href",
      "https://airtable.com/shre7vhoh5QXOswYx?prefill_Position+you+are+applying+for=Community+Outreach+Coordinator"
    );
  });
  $("#fund-donor-option").click(function () {
    $("#volunteer-postings-link").attr(
      "href",
      "https://airtable.com/shre7vhoh5QXOswYx?prefill_Position+you+are+applying+for=Fundraising+and+Donor+Relation+Associate"
    );
  });
  $("#google-ads-option").click(function () {
    $("#volunteer-postings-link").attr(
      "href",
      "https://airtable.com/shre7vhoh5QXOswYx?prefill_Position+you+are+applying+for=Google+Ads+Manager"
    );
  });
  $("#online-ads-option").click(function () {
    $("#volunteer-postings-link").attr(
      "href",
      "https://airtable.com/shre7vhoh5QXOswYx?prefill_Position+you+are+applying+for=Online+Ads+Manager"
    );
  });
  $("#social-media-option").click(function () {
    $("#volunteer-postings-link").attr(
      "href",
      "https://airtable.com/shre7vhoh5QXOswYx?prefill_Position+you+are+applying+for=Social+Media+Associate"
    );
  });
  $("#software-developer-option").click(function () {
    $("#volunteer-postings-link").attr(
      "href",
      "https://airtable.com/shre7vhoh5QXOswYx?prefill_Position+you+are+applying+for=Software+Developer"
    );
  });
  $("#youth-outreach-option").click(function () {
    $("#volunteer-postings-link").attr(
      "href",
      "https://airtable.com/shre7vhoh5QXOswYx?prefill_Position+you+are+applying+for=Youth+Outreach+Coordinator"
    );
  });

  // Initialize WOW.js Scrolling Animations
  new WOW().init();
})(jQuery); // End of use strict

var collapseElementList = [].slice.call(document.querySelectorAll(".collapse"));
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl);
});
