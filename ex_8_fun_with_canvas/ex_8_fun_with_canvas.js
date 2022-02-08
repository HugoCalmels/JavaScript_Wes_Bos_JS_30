console.log("hi")

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

console.log(canvas)
console.log(ctx)


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multiply'

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  ctx.beginPath();
  // start from 
  ctx.moveTo(lastX, lastY)
  // go to
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  // destructuring seems not to be working
  //[lastX, lastY] = [e.offsetX, e.offsetY]
  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++
  if (hue >= 360) {
    hue = 0
  }
  if (ctx.lineWidth >= 500 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++
  } else {
    ctx.lineWidth--
  }

}

// fires pre-values when the mouse is down, and set active the fn
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
})
// fires fn when mouse moves
canvas.addEventListener('mousemove', draw)

// unactivates and stops the fn whenever the mouse is up or out
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)


