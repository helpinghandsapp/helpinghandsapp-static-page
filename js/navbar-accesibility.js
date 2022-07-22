function myFunction() {
    var subnavBar = document.getElementsByClassName("subnav")
    var menu = document.getElementById("collapsible")
    if (subnavBar.style.display ==="none" ){
      menu.setAttribute("aria-expanded", "true")

    }

  }

  // making nav bar keyboard accessible

const topLevelLinks = document.querySelectorAll('.menu__link')

topLevelLinks.forEach(link => {
  if (link.nextElementSibling) {
    link.addEventListener('focus', function() {
      this.parentElement.classList.add('focus')
    })

    const subMenu = link.nextElementSibling
    const subMenuLinks = subMenu.querySelectorAll('a')
    const lastLinkIndex = subMenuLinks.length - 1
    const lastLink = subMenuLinks[lastLinkIndex]

    lastLink.addEventListener('blur', function() {
      link.parentElement.classList.remove('focus')
    })
  }
})