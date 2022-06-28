const videoContainer= document.querySelector(".video-container");
const switchSection=document.querySelector(".switch-section");
const slip=document.querySelector(".switch");

switchSection.addEventListener("click", function(){
    if (!slip.classList.contains("move")) {
        slip.classList.add("move")
        videoContainer.pause();
    }
    else{
        slip.classList.remove("move");
        videoContainer.play();
    }
});

const preloader=document.querySelector(".preloader");

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
});