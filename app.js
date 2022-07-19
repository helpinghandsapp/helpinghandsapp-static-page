function myFunction() {
    var x = document.getElementById("collapsible").getAttribute("aria-expanded"); 

    if (x === "false") {
      x = "true";
    } else {
      x = "false";
    }
  }