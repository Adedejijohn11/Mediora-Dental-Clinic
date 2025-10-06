const showsidebar = document.querySelector(".fa-bars");
const closebar = document.querySelector(".fa-xmark");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector("nav");
const homeBg = document.querySelector("#home-bg");
const header = document.querySelector("header");

// showsidebar
showsidebar.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

// closebar
closebar.addEventListener("click", () => {
  sidebar.style.display = "none";
});

// each list should close the sidebar when click and navigate
document.querySelectorAll(".sidebar, li").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.style.display = "none";
  });
});

// scrolling effect for the navbar
window.addEventListener("scroll", () => {
  // const headerbottom = header.offsetHeight;

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    homeBg.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    homeBg.classList.remove("scrolled");
  }
});
