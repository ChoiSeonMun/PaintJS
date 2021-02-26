const canvas = document.querySelector("canvas");
const ctx2D = canvas.getContext("2d");
const colors = document.getElementsByClassName("palette__color");
const brushRange = document.querySelector(".controls input");

const initialColor = "#2c2c2c";

let isPainting = false;

init();

function init() {
  canvas.width = 700;
  canvas.height = 700;

  ctx2D.strokeStyle = initialColor;
  ctx2D.lineWidth = brushRange.getAttribute("value");

  canvas.addEventListener("mousemove", drawLine);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);

  for (const color of colors) {
    color.addEventListener("click", changeColor);
  }

  brushRange.addEventListener("input", changeBrushSize);
}

function startPainting(e) {
  isPainting = true;

  const x = e.offsetX;
  const y = e.offsetY;

  ctx2D.beginPath();
  ctx2D.moveTo(x, y);
}

function stopPainting(e) {
  isPainting = false;
  ctx2D.closePath();
}

function drawLine(e) {
  if (isPainting) {
    const x = e.offsetX;
    const y = e.offsetY;

    ctx2D.lineTo(x, y);
    ctx2D.stroke();
  }
}

function changeColor(e) {
  const color = e.target.style.backgroundColor;
  ctx2D.strokeStyle = color;
}

function changeBrushSize(e) {
  const value = e.target.value;
  ctx2D.lineWidth = value;
}
