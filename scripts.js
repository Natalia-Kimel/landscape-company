document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.section-wrap-sm');
    const progressBars = document.querySelectorAll('.progress-bar');
    let animated = false;

    function animateProgressBars() {
        if (animated) return;
        progressBars.forEach(bar => {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = value + '%';
        });
        animated = true;
    }

    window.addEventListener('scroll', function () {
        animateProgressBars();
    });
});

document.querySelectorAll('.main-wrapper .nav li a, .btn-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId); 

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
    const navWrap = document.getElementsByClassName('navbar-collapse')[0];
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        navWrap.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    navWrap.addEventListener('click', function () {
            navWrap.classList.remove('active');
            body.classList.remove('no-scroll');
    });
});