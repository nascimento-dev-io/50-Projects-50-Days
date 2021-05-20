const soundButtons = document.querySelectorAll(".buttons-board div");
let audio;

soundButtons.forEach((button) => button.addEventListener("click", playSound));

function playSound(event) {
  const sound = event.target.id;

  stopSound();

  audio = document.createElement("audio");
  audio.src = `./sounds/${sound}.mp3`;
  // audio.setAttribute("type", "audio/mp3");
  audio.play();
}

function stopSound() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}
