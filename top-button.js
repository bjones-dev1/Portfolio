const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
    } else {
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
    }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Nav Bar Mobile
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
const menuItems = document.querySelectorAll(".menu-item");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});