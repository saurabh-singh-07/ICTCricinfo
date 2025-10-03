// side Slider Toggle Function
function toggleSlider() {
const Sideslider = document.getElementById('side-slider');
Sideslider.classList.toggle('active');
}

// script for record slider 
function initSlider(sliderContainerId) {
    const sliderContainer = document.getElementById(sliderContainerId);
    if (!sliderContainer) return;

    const slider = sliderContainer.querySelector('.slider');
    const images = sliderContainer.querySelectorAll('.img');
    const control = sliderContainer.querySelector('.control');
    let slidecounter = 1;
    let length = images.length;
    let slideInterval;
    let buttons = [];

    // Clear previous controls if any
    control.innerHTML = '';

    // Create control buttons
    for (let i = 0; i < length; i++) {
        const div = document.createElement("div");
        div.className = "button";
        control.appendChild(div);
    }
    buttons = control.querySelectorAll('.button');

    function resetbg() {
        buttons.forEach((button) => {
            button.style.background = "transparent";
            button.removeEventListener("mouseover", stopslideshow);
            button.removeEventListener("mouseout", startslideshow);
            button.addEventListener("mouseover", stopslideshow);
            button.addEventListener("mouseout", startslideshow);
        });
    }

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            resetbg();
            slider.style.transform = `translateX(-${i * 100}%)`;
            slidecounter = i + 1;
            buttons[i].style.background = 'black';
        });
    });

    function changecolor() {
        resetbg();
        buttons[slidecounter - 1].style.background = "black";
    }

    function nextslide() {
        slider.style.transform = `translateX(-${slidecounter * 100}%)`;
        slidecounter++;
    }

    function firstslide() {
        slider.style.transform = `translateX(0px)`;
        slidecounter = 1;
    }

    function startslideshow() {
        slideInterval = setInterval(() => {
            slidecounter < length ? nextslide() : firstslide();
            changecolor();
        }, 2000);
    }

    function stopslideshow() {
        clearInterval(slideInterval);
    }

    slider.addEventListener("mouseover", stopslideshow);
    slider.addEventListener("mouseout", startslideshow);

    // Start slideshow for this slider
    startslideshow();
    changecolor();
}

// Initialize sliders for each player
initSlider('bhuvi-slider');
initSlider('ajinkya-slider');
initSlider('klrahul-slider');
initSlider('virat-slider');
initSlider('msdhoni-slider');
initSlider('rohit-slider');

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
