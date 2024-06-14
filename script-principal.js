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

// Auto-adjusting Textarea functionality
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("autoTextarea");

  textarea.addEventListener("input", autoResize);

  function autoResize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }

  // Trigger the autoResize function initially to adjust the textarea height based on its content
  autoResize.call(textarea);
});

