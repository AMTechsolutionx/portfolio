/* ==========================================
   COUNTER.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
    let started = false;

    function startCounters() {

        const counterSection = document.querySelector(".counter-section");

        if (!counterSection) return;

        const sectionTop = counterSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100 && !started) {

            started = true;

            counters.forEach(counter => {

                const target = parseInt(counter.getAttribute("data-target"));
                const suffix = counter.getAttribute("data-suffix") || "";

                const duration = 2000;
                const step = target / (duration / 20);

                let count = 0;

                function updateCounter() {

                    count += step;

                    if (count < target) {

                        counter.innerText = Math.ceil(count) + suffix;
                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + suffix;

                    }

                }

                updateCounter();

            });

        }

    }

    window.addEventListener("scroll", startCounters);
    startCounters();

});