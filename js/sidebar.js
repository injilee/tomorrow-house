const sidebarMenubtn = document.querySelector('.gnb-icon-btn.is-menu.sm-only')
const sidebar = document.querySelector('.sidebar.sm-only')
const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-open')
  sidebarOverlay.classList.add('is-active')
}

function closeSidebar() {
  sidebar.classList.remove('is-open')
  sidebarOverlay.classList.remove('is-active')
}

sidebarMenubtn.addEventListener('click', openSidebar)
sidebarOverlay.addEventListener('click', closeSidebar)
