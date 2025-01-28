let intervalDuration = 5,
  slidePause = false;

const sliderCard = document.querySelectorAll(".cardGroup .card"),
  sliderLeft = document.querySelector("#as-slider-left"),
  sliderRight = document.querySelector("#as-slider-right");

function sliderFunction(type) {
  if (slidePause) return;

  if (type === "prev") {
    const cards = document.querySelectorAll(".cardGroup .card");
    document.querySelector(".cardGroup").prepend(cards[cards.length - 1]);
    return null;
  }

  const cards = document.querySelectorAll(".cardGroup .card");
  document.querySelector(".cardGroup").appendChild(cards[0]);
  return null;
}

sliderCard.forEach((card) => {
  card.addEventListener("mouseover", () => (slidePause = true));
  card.addEventListener("mouseleave", () => (slidePause = false));
});

sliderLeft.addEventListener("click", () => sliderFunction("prev"));
sliderRight.addEventListener("click", () => sliderFunction("next"));

setInterval(sliderFunction, intervalDuration * 1000);
