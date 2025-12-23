// Countdown Timer
const countdown = () => {
    const endDate = new Date("December 31, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const timeDays = Math.floor(difference / days);
    const timeHours = Math.floor((difference % days) / hours);
    const timeMinutes = Math.floor((difference % hours) / minutes);
    const timeSeconds = Math.floor((difference % minutes) / seconds);

    document.getElementById("days").innerText = timeDays < 10 ? "0" + timeDays : timeDays;
    document.getElementById("hours").innerText = timeHours < 10 ? "0" + timeHours : timeHours;
    document.getElementById("minutes").innerText = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    document.getElementById("seconds").innerText = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;
};

setInterval(countdown, 1000);
countdown();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
reveal(); // Initial check

