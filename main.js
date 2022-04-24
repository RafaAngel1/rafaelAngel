// When the user clicks on the "Calculate & Draw" button, if the values are valid,
//  calculate and display the rectangle area inside a span at the button (right after "Rectangle Area:"),
//   and draw a filled blue rectangle in the canvas with width and height dimensions and x and y position.
// If the values are not valid - the rectangle will overflow outside the canvas borders, display an alert "Invalid values!".

function calculateRec() {
  const myCanvas = document.querySelector("#myCanvas");

  const painter = myCanvas.getContext("2d");

  const x = +document.querySelector(`#positionX`).value;
  const y = +document.querySelector(`#positionY`).value;
  const w = +document.querySelector(`#width`).value;
  const h = +document.querySelector(`#height`).value;
  const span = document.querySelector(`#spanCal`);
  if (w + x >= 301 || h + y >= 301) {
    alert(`Invalid values!`);
  } else {
    painter.fillStyle = "#0000FF";
    painter.fillRect(x, y, w, h);
    span.innerHTML = calcSize(w, h);
  }
}
function calcSize(x, y, size) {
  size = x * y;
  return size;
}

function resetWeb() {
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");
  const x = document.querySelector(`#positionX`);
  const y = document.querySelector(`#positionY`);
  const w = document.querySelector(`#width`);
  const h = document.querySelector(`#height`);
  painter.clearRect(0, 0, 300, 300);
  x.value = "";
  y.value = "";
  w.value = "";
  h.value = "";
}

function onWindowLoad() {
  const buttonCalculate = document.querySelector("#btn1");
  const buttonReset = document.querySelector("#btn2");
  buttonCalculate.onclick = calculateRec;
  buttonReset.onclick = resetWeb;
}

window.onload = onWindowLoad;
