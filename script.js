
const surpriseBtn = document.getElementById("surpriseBtn");

const secretMessage = document.getElementById("secretMessage");

surpriseBtn.addEventListener("click", function () {

    secretMessage.classList.toggle("hidden");

    if (secretMessage.classList.contains("hidden")) {
        surpriseBtn.textContent = "Open My Heart 💌";
    } else {
        surpriseBtn.textContent = "Hide My Message 💗";
    }

});

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");
    heart.textContent = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 700);

const musicBtn = document.getElementById("musicBtn");
const backgroundMusic = document.getElementById("backgroundMusic");

musicBtn.addEventListener("click", function () {

    if (backgroundMusic.paused) {
        backgroundMusic.play()
            .then(function () {
                musicBtn.textContent = "⏸️ Pause Our Song";
            })
            .catch(function () {
                alert("Please check your music file!");
            });
    } else {
        backgroundMusic.pause();
        musicBtn.textContent = "🎵 Play Our Song";
    }

});

const birthdayDate = new Date("2026-11-27T00:00:00+05:30").getTime();

const countdownTimer = setInterval(function () {

    const now = new Date().getTime();

    const difference = birthdayDate - now;

    if (difference <= 0) {

        clearInterval(countdownTimer);

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("birthday-wish").textContent =
            "Happy Birthday, Annee! 🎂💗 You deserve all the happiness in the world!";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}, 1000);

const letterBtn = document.getElementById("letterBtn");
const letterContent = document.getElementById("letterContent");

letterBtn.addEventListener("click", function () {

    letterContent.classList.toggle("hidden");

    if (letterContent.classList.contains("hidden")) {
        letterBtn.textContent = "Read My Letter 💌";
    } else {
        letterBtn.textContent = "Close My Letter 💗";
    }

});

const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");

giftBtn.addEventListener("click", function () {
    giftMessage.classList.toggle("hidden");

    if (giftMessage.classList.contains("hidden")) {
        giftBtn.textContent = "🎁";
    } else {
        giftBtn.textContent = "💝";
    }
});

function createHeartBurst() {
    const hearts = ["💗", "💖", "💕", "❤️", "💝"];

    const gift = document.getElementById("giftBtn");
    const rect = gift.getBoundingClientRect();

    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");

        heart.classList.add("burst-heart");
        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = (rect.left + rect.width / 2) + "px";
        heart.style.top = (rect.top + rect.height / 2) + "px";

        heart.style.setProperty(
            "--moveX",
            (Math.random() * 300 - 150) + "px"
        );

        heart.style.setProperty(
            "--moveY",
            (Math.random() * -250 - 50) + "px"
        );

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 1600);
    }
}

giftBtn.addEventListener("click", createHeartBurst);

const welcomeScreen = document.getElementById("welcomeScreen");
const openWebsiteBtn = document.getElementById("openWebsiteBtn");

openWebsiteBtn.addEventListener("click", function () {
    welcomeScreen.classList.add("closed");
});
