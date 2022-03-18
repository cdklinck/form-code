function setup() {
  createCanvas(200, 400)
  background(0)
  frameRate(10)

let r = random(255)
let g = random(255)
let b = random(255)
let n = random(0,2)

  if (n === 0) {
    fill(r, 0, 0)
    ellipse(100,80,100)
  } else if (n === 1) {
    fill(r, g, 0)
    ellipse(100,200,100)
  } else {
    fill(0, g, 0)
    ellipse(100,320,100)
  }
}
