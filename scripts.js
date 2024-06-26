// Function to update the current time with animation
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    const timeElement = document.getElementById('current-time');

    // Apply fade-out effect
    timeElement.classList.remove('fade-in');
    timeElement.classList.add('fade-out');

    // Update the time after the fade-out effect completes
    setTimeout(() => {
        timeElement.innerText = `${currentTime}`;
        // Apply fade-in effect
        timeElement.classList.remove('fade-out');
        timeElement.classList.add('fade-in');
    }, 1000);
}

// Initial time update
updateTime();

// Calculate the delay until the next minute
const now = new Date();
const delay = (60 - now.getSeconds()) * 1000;

// Set timeout to update time at the start of the next minute
setTimeout(() => {
    updateTime();
    setInterval(updateTime, 60000); // Update the time every minute
}, delay);
