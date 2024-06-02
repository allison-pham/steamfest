document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Set the target date and time in your local time zone
    const targetDate = new Date('2024-06-10T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    updateCountdown(); // Initial call to set the countdown immediately
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const finalValue = parseInt(counter.getAttribute('data-final-value'));
        const duration = 500; // Animation duration in milliseconds
        const increment = finalValue / duration;

        let currentValue = 0;
        const updateCounter = () => {
            if (currentValue >= finalValue) {
                counter.textContent = finalValue;
                return;
            }

            currentValue += increment;
            counter.textContent = Math.ceil(currentValue);
            setTimeout(updateCounter, 1);
        };

        updateCounter();
    });
});
