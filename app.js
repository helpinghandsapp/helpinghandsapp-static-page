function myFunction() {
    var subnavBar = document.getElementsByClassName("subnav")
    var menu = document.getElementById("collapsible")
    if (subnavBar.style.display ==="none" ){
      menu.setAttribute("aria-expanded", "true")

    }

    // button.addEventListener ("click", function (){
    //    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    //   this.setAttribute('aria-expanded', !expanded);
    //    let menu = this.nextElementSibling;
    //   menu.hidden = !menu.hidden;
    // })

  }