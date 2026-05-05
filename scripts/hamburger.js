const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    
    if (navLinks.classList.contains("open")) {
        hamburger.textContent = "clear";
    } else {
        hamburger.textContent = "ls";
    }
});