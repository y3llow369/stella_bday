// ======================================
// LOADER
// ======================================

const loader = document.getElementById("loader");
const openGift = document.getElementById("openGift");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

openGift.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
        mainContent.style.display = "block";
    }, 700);

    music.play();

    musicBtn.innerHTML = "⏸ Pause Music";

});

// ======================================
// MUSIC BUTTON
// ======================================

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

});

// ======================================
// FLOATING HEARTS
// ======================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (6 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}

setInterval(createHeart, 400);

// ======================================
// WISH JAR
// ======================================

const wishes = [

    "❤️ I wish your smile never fades.",

    "🐱 May every day make you happier.",

    "🌸 You deserve every happiness in the world.",

    "💕 Thank you for being my favorite person.",

    "✨ I promise to make more beautiful memories with you.",

    "🎂 Happy Birthday to the most amazing girl.",

    "💖 I love you more every single day.",

    "🌙 I'll always be here for you.",

    "🌹 You are my greatest blessing.",

    "🫶 Forever isn't enough with you."

];

const wishButton = document.getElementById("wishButton");
const wishText = document.getElementById("wishText");

wishButton.addEventListener("click", () => {

    const random = Math.floor(Math.random() * wishes.length);

    wishText.style.opacity = 0;

    setTimeout(() => {

        wishText.innerHTML = wishes[random];

        wishText.style.opacity = 1;

    }, 200);

});

// ======================================
// PHOTO ENLARGE
// ======================================

const images = document.querySelectorAll(".gallery img");

images.forEach(image => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "99999";

        const bigImage = document.createElement("img");

        bigImage.src = image.src;

        bigImage.style.maxWidth = "85%";
        bigImage.style.maxHeight = "85%";
        bigImage.style.borderRadius = "20px";
        bigImage.style.boxShadow = "0 20px 50px rgba(0,0,0,.4)";

        overlay.appendChild(bigImage);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});

// ======================================
// CLICK SPARKLES
// ======================================

document.addEventListener("click", function(e){

    for(let i=0;i<8;i++){

        const star = document.createElement("div");

        star.innerHTML = "✨";

        star.style.position = "fixed";
        star.style.left = e.clientX + "px";
        star.style.top = e.clientY + "px";
        star.style.pointerEvents = "none";
        star.style.fontSize = (14 + Math.random()*10) + "px";
        star.style.transition = "1s";
        star.style.zIndex = "99999";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.style.transform =
            `translate(${(Math.random()-0.5)*150}px,
            ${(Math.random()-0.5)*150}px)
            scale(0)`;

            star.style.opacity = "0";

        },50);

        setTimeout(()=>{

            star.remove();

        },1000);

    }

});

// ======================================
// PAGE TITLE ANIMATION
// ======================================

const titles = [

    "❤️ Happy Birthday ❤️",
    "🐱 I Love You ❤️",
    "💕 My Princess",
    "🎂 Happy Birthday"

];

let titleIndex = 0;

setInterval(()=>{

    document.title = titles[titleIndex];

    titleIndex++;

    if(titleIndex >= titles.length){

        titleIndex = 0;

    }

},2500);

// ======================================
// END
// ======================================


// ======================================
// REALTIME LOVE LETTER
// ======================================

const loveLetter = document.getElementById("loveLetter");

const letter = `Happy Birthday, my babydoll ❤️

Every moment spent with you has become one of my
                    favorite memories.

Thank you for making my life brighter, happier,
                    and filled with love like a star does in the night sky.

I pray that the universe grants you every dream your heart has ever whispered,
                    every wish you've ever made, and countless blessings beyond anything you could ever imagine.
                    You deserve a life filled with love, happiness, laughter, and all the beautiful miracles
                    this world has to offer.

 Yellow❤️.



`;
let index = 0;
let started = false;

const cursor = document.getElementById("cursor");

function typeLetter() {

    if (index < letter.length) {

        cursor.insertAdjacentText("beforebegin", letter.charAt(index));

        index++;

        setTimeout(typeLetter, 35);

    } else {

        cursor.style.animation = "none";
        cursor.style.opacity = "1";

    }

}

const letterSection = document.querySelector(".letter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !started) {

            started = true;

            setTimeout(typeLetter, 1200);

        }

    });

}, {
    threshold: 0.5
});

observer.observe(letterSection);