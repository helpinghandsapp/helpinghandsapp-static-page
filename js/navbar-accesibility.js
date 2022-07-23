const topLevelLinks = document.querySelectorAll('.menu__link')


topLevelLinks.forEach(link => {
  if (link.nextElementSibling) {

    // add focus and change aria expanded
    link.addEventListener('focus', function() {
      this.parentElement.classList.add('focus')  
      this.parentElement.firstElementChild.setAttribute("aria-expanded", "true")
    })

    const subMenu = link.nextElementSibling
    const subMenuLinks = subMenu.querySelectorAll('a')
    const lastLinkIndex = subMenuLinks.length - 1
    const lastLink = subMenuLinks[lastLinkIndex]

    // remove previous linkfocus and eria expanded
    lastLink.addEventListener('blur', function() {
      console.log(lastLink.parentElement.parentElement.previousElementSibling.getAttribute("aria-expanded"))
      lastLink.parentElement.parentElement.previousElementSibling.setAttribute("aria-expanded", "false")
      link.parentElement.classList.remove('focus')
    })

  }
})