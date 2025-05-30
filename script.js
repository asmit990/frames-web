
const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (event) => {
  const { x, y } = event;
  crsr.style.left = `${x}px`;
  crsr.style.top = `${y}px`;
  blur.style.left = `${x - 250}px`;
  blur.style.top = `${y - 250}px`;
});

// Navbar hover effect
const h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    crsr.style.transform = "scale(3)";
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", () => {
    crsr.style.transform = "scale(1)";
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

// GSAP Animations
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = mobileMenu.querySelector('.close-btn');

// Function to toggle mobile menu
function toggleMenu() {
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
}


hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


mobileMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    toggleMenu();
  }
});