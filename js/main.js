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
  sidebar.setAttribute("style", "transform: translateX(110%);");
}

openSidebarBtn.addEventListener("click", openSidebar);

function openSidebar() {
  sidebar.setAttribute("style", "transform: translateX(-18%);");
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

  if (e.target !== openSidebarBtn && e.target !== openSidebarImg) {
    sidebar.setAttribute("style", "transform: translateX(110%);");
  }
}
