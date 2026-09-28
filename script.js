/* =========================================================
   THARUN M - PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* ================= NAVBAR ================= */

    const navbar = document.querySelector(".navbar");

    function handleNavbar() {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleNavbar);

    handleNavbar();


    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* ================= REVEAL ANIMATION ================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        revealElements.forEach(element => {

            element.classList.add("animate");

        });


        const revealObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(entry.target);

                        }

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* ================= ACTIVE NAV LINK ================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    const sectionObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const id = entry.target.getAttribute("id");

                        navLinks.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${id}`
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },

            {
                rootMargin: "-35% 0px -55% 0px"
            }

        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* ================= CURSOR GLOW ================= */

    const cursorGlow =
        document.querySelector(".cursor-glow");


    if (cursorGlow && window.innerWidth > 760) {

        window.addEventListener("mousemove", event => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        });

    }


    /* ================= CERTIFICATE PROTECTION ================= */

    const certificateImages =
        document.querySelectorAll(".certificate-image");


    certificateImages.forEach(image => {

        image.addEventListener("contextmenu", event => {

            event.preventDefault();

        });


        image.addEventListener("dragstart", event => {

            event.preventDefault();

        });

    });


    /* ================= IMAGE ERROR HANDLING ================= */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", () => {

            console.warn(
                "Image could not be loaded:",
                image.src
            );

        });

    });


    /* ================= SMOOTH ANCHOR ================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {

                return;

            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ================= CURRENT YEAR ================= */

    const yearElement =
        document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* ================= PROJECT IMAGE ================= */

    const projectImage =
        document.querySelector(".project-image");


    if (projectImage) {

        projectImage.addEventListener("error", () => {

            projectImage.style.display = "none";

            const wrapper =
                projectImage.closest(
                    ".project-image-wrapper"
                );

            if (wrapper) {

                wrapper.classList.add(
                    "image-not-found"
                );

            }

        });

    }


    /* ================= CONSOLE ================= */

    console.log(
        "%c THARUN M Portfolio ",
        "background:#00e5ff;color:#001018;font-weight:bold;padding:8px;"
    );

    console.log(
        "AI & Data Science | Python | Web Development | Generative AI"
    );

});