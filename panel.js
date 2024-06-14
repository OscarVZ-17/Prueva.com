// Sidebar toggle functionality
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
let logo = document.querySelector(".opera-logo");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

logo.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
// osvar
setTimeout(
  () => {
    document
      .querySelector('.not-loaded')
      .classList
      .remove('not-loaded');
  },
  1000,
);