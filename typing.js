/* ==========================================
   TYPING.JS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Check if Typed.js is loaded
    if (typeof Typed !== "undefined") {

        new Typed("#typing", {

            strings: [
                "Full Stack Developer",
                "Backend Developer",
                "Frontend Developer",
                "JavaScript Developer",
                "MySQL Database Designer",
                "Bootstrap Expert",
                "JQuery and Ajax",
                "Web Application Developer",
                "WordPress Developer"
            ],

            typeSpeed: 90,
            backSpeed: 40,
            backDelay: 1800,
            startDelay: 500,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|"

        });

    } else {

        console.error("Typed.js library is not loaded.");

    }

});