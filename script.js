/*==================================================
PARTIE 3 - SCRIPT PREMIUM
==================================================*/

const intro = document.getElementById("intro");
const invitation = document.getElementById("invitation");

const seal = document.getElementById("seal");
const flap = document.querySelector(".flap");
const paper = document.querySelector(".paper");

let opened = false;

/*******************************************
OUVERTURE ENVELOPPE
*******************************************/

seal.addEventListener("click",()=>{

if(opened) return;

opened=true;

/* disparition du sceau */

seal.animate([

{
transform:"translateX(-50%) scale(1)"
},

{
transform:"translateX(-50%) scale(1.3)",
opacity:0
}

],{

duration:500,
fill:"forwards"

});

/* ouverture du rabat */

setTimeout(()=>{

flap.style.transform="rotateX(180deg)";
flap.style.zIndex="0";

},300);

/* sortie du papier */

setTimeout(()=>{

paper.style.transform="translate(-50%,-230px)";

},700);

/* affichage de la carte */

setTimeout(()=>{

intro.style.transition=".9s";
intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

invitation.style.display="block";

setTimeout(()=>{

invitation.style.opacity="1";

window.scrollTo({

top:0,
behavior:"smooth"

});

},50);

},900);

},1700);

});


/*******************************************
COMPTE A REBOURS
*******************************************/

const weddingDate = new Date("2026-10-03T15:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = weddingDate-now;

if(distance<=0){

document.getElementById("countdown").innerHTML=

"<h2 style='grid-column:1/-1;text-align:center;color:#c7a35a;'>Aujourd'hui est le grand jour ❤️</h2>";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

daysEl.textContent=days;
hoursEl.textContent=hours;
minutesEl.textContent=minutes;
secondsEl.textContent=seconds;

}

const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");

updateCountdown();

setInterval(updateCountdown,1000);

/*******************************************
PARALLAXE CARTE
*******************************************/

document.addEventListener("mousemove",(e)=>{

const card=document.querySelector(".card");

if(!card) return;

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

card.style.transform=

`rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

const card=document.querySelector(".card");

if(card){

card.style.transform="rotateY(0) rotateX(0)";

}

});

/*******************************************
APPARITION AU SCROLL
*******************************************/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.15

});

document.querySelectorAll(".infos div,.maps,#countdown div,.subtitle,.divider,h1,h4")

.forEach(el=>observer.observe(el));

/*******************************************
PARTICULES DOREES
*******************************************/

const particles=document.getElementById("particles");

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.style.position="absolute";

p.style.width=Math.random()*4+2+"px";

p.style.height=p.style.width;

p.style.borderRadius="50%";

p.style.background="#d6b36a";

p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";

p.style.opacity=Math.random()*.5+.2;

p.style.animation=

`float ${8+Math.random()*10}s linear infinite`;

particles.appendChild(p);

}
