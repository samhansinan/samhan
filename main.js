var typed = new Typed(".text", {
    strings: ["Undergraguate Software engineer"],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



function toggleMenu() {
    const nav = document.querySelector('.header .nav');
    const hamburger = document.querySelector('.header .hamburger');
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
}