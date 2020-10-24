function setup() {
createCanvas(windowWidth, windowHeight);

    // dog = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/dog/main/dog.png');

}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

// function display() {
//   //шарики
//   image(dog, 20, -20, 500, 500);
// }

function draw() {
  background(31, 120, 255);
  // display()

  noStroke()
  fill(242, 71, 39)
  rect(270, 470, mouseX, 80, 30);
}
