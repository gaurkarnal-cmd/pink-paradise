/* =======================================
   OUR LITTLE PINK UNIVERSE
   PART 4 - SCRIPT.JS
======================================= */

// ---------------------------
// LOADER
// ---------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },1500);

});


// ---------------------------
// START BUTTON
// ---------------------------

const startButton = document.getElementById("startButton");

startButton.addEventListener("click",()=>{

    document.getElementById("letter").scrollIntoView({

        behavior:"smooth"

    });

});


// ---------------------------
// FLOATING HEARTS
// ---------------------------

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20+Math.random()*30)+"px";

    heart.style.animationDuration = (5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);


// ---------------------------
// FALLING PETALS
// ---------------------------

function createPetal(){

    const petal = document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petal.style.animationDuration=(6+Math.random()*6)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,900);


// ---------------------------
// MOUSE SPARKLES
// ---------------------------

document.addEventListener("mousemove",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },700);

});


// ---------------------------
// SCROLL REVEAL
// ---------------------------

const sections=document.querySelectorAll(".section");

function revealSections(){

    sections.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();


// ---------------------------
// SURPRISE FLOWERS
// ---------------------------

const surpriseBtn=document.getElementById("surpriseBtn");

const flowerArea=document.getElementById("flowerArea");

surpriseBtn.addEventListener("click",()=>{

    flowerArea.innerHTML="";

    const flowers=["🌹","🌷","🌸","💐","🌺","🌼"];

    for(let i=0;i<25;i++){

        const flower=document.createElement("div");

        flower.className="flower";

        flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

        flowerArea.appendChild(flower);

    }

});
/* =======================================
   PART 5
   PASTE BELOW PART 4
=======================================*/


// ======================================
// RELATIONSHIP TIMER
// ======================================

// CHANGE THIS DATE ❤️
// Format: Year, Month(0-11), Day

const loveDate = new Date(2025,7,30,0,0,0);

function updateTimer(){

    const now = new Date();

    const difference = now - loveDate;

    const days = Math.floor(difference / (1000*60*60*24));

    const hours = Math.floor(
        (difference/(1000*60*60))%24
    );

    const minutes = Math.floor(
        (difference/(1000*60))%60
    );

    const seconds = Math.floor(
        (difference/1000)%60
    );

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

}

updateTimer();

setInterval(updateTimer,1000);


// ======================================
// TYPEWRITER EFFECT
// ======================================

const typingElement = document.getElementById("typing");

const originalText = typingElement.innerHTML;

typingElement.innerHTML="";

let letterIndex=0;

function typeLetter(){

    if(letterIndex<originalText.length){

        typingElement.innerHTML += originalText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,28);

    }

}

setTimeout(typeLetter,1800);


// ======================================
// PHOTO CLICK EFFECT
// ======================================

const photos=document.querySelectorAll(".photo img");

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        photo.style.transform="scale(1.15)";

        setTimeout(()=>{

            photo.style.transform="scale(1)";

        },300);

    });

});


// ======================================
// REASON CARD EFFECT
// ======================================

const cards=document.querySelectorAll(".reason-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(1.1)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },300);

    });

});


// ======================================
// HEART EXPLOSION
// ======================================

function heartExplosion(){

    for(let i=0;i<30;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.className="heart";

        heart.style.left=(45+Math.random()*10)+"vw";

        heart.style.bottom="50vh";

        heart.style.animationDuration=(2+Math.random()*2)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}

surpriseBtn.addEventListener("click",heartExplosion);


// ======================================
// SECRET MESSAGE
// ======================================

let clicks=0;

document.body.addEventListener("dblclick",()=>{

    clicks++;

    if(clicks===1){

        setTimeout(()=>{

            alert("💖 You are the best thing that ever happened to me.");

        },300);

    }

});


// ======================================
// HERO CARD TILT
// ======================================

const glass=document.querySelector(".glass-card");

glass.addEventListener("mousemove",(e)=>{

    const rect=glass.getBoundingClientRect();

    const x=e.clientX-rect.left;

    const y=e.clientY-rect.top;

    const rotateY=(x-rect.width/2)/25;

    const rotateX=(rect.height/2-y)/25;

    glass.style.transform=

        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

glass.addEventListener("mouseleave",()=>{

    glass.style.transform="rotateX(0) rotateY(0)";

});


// ======================================
// RANDOM LOVE QUOTES
// ======================================

const quotes=[

"You are my favourite person ❤️",

"You make every day magical 🌸",

"I love seeing you smile 😊",

"My heart is always with you 💖",

"Forever isn't enough with you 💕",

"You are my safe place 🥰"

];

setInterval(()=>{

console.log(

quotes[Math.floor(Math.random()*quotes.length)]

);

},7000);


// ======================================
// END
// ======================================

console.log("❤️ Pink Universe Loaded Successfully ❤️");