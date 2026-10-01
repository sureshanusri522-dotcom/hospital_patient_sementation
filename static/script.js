// ===============================
// Loading Animation
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function () {

            document.getElementById("loading").style.display = "flex";

        });

    }

});

// ===============================
// Heart Beat Animation
// ===============================

setInterval(function(){

    let heart = document.querySelector(".heartbeat");

    if(heart){

        heart.classList.toggle("beat");

    }

},700);

// ===============================
// Risk Meter Animation
// ===============================

window.onload = function(){

let meter = document.querySelector(".meter-fill");

if(meter){

meter.style.width="90%";

}

}

// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;

setTimeout(updateCounter,20);

}
else{

counter.innerText=target;

}

}

updateCounter();

});

// ===============================
// Dark Mode
// ===============================

function darkMode(){

document.body.classList.toggle("dark");

}

// ===============================
// Scroll Animation
// ===============================

window.addEventListener("scroll",()=>{

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

});

// ===============================
// Current Date
// ===============================

const today=new Date();

const date=today.toLocaleDateString();

const d=document.getElementById("today");

if(d){

d.innerHTML=date;

}

// ===============================
// Time
// ===============================

function updateClock(){

const now=new Date();

const time=now.toLocaleTimeString();

const clock=document.getElementById("clock");

if(clock){

clock.innerHTML=time;

}

}

setInterval(updateClock,1000);

// ===============================
// Welcome Message
// ===============================

let hour=new Date().getHours();

let msg="";

if(hour<12){

msg="Good Morning Doctor";

}
else if(hour<17){

msg="Good Afternoon Doctor";

}
else{

msg="Good Evening Doctor";

}

let welcome=document.getElementById("welcome");

if(welcome){

welcome.innerHTML=msg;

}

// ===============================
// Prediction Popup
// ===============================

const result=document.querySelector(".result");

if(result){

result.animate(

[
{opacity:0,transform:"translateY(50px)"},
{opacity:1,transform:"translateY(0px)"}
],

{

duration:1200

}

);

}