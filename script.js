document.addEventListener('DOMContentLoaded', () => {
    const navOpenBtn = document.querySelector('.nav-open-btn');
    const navCloseBtn = document.querySelector('.nav-close-btn');
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('.header');

    // Handle navigation open and close
    navOpenBtn.addEventListener('click', () => {
        navbar.classList.add('active');
        if (overlay) overlay.classList.add('active');
    });

    navCloseBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    });

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});