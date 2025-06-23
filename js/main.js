const openOpenCloseBtn = document.querySelector(".burger__button-open-close");
const burger = document.querySelector(".burger");
const openSidebarBtn = document.querySelector(".sidebar__switch-button");
const openSidebarImg = document.querySelector(".sidebar__switch-img");
const sidebar = document.querySelector(".sidebar");
const burgerList = document.querySelector('[data-name="burger-list"]');

openOpenCloseBtn.addEventListener("click", openBurger);
document.addEventListener("click", closeSidebar);



function openBurger() {
  burger.classList.toggle("transform");
  openOpenCloseBtn.classList.toggle("close");
}

openSidebarBtn.addEventListener("click", openSidebar);

function openSidebar() {
  
  sidebar.classList.remove("fixed")
  sidebar.classList.remove("sidebar__close")
  sidebar.classList.add("sidebar__open")
}

function closeSidebar(e) {

  if (
    e.target !== burger &&
    e.target !== openOpenCloseBtn &&
    e.target !== burgerList
  ) {
    burger.classList.add("transform");
    openOpenCloseBtn.classList.add("close")
  }

  if(sidebar.classList.contains("fixed")){
    return
  }

  if (e.target !== openSidebarBtn && e.target !== openSidebarImg) {
    sidebar.classList.remove("sidebar__open")
    sidebar.classList.add("sidebar__close")
    sidebar.classList.add("fixed")
  }
}
