fetch(
  "https://helping-hands-website.s3.ca-central-1.amazonaws.com/team/team.json",
)
  .then((res) => res.json())
  .then((data) => {
    $("#staff-container").html(
      data.staff.length > 0
        ? data.staff
            .map((person) => {
              let contactInfo = "";
              if (person.contactText && person.email) {
                const [username, domain] = person.email.split("@");
                contactInfo = `
                  <p class="about-us">
                    ${person.contactText}
                    <a
                      class="team-mailto-link"
                      href="#mailgo"
                      data-address="${username}"
                      data-domain="${domain}"
                      >${person.email}</a
                    >
                  </p>
                `;
              }
              return `
                <div class="team-component">
                  <div class="main-team-photo">
                    <img
                      class="headshot"
                      src="${person.image}"
                      alt="${person.imageAlt}"
                    />
                  </div>
                  <div class="team-paragraph">
                    <h3 class="team-name">${person.name}</h3>
                    <p class="position-title">${person.position}</p>
                    <p class="about-us">${person.about}</p>
                    ${contactInfo}
                  </div>
                </div>
              `;
            })
            .join("")
        : "There are no staff members right now.",
    );

    $("#volunteers-container").html(
      data.volunteers.length > 0
        ? data.volunteers
            .map(
              (person) => `
                <div class="volunteer-component">
                  <div class="volunteer-image">
                    <img
                      class="headshot"
                      src="${person.image}"
                      alt="${person.imageAlt}"
                    />
                  </div>
                  <div class="volunteer-team-paragraph">
                    <h3 class="team-name">${person.name}</h3>
                    <p class="position-title">${person.position}</p>
                    <p class="about-us">${person.about}</p>
                  </div>
                </div>
              `,
            )
            .join("")
        : "There are no volunteers and placement students right now.",
    );

    $("#previous-container").html(
      data.previous.length > 0
        ? data.previous
            .map(
              (person) => `
                <div class="volunteer-component">
                  <div class="volunteer-image">
                    <img
                      class="headshot"
                      src="${person.image}"
                      alt="${person.imageAlt}"
                    />
                  </div>
                  <div class="volunteer-team-paragraph">
                    <h3 class="team-name">${person.name}</h3>
                    <p class="position-title">${person.position}</p>
                    <p class="about-us">${person.about}</p>
                  </div>
                </div>
              `,
            )
            .join("")
        : "There are no previous team members right now.",
    );

    // Load accordion.js for showing and hiding PDF job posts
    $.getScript("js/accordion.js");
  })
  .catch((err) => {
    console.error(err);
    $("#staff-container").html(
      "There was a problem loading the staff members.",
    );
    $("#volunteers-container").html(
      "There was a problem loading the volunteers and placement Students.",
    );
    $("#previous-container").html(
      "There was a problem loading the previous team members.",
    );
  });
