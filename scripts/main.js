// Copyright (c) 2023 Michael Kolesidis (michael.kolesidis@gmail.com)
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

const butt = document.getElementById("butt");
const fart = document.getElementById("fart");

butt.addEventListener("click", () => {
  const fartSound = new Audio("./assets/sounds/fart.mp3");
  fartSound.play();
  setTimeout(() => {
    fart.style.opacity = 1;
  }, 200);
  setTimeout(() => {
    fart.style.opacity = 0;
  }, 600);
});
