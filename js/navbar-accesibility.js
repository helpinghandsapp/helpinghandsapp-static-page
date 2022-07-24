const topLevelLinks = document.querySelectorAll('.menu__link')
const collapsibleNavBarLinks = document.getElementById('collapsible')
const subNavClass = document.getElementsByClassName('subnav-menu')
const menuLinkClass = document.getElementsByClassName('menu__link')


// remove focus if hover away outside
document.addEventListener('mouseover', function(event) {
  if (event.target.id != 'collapsible') {
    for(var i = 0; i < menuLinkClass.length; i++){
      menuLinkClass[i].setAttribute('aria-expanded', 'false')
    }
    collapsibleNavBarLinks.setAttribute('aria-expanded', 'false')
    for(var i = 0; i < subNavClass.length; i++){
      subNavClass[i].classList.remove('focus')
      }
   }
})


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

    // remove previous linkfocus and aria expanded
    lastLink.addEventListener('blur', function() {
      lastLink.parentElement.parentElement.previousElementSibling.setAttribute("aria-expanded", "false")
      link.parentElement.classList.remove('focus')
    })

  }
})