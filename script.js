// side Slider Toggle Function
function toggleSlider() {
const Sideslider = document.getElementById('side-slider');
Sideslider.classList.toggle('active');
}

// script for record slider 
const slider = document.querySelector(".slider");
const slideimage = document.querySelectorAll(".img");

let slidecounter = 1;
let length = slideimage.length;

// to creating a button div 
const control = document.querySelector('.control');
for(let i = 0; i < length; i++){
    const div = document.createElement("div");
    div.className = "button";
    control.appendChild(div);
}

// reset the background color of div buttons
const buttons = document.querySelectorAll(".button");
function resetbg(){
    buttons.forEach((button) =>{
        button.style.background = "transparent" ; 
        button.addEventListener("mouseover", stopslideshow);
        button.addEventListener("mouseout", startslideshow); 
    });
}

buttons.forEach((button, i) => {
    button.addEventListener("click", ()=>{
        resetbg();
        slider.style.transform = `translateX(-${i * 100}%)`;
        slidecounter = i + 1;
        buttons[i].style.background = 'black';
    });
});
// changing colors while changing slides
const changecolor = () =>{
    resetbg()
    buttons[slidecounter-1].style.background = "black";
}
// function for nextslide
function nextslide(){
    slider.style.transform = `translateX(-${slidecounter * 100}%)`;
    slidecounter++;
}
// for firstslide
function firstslide(){
    slider.style.transform = `translateX(0px)`;
    slidecounter = 1;
}
// function for automation
let slideInterval;

const startslideshow= ()=>{
    slideInterval = setInterval(() =>{
        slidecounter < length ? nextslide() : firstslide();
        changecolor();
    }, 2000);
};
startslideshow();

const stopslideshow = () =>{
    clearInterval(slideInterval);
}
slider.addEventListener("mouseover", stopslideshow);
slider.addEventListener("mouseout", startslideshow);
// script of slider end

//  Player Image Box Toggle
const playerimgBox = document.querySelectorAll('.players-imgbox');
playerimgBox.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('expanded');
    });
});

//video popup

document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.addEventListener("play", () => {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
});


// function for front page to player info
function Showinformation(id){
    const playerInfoSections = document.querySelectorAll(".player-info-section");
    playerInfoSections.forEach(section =>{
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Function to show/hide player information

function ShowSection(id){
    const sections = document.querySelectorAll(".section");
    sections.forEach(section =>{
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
};
