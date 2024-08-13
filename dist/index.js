"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const foodBox = document.querySelector(".food-box"), sweetBox = document.querySelector(".sweet-box");
    const toggleBox = (box, otherBox) => {
        box.classList.add("toggled");
        otherBox.classList.remove("toggled");
    };
    foodBox.addEventListener("click", () => toggleBox(foodBox, sweetBox));
    sweetBox.addEventListener("click", () => toggleBox(sweetBox, foodBox));
});
