// Countdown Timer — promo ends 31 July 2026
const countdown = () => {
    const endDate = new Date("July 31, 2026 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = endDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (difference <= 0) {
        daysEl.innerText = "00";
        hoursEl.innerText = "00";
        minutesEl.innerText = "00";
        secondsEl.innerText = "00";
        return;
    }

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const timeDays = Math.floor(difference / days);
    const timeHours = Math.floor((difference % days) / hours);
    const timeMinutes = Math.floor((difference % hours) / minutes);
    const timeSeconds = Math.floor((difference % minutes) / seconds);

    const pad = (n) => (n < 10 ? "0" + n : String(n));

    daysEl.innerText = pad(timeDays);
    hoursEl.innerText = pad(timeHours);
    minutesEl.innerText = pad(timeMinutes);
    secondsEl.innerText = pad(timeSeconds);
};

setInterval(countdown, 1000);
countdown();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll Reveal Animation
const reveal = () => {
    document.querySelectorAll(".reveal").forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);
reveal();
