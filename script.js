
// Mobile Navigation

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("show");

    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("show")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Close Menu After Clicking Navigation Link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuIcon.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});

// Introduction Video Autoplay

const introVideo = document.getElementById("introVideo");

introVideo.muted = true;

const playIntroVideo = () => {

    introVideo.play().catch(error => {
        console.log("Video autoplay requires browser permission.");
    });

};

window.addEventListener("load", playIntroVideo);

// Sound Toggle

const soundBtn = document.getElementById("soundBtn");

soundBtn.addEventListener("click", () => {

    introVideo.muted = !introVideo.muted;

    const icon = soundBtn.querySelector("i");

    if (introVideo.muted) {

        icon.classList.replace("fa-volume-high", "fa-volume-xmark");

    } else {

        icon.classList.replace("fa-volume-xmark", "fa-volume-high");

    }

});

// Active Navigation on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
