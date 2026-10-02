/* ==========================================
   CURSOR.JS (DOT ONLY)
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Create Dot Cursor
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    // Move Cursor
    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    // Hover Effect
    const hoverItems = document.querySelectorAll(
        "a, button, .btn, .nav-link, .project-card, .service-card, .skill-card, .contact-box"
    );

    hoverItems.forEach(item => {

        item.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-hover");
        });

        item.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-hover");
        });

    });

    // Hide when mouse leaves window
    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
    });

});