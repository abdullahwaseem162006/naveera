// approve-script.js
const noButton = document.querySelector('.no-button'); // Only declare once

// Remove previous click handler and keep this one
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.position = 'absolute';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});

let noClickCount = 0;
const messages = [
    "Are you sure? 😢",
    "Think again! 💔",
    "Babes, think again! 😭",
    "My heart is breaking... 💔",
    "Please reconsider! 🥺",
    "I'll keep asking... 🌹",
    "You can't say no forever! 😘",
    "Okay, I accept your playful denial ❤️"
];

noButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page refresh
    showPopupMessage();
    moveButtonRandomly();
});

function showPopupMessage() {
    const popup = document.createElement('div');
    popup.className = 'popup-message';
    
    const messageIndex = Math.min(noClickCount, messages.length - 1);
    popup.innerHTML = messages[messageIndex] + getPopupEmoji(noClickCount);
    
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateY(0)';
    }, 10);

    setTimeout(() => {
        popup.remove();
    }, 2000);

    noClickCount = (noClickCount + 1) % messages.length;
}

function getPopupEmoji(count) {
    const emojis = ['😢', '💔', '😭', '🥀', '🌹', '❤️🩹', '💌', '💝'];
    return `<span class="popup-emoji">${emojis[count % emojis.length]}</span>`;
}

function moveButtonRandomly() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    
    noButton.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noButton.style.animation = '';
    }, 500);
}

// Video control functions
function playVideo() {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('loveVideo');
    
    overlay.style.display = 'flex';
    video.play();
    document.body.style.background = 'linear-gradient(135deg, #ff69b4, #ff1493)';
}

function closeVideo() {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('loveVideo');
    
    video.pause();
    video.currentTime = 0;
    overlay.style.display = 'none';
    document.body.style.background = 'linear-gradient(135deg, #ff69b4, #ffb6c1)';
}
// In approve-script.js
function playVideo() {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('loveVideo');
    
    // Show the video overlay
    overlay.style.display = 'flex';
    
    // Start playing the video
    video.play().catch(error => {
        console.log('Video play failed:', error);
    });
    
    // Change background for better contrast
    document.body.style.background = 'linear-gradient(135deg, #ff69b4, #ff1493)';
}

function closeVideo() {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('loveVideo');
    
    // Pause and reset video
    video.pause();
    video.currentTime = 0;
    
    // Hide overlay
    overlay.style.display = 'none';
    
    // Restore original background
    document.body.style.background = 'linear-gradient(135deg, #ff69b4, #ffb6c1)';
}