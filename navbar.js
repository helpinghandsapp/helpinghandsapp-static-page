function generateNavbar() {
  // Flag to track if the menu is open or closed
  let isMenuOpen = false;

  // Function to handle the toggle button click event
  const handleToggleClick = () => {
    isMenuOpen = !isMenuOpen; // Toggle the menu state
    const menuCollapseElement = document.getElementById(
      "bs-example-navbar-collapse-1"
    );

    if (isMenuOpen) {
      menuCollapseElement.classList.add("in"); // Add the "in" class to show the menu
    } else {
      menuCollapseElement.classList.remove("in"); // Remove the "in" class to hide the menu
    }
  };

  return `
    <nav
      role="navigation"
      id="mainNav"
      class="navbar navbar-default navbar-fixed-top"
      aria-label="Main Menu"
    >
      <div class="wrapper">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            class="navbar-toggle collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-haspopup="true"
            onclick="handleToggleClick()"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <h1>
            <a class="navbar-brand page-scroll" href="index.html">Helping Hands</a>
          </h1>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div
          id="bs-example-navbar-collapse-1"
          class="collapse navbar-collapse"
          role="menubar"
        >
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="subnav-menu">
              <a
                href="#"
                class="collapsible menu__link"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >About &#9660;</a
              >
              <ul class="nav subnav">
                <li class="subnav-link">
                  <a class="nav-link" href="team.html">Our Team</a>
                </li>
                <li class="subnav-link">
                  <a class="nav-link" class="page-scroll" href="news.html"
                    >In the News</a
                  >
                </li>
              </ul>
            </li>
            <li class="subnav-menu">
              <a
                href="#"
                class="collapsible menu__link"
                aria-haspopup="true"
                aria-expanded="false"
                role="button"
                >Resources &#9660;</a
              >
              <ul class="nav subnav submenu">
                <li class="subnav-link">
                  <a class="nav-link" href="volunteer-opportunities.html"
                    >Volunteer Opportunities</a
                  >
                </li>
                <li class="subnav-link">
                  <a class="nav-link" href="covid19.html">Covid Response</a>
                </li>
                <li class="subnav-link">
                  <a
                    class="nav-link"
                    class="page-scroll"
                    href="covid19.html#anti-black_racism_guidebook"
                    >Anti-Black Racism Guidebook</a
                  >
                </li>
              </ul>
            </li>
            <li class="subnav-menu">
              <a
                href="#"
                class="collapsible menu__link"
                aria-haspopup="true"
                role="button"
                aria-expanded="false"
                >Get Involved &#9660;</a
              >
              <ul class="nav subnav">
                <li class="subnav-link">
                  <a class="nav-link" href="jointeam.html">Join the Team</a>
                </li>
                <li class="subnav-link">
                  <a class="nav-link" href="donate.html">Donate</a>
                </li>
                <li class="subnav-link">
                  <a class="nav-link" href="lendahandsurvey.html">Lend a Hand Survey</a>
                </li>
                <li class="subnav-link">
                <a class="nav-link" href="youth-leading-the-way.html">Find your volunteer opportunity</a>
              </li>
              </ul>
            </li>
            <li>
              <a class="nav-link" href="workshops.html">Workshops</a>
            </li>
            <li>
              <a href="./blog">Blog</a>
            </li>
            <li>
              <a class="page-scroll" href="contactus.html">Contact Us</a>
            </li>
            <li class="nav-button">
              <a class="btn btn-seconday btn-sm" href="index.html#help">
                How can we help?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}
