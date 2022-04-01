const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".list");
const navLogo = document.querySelector(".logo");
const body = document.querySelector("body");

//   Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active"); 
};

menu.addEventListener('click', mobileMenu);

gsap.registerPlugin(ScrollTrigger);
gsap.from(".hpara", {
  scrollTrigger: {
    trigger: ".hpara",
    toggleActions: "restart ",
  },
  duration: 1.5,
  opacity: 1,
  y: -300,
  stagger: 0.12,
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".paragraph", {
  scrollTrigger: {
    trigger: ".paragraph",
    toggleActions: "restart ",
  },
  duration: 1.5,
  opacity: 1,
  x: -300,
  stagger: 0.12,
});
gsap.registerPlugin(ScrollTrigger);
gsap.from(".image2", {
  scrollTrigger: {
    trigger: ".image2",
    toggleActions: "restart ",
  },
  duration: 1.5,
  opacity: 1,
  x: 300,
  stagger: 0.12,
});
gsap.registerPlugin(ScrollTrigger);
gsap.from(".photo", {
  scrollTrigger: {
    trigger: ".photo",
    toggleActions: "restart ",
  },
  duration: 1.5,
  opacity: 1,
  x: -300,
  stagger: 0.12,
});
gsap.registerPlugin(ScrollTrigger);
gsap.from(".cp", {
  scrollTrigger: {
    trigger: ".cp",
    toggleActions: "restart ",
  },
  duration: 1.5,
  opacity: 1,
  y: -300,
  stagger: 0.12,
});
gsap.registerPlugin(ScrollTrigger);
gsap.from(".service2", {
  scrollTrigger: {
    trigger: ".service2",
    toggleActions: "restart ",
  },
  duration: 1.5,
  opacity: 1,
  y: 300,
  stagger: 0.12,
});

var args = {
  arrowRight: ".arrow-right",
  arrowLeft: ".arrow-left",
  speed: 700,
  slideDuration: 4000,
};

$(".carousel").BannerSlide(args);
