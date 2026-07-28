// ==========================
// Chargement de la page
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1600);

});


// ==========================
// Compte à rebours
// ==========================

const weddingDate = new Date("2026-10-03T15:00:00").getTime();

function countdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("countdown").innerHTML = `
        <h2 style="width:100%;text-align:center;color:#c6a76a">
            Aujourd'hui est le grand jour ❤️
        </h2>`;

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

countdown();

setInterval(countdown,1000);


// ==========================
// Apparition au scroll
// ==========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".item,.message-card,.card")
.forEach(el=>observer.observe(el));


// ==========================
// Effet flottant
// ==========================

const card = document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2 - e.clientX)/45;

    const y = (window.innerHeight/2 - e.clientY)/45;

    card.style.transform =
        `rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

    card.style.transform="rotateX(0) rotateY(0)";

});
