const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

// variables
var wrapper = document.querySelector(".wrapper");
var nav = document.querySelector(".nav");
let sectionOne = document.getElementById("sectionOne");
let sectionTwo = document.getElementById("sectionTwo");
let sectionThree = document.getElementById("sectionThree");
let sectionFour = document.getElementById("sectionFour");
let footer = document.getElementById("footer");
// functions

//
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function() {
    console.log("wippy");
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// eventListener btn

btn.addEventListener("click", () => {
    recognition.start();
});


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    if (message.includes('mode')) {
        nav.classList.toggle("dark-nav");
        wrapper.classList.toggle("dark-mode");
    } else if (message.includes('nature')) {
        sectionOne.scrollIntoView();
    } else if (message.includes('animal')) {
        sectionTwo.scrollIntoView();
    } else if (message.includes('car')) {
        sectionThree.scrollIntoView();
    } else if (message.includes('cities')) {
        sectionFour.scrollIntoView();
    } else if (message.includes('contact')) {
        footer.scrollIntoView('footer');
    } else if (message.includes('next')) {
        if (current1 === 0) {
            current1 = voiceSliderImages.length;
        }
        voiceSlideLeft();
    } else if (message.includes('last')) {
        if (current1 === voiceSliderImages.length - 1) {
            current1 = -1;
        }
        voiceSlideRight();
    }


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.SpeechSynthesis.speak(speech);
}