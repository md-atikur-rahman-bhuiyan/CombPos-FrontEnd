

jQuery(document).ready(function(){
    gsap.to(".hero-icon-light", {duration: 2, y: 200});
    gsap.to(".hero-icon-light-2", {duration: 5, y: 300});
    gsap.to("#packages-panel", {duration: 2, scrollTo: {y: 400, x: 200}, ease: "power2"});
});