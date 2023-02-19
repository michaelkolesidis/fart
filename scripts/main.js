const butt = document.getElementById("butt");
const fart = document.getElementById("fart");

butt.addEventListener("click", () => {
  const fartSound = new Audio("./assets/fart.mp3");
  fartSound.play();
  setTimeout(() => {
    fart.style.opacity = 1;
  }, 200);
  setTimeout(() => {
    fart.style.opacity = 0;
  }, 600);
});
