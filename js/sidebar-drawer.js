const drawerMenuBtnList = document.querySelectorAll(
  '.drawer-menu .drawer-menu-btn'
)

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-active')
  drawerMenu.classList.toggle('is-open')
}

drawerMenuBtnList.forEach((item) => {
  item.addEventListener('click', toggleDrawerMenu)
})
