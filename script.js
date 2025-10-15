
const aboutLink = document.querySelector(".about-link");
const aboutSection = document.querySelector("#about");

aboutLink.addEventListener("click", () => {
    aboutSection.scrollIntoView();
});
