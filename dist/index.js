"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const foodBox = document.querySelector(".food-box"), sweetBox = document.querySelector(".sweet-box"), steps = document.querySelectorAll(".step1");
    const toggleBox = (box, otherBox) => {
        box.classList.add("toggled");
        otherBox.classList.remove("toggled");
    };
    foodBox.addEventListener("click", () => toggleBox(foodBox, sweetBox));
    sweetBox.addEventListener("click", () => toggleBox(sweetBox, foodBox));
    if (steps.length === 0) {
        console.error("No elements with the class 'step1' were found.");
        return;
    }
    const animateSteps = (index) => {
        if (index >= steps.length || !steps[index]) {
            index = 0;
        }
        let currentStep = steps[index];
        currentStep.classList.add("animate-scale");
        setTimeout(() => {
            currentStep.classList.remove("animate-scale");
            animateSteps(index + 1);
        }, 2000);
    };
    console.log(steps);
    animateSteps(0);
});
