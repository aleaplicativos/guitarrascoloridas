// Hi! how are you?
// itaycode.com
// twitter.com/itaycode

const button = document.getElementById("color-button");
const guitar = document.getElementById("guitar");

button.addEventListener("click", function () {
  const hue = Math.floor(Math.random() * 360);
  guitar.style.filter = `hue-rotate(${hue}deg)`;
  console.log(hue);
});

function toggleMusic() {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}