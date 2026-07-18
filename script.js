const message = `Pyari Butki 😚❤️

Hamesha khyal rakhti hai...
Samjhti hai...
Saath rehti hai...

Nakchidi si 👅❤️
Har baat maan leti hai nakhre karke 😚

Chui Mui si Butki ❤️

Kitni pyari lag rhi thi jab pehli baar mila tha. 😚

Har moment tere saath bahut pyara tha 👉👈❤️

Thank You Hamesha Mere Sath Rehne Ke Liye ❤️

Love You Butki Forever 😚❤️`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

const images = [
    "photo1.png",
    "photo2.png",
    "photo3.png",
    "photo4.png",
    "photo5.png"
];

let current = 0;

setInterval(() => {
    current = (current + 1) % images.length;
    document.getElementById("slide").src = images[current];
}, 3000);

function openGift() {
    document.getElementById("giftBox").style.display = "none";
    document.getElementById("mainPage").style.display = "flex";

    document.getElementById("bgmusic").play();

    typeWriter();
}

function nextSection() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("lastPage").style.display = "flex";
}

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);