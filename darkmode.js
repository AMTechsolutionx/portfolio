/* ==========================================
   DARKMODE.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Theme Button
    const themeBtn = document.getElementById("theme-toggle");

    // Body
    const body = document.body;

    // Icon
    const icon = themeBtn ? themeBtn.querySelector("i") : null;

    /* ==========================
       Load Saved Theme
    ========================== */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        body.classList.add("light-mode");

        if (icon) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        }

    }

    /* ==========================
       Theme Toggle
    ========================== */

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            body.classList.toggle("light-mode");

            if (body.classList.contains("light-mode")) {

                localStorage.setItem("theme", "light");

                if (icon) {

                    icon.classList.remove("fa-moon");

                    icon.classList.add("fa-sun");

                }

            } else {

                localStorage.setItem("theme", "dark");

                if (icon) {

                    icon.classList.remove("fa-sun");

                    icon.classList.add("fa-moon");

                }

            }

        });

    }

    /* ==========================
       Optional Keyboard Shortcut
       Press "T"
    ========================== */

    document.addEventListener("keydown", (event) => {

        if (event.key.toLowerCase() === "t") {

            themeBtn.click();

        }

    });

});