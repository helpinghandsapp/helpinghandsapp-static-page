const topLevelLinks = document.querySelectorAll('.menu__link')
const subNav = document.querySelectorAll(".nav-link")
const collapsibleNavBarLinks = document.getElementsByClassName('collapsible')
const subNavClass = document.getElementsByClassName('subnav-menu')
const menuLinkClass = document.getElementsByClassName('menu__link')


document.addEventListener('mouseover', function(event) {
  if (event.target.classList != 'collapsible') {
    for(var i = 0; i < menuLinkClass.length; i++){
      menuLinkClass[i].setAttribute('aria-expanded', 'false')
    }
    for(var i = 0; i < subNavClass.length; i++){
      subNavClass[i].classList.remove('focus')
      }
   }
})

subNav.forEach(link=>{
  if (link.closest(".subnav-menu") !==null) {
    link.addEventListener('focus', function() {
      // opens submenu
      this.closest(".subnav-menu").classList.add ('focus')
      this.classList.add("focus")
      this.closest(".subnav-menu").firstElementChild.setAttribute("aria-expanded", "true")

      // closes previous links
      if (this.closest(".subnav-menu").previousElementSibling.classList.contains ("subnav-menu")) {
        this.closest(".subnav-menu").previousElementSibling.classList.remove('focus')
        this.closest(".subnav-menu").previousElementSibling.firstElementChild.setAttribute("aria-expanded", "false")
      }

      // closes next link if going backwards
      if (this.closest(".subnav-menu").nextElementSibling.classList.contains ("subnav-menu")) {
        this.closest(".subnav-menu").nextElementSibling.classList.remove('focus')
        this.closest(".subnav-menu").nextElementSibling.firstElementChild.setAttribute("aria-expanded", "false")
      }
    })
  }
  // close previous or next nav bar if link does not contain submenu
  if ((link.closest(".subnav-menu") ==null) ) {
    link.addEventListener('focus', function() {
      this.parentElement.nextElementSibling.classList.remove('focus')
      this.parentElement.nextElementSibling.firstElementChild.setAttribute("aria-expanded", "false")
      if (link.parentElement.previousElementSibling) {
        this.parentElement.previousElementSibling.classList.remove('focus')
        this.parentElement.previousElementSibling.firstElementChild.setAttribute("aria-expanded", "false")
      }

    })
  }

  
})
topLevelLinks.forEach(link => {

  if (link.nextElementSibling) {
    link.addEventListener('focus', function() {
      this.parentElement.classList.add('focus')  
      this.parentElement.firstElementChild.setAttribute("aria-expanded", "true")
    })
  }

  if (link.nextElementSibling) {
    const subMenu = link.nextElementSibling
    const subMenuLinks = subMenu.querySelectorAll('a')
    const lastLinkIndex = subMenuLinks.length - 1
    const lastLink = subMenuLinks[lastLinkIndex]

    lastLink.addEventListener('blur', function() {
      link.parentElement.classList.remove('focus')
      link.parentElement.firstElementChild.setAttribute("aria-expanded", "false")

    })
  }
})


