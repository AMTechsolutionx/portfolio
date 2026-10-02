/* ==========================================
   SKILLS.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const skillSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".progress-bar");

    let animationStarted = false;

    function animateSkills() {

        if (!skillSection || animationStarted) return;

        const sectionTop = skillSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 120;

        if (sectionTop < triggerPoint) {

            animationStarted = true;

            progressBars.forEach((bar, index) => {

                const width = bar.dataset.width;

                setTimeout(() => {

                    bar.style.width = width;

                }, index * 150);

            });

        }

    }

    animateSkills();

    window.addEventListener("scroll", animateSkills);

});