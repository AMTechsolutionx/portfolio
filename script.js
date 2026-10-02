/* ==========================================
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       PRELOADER
    ========================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", function () {

        if (loader) {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            loader.style.transition = "0.6s";

        }

    });

    /* =========================
       STICKY NAVBAR
    ========================== */

    const navbar = document.querySelector(".glass-nav");

    window.addEventListener("scroll", function () {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /* =========================
       BACK TO TOP
    ========================== */

    const backBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (!backBtn) return;

        if (window.scrollY > 400) {

            backBtn.style.display = "block";

        } else {

            backBtn.style.display = "none";

        }

    });

    if (backBtn) {

        backBtn.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* =========================
       SCROLL PROGRESS BAR
    ========================== */

    const progress = document.getElementById("progress-bar");

    window.addEventListener("scroll", function () {

        if (!progress) return;

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =

            document.documentElement.scrollHeight -

            document.documentElement.clientHeight;

        const percent = (scrollTop / scrollHeight) * 100;

        progress.style.width = percent + "%";

    });

    /* =========================
       SMOOTH NAVIGATION
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /* =========================
       ACTIVE NAV LINK
    ========================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (pageYOffset >= sectionTop) {

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

    /* =========================
       REVEAL ANIMATION
    ========================== */

    const reveals = document.querySelectorAll(".reveal");

    function revealElements() {

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            const visible = 120;

            if (top < window.innerHeight - visible) {

                item.classList.add("active");

            }

        });

    }

    revealElements();

    window.addEventListener("scroll", revealElements);

    /* =========================
       PARALLAX HERO
    ========================== */

    const heroImage = document.querySelector(".hero-image img");

    window.addEventListener("mousemove", function (e) {

        if (!heroImage) return;

        const x = (window.innerWidth / 2 - e.pageX) / 40;

        const y = (window.innerHeight / 2 - e.pageY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});