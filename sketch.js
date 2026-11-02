let cars = [];

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  CarPower();

  mousePressed();
}

function draw() {
  background('lightblue');

  // Update and draw all cars
  updateAndDrawCars();
}

// Create a random car
function createCar() {
  return {
    x: random(20, 350),
    y: random(50, 350),
    size: random(20, 75),
    color: color(random(255), random(255), random(255)),
    lifespan: 255
  };
}

// Draw a car
function drawCar(car) {
  noStroke();

  // Car body
  fill(car.color);
  rect(car.x, car.y, car.size, car.size / 2);

  // Car roof
  rect(
    car.x + car.size / 4,
    car.y - car.size / 4,
    car.size / 2,
    car.size / 4
  );

  // Wheels
  fill('black');
  circle(
    car.x + car.size / 4,
    car.y + car.size / 2,
    car.size / 4
  );

  circle(
    car.x + car.size * 3 / 4,
    car.y + car.size / 2,
    car.size / 4
  );
}

// Update cars and remove them when they disappear
function updateAndDrawCars() {
  for (let i = cars.length - 1; i >= 0; i--) {
    let car = cars[i];

    drawCar(car);

    car.size = car.size * 0.99;
    car.lifespan = car.lifespan - 1;

    if (car.lifespan <= 0) {
      cars.splice(i, 1);
    }
  }
}
  function mousePressed() {
  let car = createCar();

  // reassign x to be mouseX
  car.x = mouseX; 
  
  // reassign y to be mouseY
  car.y = mouseY;

  // add the flower to the flowers array
  cars.push(car);
}
function CarPower() 
{
    // Create 20 cars
  for (let i = 0; i < 20; i++) {
    cars.push(createCar());
  }
}