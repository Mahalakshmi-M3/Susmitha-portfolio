const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();

const introVideo = document.querySelector(".intro-video");
introVideo.addEventListener("play", () => {
  introVideo.closest(".video-card").classList.add("is-playing");
});
introVideo.addEventListener("pause", () => {
  introVideo.closest(".video-card").classList.remove("is-playing");
});
