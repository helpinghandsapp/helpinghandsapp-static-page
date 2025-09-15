const accordion = document.getElementsByClassName("accordion");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const chevron = this.children[0];
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      chevron.classList.add("fa-chevron-down");
      chevron.classList.remove("fa-chevron-up");
      panel.style.display = "none";
    } else {
      chevron.classList.add("fa-chevron-up");
      chevron.classList.remove("fa-chevron-down");
      panel.style.display = "block";
    }
  });
}
