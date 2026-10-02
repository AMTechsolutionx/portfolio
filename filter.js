/* ==========================================
   FILTER.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Filter Buttons
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Project Cards
    const projects = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Remove active class
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add active class
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            projects.forEach(project => {

                if (filter === "all") {

                    project.style.display = "block";

                    setTimeout(() => {
                        project.style.opacity = "1";
                        project.style.transform = "scale(1)";
                    }, 100);

                }

                else if (project.classList.contains(filter)) {

                    project.style.display = "block";

                    setTimeout(() => {
                        project.style.opacity = "1";
                        project.style.transform = "scale(1)";
                    }, 100);

                }

                else {

                    project.style.opacity = "0";

                    project.style.transform = "scale(.8)";

                    setTimeout(() => {
                        project.style.display = "none";
                    }, 300);

                }

            });

        });

    });

});