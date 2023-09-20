let startInput, percentageInput, resultText;

function setup() {
  createCanvas(400, 200);
  background(220);

  startInput = createInput();
  startInput.position(50, 50);
  startInput.attribute('placeholder', 'Enter start number');
  startInput.input(calculateResult);

  percentageInput = createInput();
  percentageInput.position(50, 80);
  percentageInput.attribute('placeholder', 'Enter percentage');
  percentageInput.input(calculateResult);

  resultText = createP('Result:');
  resultText.position(50, 110);
  resultText.style('font-size', '24px');
}

function calculateResult() {
  let start = parseFloat(startInput.value());
  let percentage = parseFloat(percentageInput.value());

  if (!isNaN(start) && !isNaN(percentage)) {
    let result = start + (start * (percentage / 100));
    resultText.html('Result: ' + result.toFixed(2));
  } else {
    resultText.html('Result: Invalid input');
  }
}

function draw() {
  noLoop(); // Don't continuously redraw the canvas
}
