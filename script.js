/* =========================================================
   NAVBAR
========================================================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });



/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach((element, index) => {

        element.style.transitionDelay =
            `${Math.min(index % 5, 4) * 70}ms`;

        observer.observe(element);

    });



/* =========================================================
   PARTICLE SYSTEM
========================================================= */

const canvas =
    document.getElementById(
        "particleCanvas"
    );

const ctx =
    canvas.getContext("2d");


let particles = [];


let mouse = {

    x: null,

    y: null,

    radius: 150

};



/* =========================================================
   CANVAS RESIZE
========================================================= */

function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);



/* =========================================================
   MOUSE
========================================================= */

window.addEventListener(
    "mousemove",
    event => {

        mouse.x =
            event.clientX;

        mouse.y =
            event.clientY;

    }
);


window.addEventListener(
    "mouseout",
    () => {

        mouse.x = null;

        mouse.y = null;

    }
);



/* =========================================================
   PARTICLE CLASS
========================================================= */

class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.size =
            Math.random() *
            1.8 + .4;

        this.speedX =
            (Math.random() - .5) *
            .35;

        this.speedY =
            (Math.random() - .5) *
            .35;

        this.opacity =
            Math.random() *
            .6 + .2;

    }


    update() {

        this.x +=
            this.speedX;

        this.y +=
            this.speedY;



        /* Screen wrapping */

        if (this.x < 0)
            this.x = canvas.width;


        if (this.x > canvas.width)
            this.x = 0;


        if (this.y < 0)
            this.y = canvas.height;


        if (this.y > canvas.height)
            this.y = 0;



        /* Mouse interaction */

        if (
            mouse.x !== null &&
            mouse.y !== null
        ) {

            const dx =
                this.x -
                mouse.x;

            const dy =
                this.y -
                mouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                mouse.radius
            ) {

                const angle =
                    Math.atan2(
                        dy,
                        dx
                    );


                const force =
                    (
                        mouse.radius -
                        distance
                    ) /
                    mouse.radius;


                this.x +=
                    Math.cos(angle) *
                    force *
                    1.8;


                this.y +=
                    Math.sin(angle) *
                    force *
                    1.8;

            }

        }

    }


    draw() {

        ctx.beginPath();


        ctx.arc(

            this.x,

            this.y,

            this.size,

            0,

            Math.PI * 2

        );


        ctx.fillStyle =
            `rgba(
                150,
                140,
                255,
                ${this.opacity}
            )`;


        ctx.fill();

    }

}



/* =========================================================
   CREATE PARTICLES
========================================================= */

function createParticles() {

    particles = [];


    const amount =
        window.innerWidth < 700
            ? 55
            : 110;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


createParticles();



/* =========================================================
   CONNECT PARTICLES
========================================================= */

function connectParticles() {

    for (
        let a = 0;
        a < particles.length;
        a++
    ) {


        for (
            let b = a + 1;
            b < particles.length;
            b++
        ) {


            const dx =
                particles[a].x -
                particles[b].x;


            const dy =
                particles[a].y -
                particles[b].y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 110) {


                const opacity =
                    1 -
                    distance / 110;


                ctx.beginPath();


                ctx.strokeStyle =
                    `rgba(
                        124,
                        108,
                        255,
                        ${opacity * .12}
                    )`;


                ctx.lineWidth =
                    .6;


                ctx.moveTo(

                    particles[a].x,

                    particles[a].y

                );


                ctx.lineTo(

                    particles[b].x,

                    particles[b].y

                );


                ctx.stroke();

            }

        }

    }

}



/* =========================================================
   PARTICLE ANIMATION
========================================================= */

function animateParticles() {


    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    connectParticles();


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();



/* =========================================================
   RESPONSIVE PARTICLES
========================================================= */

window.addEventListener(
    "resize",
    () => {

        createParticles();

    }
);