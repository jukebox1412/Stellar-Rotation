var stars;

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    smooth();
    stars = [];

    for (let i = 0; i < 100; i++) {
        let r = 200 + (Math.random() * 55) - 55;
        let g = 230 + (Math.random() * 55) - 55;
        let b = 255 + (Math.random() * 55) - 55;
        let x = width / 2;
        let y = height / 2;
        let startA = Math.random() * 360;
        let radius = Math.random() * width;
        let mass = Math.random() * 3.0;
        let maxTrailA = Math.random() * 200;
        stars.push(new Star(x, y, radius, startA, startA, maxTrailA, mass, r, g, b));
    }
}

function draw() {
    background(0, 10, 10);
    noFill();

    for (let i = 0; i < stars.length; i++) {
        let currentA = drawTrails(stars[i].initX, stars[i].initY, stars[i].radius,
            stars[i].startA, stars[i].endA, stars[i].mass, stars[i].r, stars[i].g, stars[i].b);

        if (currentA > stars[i].maxTrailA) {
            stars[i].startA += 0.5;
        }
        stars[i].endA += 0.5;
    }

}

function drawTrails(initX, initY, radius, startA, endA, mass, r, g, b) {

    stroke(r, g, b);

    let returnVal = Math.abs(endA - startA);
    strokeWeight(0.3 * mass);
    arc(initX, initY, radius, radius, startA, endA);

    strokeWeight(0.4 * mass);
    arc(initX, initY, radius, radius, startA + returnVal * .2, endA);

    strokeWeight(0.5 * mass);
    arc(initX, initY, radius, radius, startA + returnVal * .3, endA);

    strokeWeight(0.6 * mass);
    arc(initX, initY, radius, radius, startA + returnVal * .5, endA);

    strokeWeight(0.7 * mass);
    arc(initX, initY, radius, radius, startA + returnVal * .7, endA);

    strokeWeight(0.8 * mass);
    arc(initX, initY, radius, radius, startA + returnVal * .9, endA);

    strokeWeight(1.1 * mass);
    arc(initX, initY, radius, radius, startA + returnVal * .95, endA);
    return returnVal;
}

function Star(initX, initY, radius, startA, endA, maxTrailA, mass, r, g, b) {
    this.initX = initX;
    this.initY = initY;
    this.radius = radius;
    this.startA = startA;
    this.endA = endA;
    this.maxTrailA = maxTrailA;
    this.mass = mass
    this.r = r;
    this.g = g;
    this.b = b;
}