const moonIcon = document.getElementById('moon-icon');
const home = document.getElementById('home');
let isDarkMode = false;

moonIcon.addEventListener('click', function() {
    if (!isDarkMode) {
        home.style.backgroundImage = 'url(images/cat2.jpg)';
        isDarkMode = true;
    } else {
        home.style.backgroundImage = 'none';
        home.style.backgroundColor = 'white'; 
        isDarkMode = false;
    }
});

function toggleBackgroundImage() {
    let images = ['url(images/cat1.jpg)', 'url(images/cat2.jpg)', 'url(images/cat3.jpg)', 'url(images/cat4.jpg)', 'url(images/cat5.jpg)','url(images/borat.webp)'];
    let index = 0; 

    let intervalId = setInterval(function() {
        home.style.backgroundImage = images[index];
        index = (index + 1) % images.length;
    }, 1500); 

    return intervalId; 
}

let blinkInterval; 
const audio = document.getElementById("audio-derp");

function playAudio() {
    audio.play();
}

function stopAudio() {
    audio.pause();
}

document.addEventListener("keypress", function(event) {
    if (event.key === "x") {
        playAudio();
        if (!blinkInterval) {
            blinkInterval = toggleBackgroundImage();
        }
    }

    if (event.key === "a") {
        if (blinkInterval) {
            clearInterval(blinkInterval);
            blinkInterval = null;
            home.style.backgroundImage = 'none';
            home.style.backgroundColor = "white"; 
            stopAudio();
        }
    }
});
