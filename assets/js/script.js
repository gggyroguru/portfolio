const profile = document.querySelector("#profile");
const background = document.querySelector(".background");

profile.addEventListener("mouseenter", () => {
    background.style.backgroundColor = "#ffca66";
})

profile.addEventListener("mouseleave", () => {
    background.style.backgroundColor = "#ffdb66";
})

const profile2 = document.querySelector("#profile2");
const background2 = document.querySelector(".background2");

profile2.addEventListener("mouseenter", () => {
    background2.style.backgroundColor = "#ffca66";
})

profile2.addEventListener("mouseleave", () => {
    background2.style.backgroundColor = "#ffdb66";
})