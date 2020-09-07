let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector(".arrow-left"),
    arrowRight = document.querySelector(".arrow-right"),
    current = 0;
//clear all sliders
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

//start slide

function startSlide() {
    reset();
    sliderImages[0].style.display = "flex";
}

//show prev

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "flex";
    current--;
}

//show next

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "flex";
    current++;
}

// left arrow click

arrowLeft.addEventListener("click", function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// right arrow click

arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();