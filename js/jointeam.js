function toggleTab(tab) {
  tab.classList.toggle("active");
  const spanElement = tab.querySelector("span");
  if (tab.classList.contains("active")) {
    spanElement.textContent = "-";
  } else {
    spanElement.textContent = "+";
  }
}

fetch(
  "https://helping-hands-website.s3.ca-central-1.amazonaws.com/jointeam/jointeam.json",
)
  .then((res) => res.json())
  .then((data) => {
    // Display urgent job postings using accordion tabs with PDFs
    if (data.urgent.length > 0) {
      $("#urgent-container").html(
        data.urgent
          .map(
            (post) => `
              <div class="slide">
                <div class="tab-vertical">
                  ${post.title}
                  <span class="toggle-icon">+</span>
                </div>
                <div class="content-vertical">
                  <embed
                    src="${post.pdf}"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            `,
          )
          .join(""),
      );
    } else {
      $("#urgent-text").html("There are no urgent job postings right now.");
      $("#urgent-button").hide();
    }

    // Display trainee positions as images with links
    $("#trainee-container").html(
      data.trainee.length > 0
        ? data.trainee
            .map(
              (post) => `
              <li class="volunteer-item">
                <a
                  class="volunteer-link"
                  href="${post.href}"
                  target="_blank"
                  onclick="mixpanel.track('${post.mixpanelTrack}')"
                  aria-label="${post.ariaLabel}"
                >
                  <img
                    class="volunteer-img"
                    src="${post.image}"
                    alt="${post.alt}"
                  />
                </a>
              </li>
            `,
            )
            .join("")
        : "There are no trainee positions right now.",
    );

    // Display volunteer postings as accordion tabs with PDFs
    if (data.volunteer.length > 0) {
      $("#volunteer-container").html(
        data.volunteer
          .map(
            (post) => `
              <div class="slide">
                <div class="tab-vertical">
                  ${post.title}
                  <span class="toggle-icon">+</span>
                </div>
                <div class="content-vertical">
                  <embed
                    src="${post.pdf}"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            `,
          )
          .join(""),
      );
    } else {
      $("#volunteer-text").html("There are no volunteer postings right now.");
      $("#volunteer-button").hide();
    }

    // Load accordion.js for showing and hiding PDF job posts
    $.getScript("js/accordion.js");
  })
  .catch((err) => {
    console.error(err);
    $("#urgent-text").html(
      "There was a problem loading the urgent job postings.",
    );
    $("#trainee-container").html(
      "There was a problem loading the trainee positions.",
    );
    $("#volunteer-text").html(
      "There was a problem loading the volunteer postings.",
    );
  });
