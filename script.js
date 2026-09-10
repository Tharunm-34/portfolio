/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       NAVBAR
    ================================================= */

    const navbar =
        document.getElementById("navbar");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });



    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            function () {

                navMenu.classList.toggle(
                    "active"
                );

            }
        );


        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "active"
                    );

                }
            );

        });

    }



    /* =================================================
       SCROLL REVEAL
       
       IMPORTANT:
       Elements are visible by default.
       JS only adds animation.
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                                entry.target.classList.remove(
                                    "animate"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "animate"
                );

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "show"
                );

            }
        );

    }



    /* =================================================
       CURSOR GLOW
    ================================================= */

    const cursorGlow =
        document.querySelector(
            ".cursor-glow"
        );


    if (cursorGlow) {

        document.addEventListener(
            "mousemove",
            function (event) {

                cursorGlow.style.left =
                    event.clientX + "px";

                cursorGlow.style.top =
                    event.clientY + "px";

            }
        );

    }



    /* =================================================
       CERTIFICATE IMAGE PROTECTION
    ================================================= */

    const certificateImages =
        document.querySelectorAll(
            ".certificate-image"
        );


    certificateImages.forEach(
        function (image) {

            image.setAttribute(
                "draggable",
                "false"
            );


            image.addEventListener(
                "contextmenu",
                function (event) {

                    event.preventDefault();

                }
            );


            image.addEventListener(
                "dragstart",
                function (event) {

                    event.preventDefault();

                }
            );

        }
    );



    /* =================================================
       PREVENT RIGHT CLICK
    ================================================= */

    document.addEventListener(
        "contextmenu",
        function (event) {

            if (
                event.target.tagName === "IMG"
            ) {

                event.preventDefault();

            }

        }
    );



    /* =================================================
       IMAGE ERROR CHECK
    ================================================= */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        function (image) {

            image.addEventListener(
                "error",
                function () {

                    console.warn(
                        "Image not found:",
                        image.getAttribute(
                            "src"
                        )
                    );

                }
            );

        }
    );



    /* =================================================
       SMOOTH NAVIGATION
    ================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );



    /* =================================================
       CONSOLE
    ================================================= */

    console.log(
        "%cTHARUN M Portfolio",
        "color:#62d9ff;font-size:20px;font-weight:bold;"
    );

    console.log(
        "Website loaded successfully."
    );

});
