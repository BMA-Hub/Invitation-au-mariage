const intro = document.getElementById("intro");
const card = document.getElementById("card");

const seal = document.getElementById("seal");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");

let opened = false;

/****************************/
/* OUVERTURE */
/****************************/

seal.addEventListener("click",()=>{

if(opened) return;

opened=true;

/* sceau */

seal.animate([

{
transform:"translateX(-50%) scale(1)",
opacity:1
},

{
transform:"translateX(-50%) scale(1.4)",
opacity:0
}

],{

duration:500,
fill:"forwards"

});

/* rabat */

setTimeout(()=>{

flap.style.transform="rotateX(180deg)";
flap.style.zIndex="0";

},300);

/* lettre */

setTimeout(()=>{

letter.style.transform="translate(-50%,-230px)";

},800);

/* transition */

setTimeout(()=>{

intro.style.transition="1s";

intro.style.opacity="0";

},1800);

setTimeout(()=>{

intro.style.display="none";

card.style.display="block";

card.animate([

{
opacity:0,
transform:"translateY(80px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1200,
fill:"forwards",
easing:"ease"

});

},2600);

});

/****************************/
/* COMPTE A REBOURS */
/****************************/

const target = new Date("2026-10-03T15:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdown(){

const now = new Date().getTime();

const diff = target-now;

if(diff<=0){

document.getElementById("countdown").innerHTML="<h2>Bienvenue ❤️</h2>";

return;

}

days.textContent=Math.floor(diff/86400000);

hours.textContent=Math.floor(diff/3600000)%24;

minutes.textContent=Math.floor(diff/60000)%60;

seconds.textContent=Math.floor(diff/1000)%60;

}

countdown();

setInterval(countdown,1000);

/****************************/
/* EFFET 3D */
/****************************/

document.addEventListener("mousemove",(e)=>{

const paper=document.querySelector(".paper");

if(!paper) return;

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

paper.style.transform=`rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

const paper=document.querySelector(".paper");

if(paper){

paper.style.transform="rotateY(0deg) rotateX(0deg)";

}

});

/****************************/
/* PARTICULES DOREES */
/****************************/

for(let i=0;i<35;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"vw";

p.style.top=Math.random()*100+"vh";

p.style.animationDuration=6+Math.random()*8+"s";

p.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(p);

}
