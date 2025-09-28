// Slider Toggle Function
function toggleSlider() {
const slider = document.getElementById('slider');
slider.classList.toggle('active');
}

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
