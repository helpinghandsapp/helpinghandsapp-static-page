const xhr = new XMLHttpRequest();
xhr.open("GET", "../navbar.html", false);
xhr.send();
document.getElementById("navbar-container").innerHTML = xhr.responseText;
