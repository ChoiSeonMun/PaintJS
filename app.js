const canvas = document.querySelector("canvas");
const ctx2D = canvas.getContext("2d");
const initialColor = "#2c2c2c";

let isPainting = false;

init();

function init() {
  canvas.width = 700;
  canvas.height = 700;

  ctx2D.fillStyle = initialColor;
  ctx2D.lineWidth = 2.5;

  canvas.onmousemove = (e) => {
    if (isPainting) {
      const x = e.offsetX;
      const y = e.offsetY;

      ctx2D.lineTo(x, y);
      ctx2D.stroke();
    }
  };

  canvas.onmousedown = startPainting;
  canvas.onmouseup = canvas.onmouseleave = stopPainting;
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
  ctx2D.endPath();
}
