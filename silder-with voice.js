let voiceSliderImages = document.querySelectorAll(".slide-voice"),
    current1 = 0;
//clear all sliders
function resetVoice() {
    for (let i = 0; i < voiceSliderImages.length; i++) {
        voiceSliderImages[i].style.display = "none";
    }
}

//start slide

function startVoiceSlide() {
    resetVoice();
    voiceSliderImages[0].style.display = "flex";
}

//show prev

function voiceSlideLeft() {
    resetVoice();
    voiceSliderImages[current1 - 1].style.display = "flex";
    current1--;
}

//show next

function voiceSlideRight() {
    resetVoice();
    voiceSliderImages[current1 + 1].style.display = "flex";
    current1++;
}

// left arrow click

arrowLeft.addEventListener("click", function() {
    if (current1 === 0) {
        current1 = voiceSliderImages.length;
    }
    voiceSlideLeft();
});

// right arrow click

arrowRight.addEventListener("click", function() {
    if (current1 === voiceSliderImages.length - 1) {
        current1 = -1;
    }
    voiceSlideRight();
});

startVoiceSlide();