document.addEventListener("DOMContentLoaded", () => {
  const foodBox = document.querySelector(".food-box") as HTMLDivElement,
    sweetBox = document.querySelector(".sweet-box") as HTMLDivElement;

  const toggleBox = (box: HTMLDivElement, otherBox: HTMLDivElement) => {
    box.classList.add("toggled");

    otherBox.classList.remove("toggled");
  };

  foodBox.addEventListener("click", () => toggleBox(foodBox, sweetBox));
  sweetBox.addEventListener("click", () => toggleBox(sweetBox, foodBox));
});
