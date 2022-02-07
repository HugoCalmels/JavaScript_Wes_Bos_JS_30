const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date(); // fonctions pour choper le temps en js
  const seconds = now.getSeconds(); // sympa la fonction getSeconds sur le parent element aussi
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds)
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  console.log(mins)
  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours)
}

// run something every x times with setInterval
setInterval(setDate, 1000); // set the interval 1000 = 1 second