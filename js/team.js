function generateHTML(people, isCurrentStaff) {
  return people
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
        <div class="${isCurrentStaff ? "team" : "volunteer"}-component">
          <div class="${isCurrentStaff ? "main-team-photo" : "volunteer-image"}">
            <img
              class="headshot"
              src="${person.image}"
              alt="${person.imageAlt}"
            />
          </div>
          <div class="${!isCurrentStaff ? "volunteer-" : ""}team-paragraph">
            <h3 class="team-name">${person.name}</h3>
            <p class="position-title">${person.position}</p>
            <p class="about-us">${person.about}</p>
            ${contactInfo}
          </div>
        </div>
      `;
    })
    .join("");
}

fetch(
  "https://helping-hands-website.s3.ca-central-1.amazonaws.com/team/team.json",
)
  .then((res) => res.json())
  .then((data) => {
    $("#staff-container").html(
      data.staff.length > 0
        ? generateHTML(data.staff, true)
        : "There are no staff members right now.",
    );
    $("#volunteers-container").html(
      data.volunteers.length > 0
        ? generateHTML(data.volunteers, false)
        : "There are no volunteers and placement students right now.",
    );
    $("#previous-container").html(
      data.previous.length > 0
        ? generateHTML(data.previous, false)
        : "There are no previous team members right now.",
    );
  })
  .catch((err) => {
    console.error(err);
    $("#staff-container").html(
      "There was a problem loading the staff members.",
    );
    $("#volunteers-container").html(
      "There was a problem loading the volunteers and placement students.",
    );
    $("#previous-container").html(
      "There was a problem loading the previous team members.",
    );
  });
