const xhr = new XMLHttpRequest();
xhr.open("GET", "../navbar.html", false); // must be synchronous for bootstrap affix
xhr.send();
document.getElementById("navbar-container").innerHTML = xhr.responseText;
