const messages = [
    "Are you sure? 🫠",
    "Really sure?? 🤔",
    "Are you positive? 🫠",
    "Pookie Wookie please... 😖",
    "Just think about it again! 😥",
    "If you say yes, I will be really sad...... 😫",
    "I will be very sad... 😞",
    "I will be very very very sad... 😭",
    "Ok fine, I will stop asking... 😥",
    "Just kidding, say no please! 💖"
];

let mIndex = 0;

function YesClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    yesButton.textContent = messages[mIndex];
    mIndex = (mIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = currentSize * 2 + "px";
}

function NoClick() {
    window.location.href = "no_page.html";
}