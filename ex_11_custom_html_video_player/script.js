// Get our elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
console.log(video)
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// Build our functions 
function togglePlay() {
  if (video.paused) {// pause is a property from video
    video.play();
  } else {
    video.pause()
  }
  // ternary would result in 
  // const method = video.pause ? 'play' : 'pause';
  // video[method]()
}

togglePlay()

function updateButton() {
  const icon = this.paused ? 'P' : 'M' // if pause is true
  toggle.textContent = icon;
  console.log('Update the button')
}

// Hook up the events

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)