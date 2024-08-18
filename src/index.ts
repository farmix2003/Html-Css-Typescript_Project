document.addEventListener("DOMContentLoaded", () => {
  const foodBox = document.querySelector(".food-box") as HTMLDivElement,
    sweetBox = document.querySelector(".sweet-box") as HTMLDivElement,
    steps = document.querySelectorAll<HTMLDivElement>(".step1");

  const toggleBox = (box: HTMLDivElement, otherBox: HTMLDivElement) => {
    box.classList.add("toggled");

    otherBox.classList.remove("toggled");
  };

  foodBox.addEventListener("click", () => toggleBox(foodBox, sweetBox));
  sweetBox.addEventListener("click", () => toggleBox(sweetBox, foodBox));

  if (steps.length === 0) {
    console.error("No elements with the class 'step1' were found.");
    return;
  }

  const animateSteps = (index: number) => {
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
