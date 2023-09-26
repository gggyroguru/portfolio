const navbarToggle = document.querySelector(".navbar-toggle");
const navbarItems = document.querySelector(".navbar-items");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarItems.classList.toggle("active");
    document.body.classList.add("navbar-active");
})

// const closeToggle = document.querySelector(".close-toggle");
// closeToggle.addEventListener("click", () => {
//     navbarToggle.classList.remove("active");
//     navbarItems.classList.remove("active");
//     document.body.classList.remove("navbar-active");
// })

document.addEventListener("click", (e) => {
    if (!navbarToggle.contains(e.target) && !navbarItems.contains(e.target)) {
        navbarToggle.classList.remove("active");
        navbarItems.classList.remove("active");
        document.body.classList.remove("navbar-active");
    }
})

const navLinks = document.querySelectorAll(".nav-link");

for (let index = 0; index < navLinks.length; index++) {
    const navLink = document.querySelectorAll(".nav-link")[index]
    navLink.addEventListener("click", () => {
        navbarToggle.classList.remove("active");
        navbarItems.classList.remove("active");
    })
}






// navLink.addEventListener("click", () => {
//     navbarToggle.classList.toggle("active");
//     navbarItems.classList.toggle("active");
// })