let isMenuOpen = false;

// Function to handle menu toggle in mobile view
const handleToggleClick = () => {
  isMenuOpen = !isMenuOpen; // Toggle the menu state
  const menuCollapseElement = document.getElementById(
    "bs-example-navbar-collapse-1",
  );

  if (isMenuOpen) {
    menuCollapseElement.classList.add("in"); // Add the "in" class to show the menu
  } else {
    menuCollapseElement.classList.remove("in"); // Remove the "in" class to hide the menu
  }
};
