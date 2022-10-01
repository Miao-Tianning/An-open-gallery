let system;
let button;
let windowWidth = 1229;
let windowHeight = 768;
const count = 3;
var choice;
var snowX = [];
var snowY = [];
var t = 0;
var virtualscreen1;
var virtualscreen2;
var virtualscreen3;
var virtualscreen4;
var virtualscreen5;
var virtualscreen6;
var virtualscreen7;
var virtualscreen8;
var c = [];
var index = 0;
var myColour;
var transparency;
var numFill = 500;

function preload() {
  img = loadImage("img/Gallery-01.jpg");
  img1 = loadImage("img/Gallery-02.jpg");
  img2 = loadImage("img/Gallery-03.jpg");
  img3 = loadImage("img/Gallery-04.jpg");
  img4 = loadImage("img/Gallery-05.jpg");
  img5 = loadImage("img/light1.png");
  img6 = loadImage("img/light2.png");
  img7 = loadImage("img/light3.png");
  img8 = loadImage("img/light4.png");
  img9 = loadImage("img/light5.png");
  img10 = loadImage("img/object1.png");
  img11 = loadImage("img/object2.png");
  img12 = loadImage("img/object3.png");
  img13 = loadImage("img/object4.png");
  img14 = loadImage("img/object5.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  virtualscreen1 = createGraphics(146, 86);
  virtualscreen1.background(226);
  
  virtualscreen2 = createGraphics(146, 86);
  virtualscreen2.background(226);
  
  virtualscreen3 = createGraphics(146, 86);
  virtualscreen3.background(226);
  
  virtualscreen4 = createGraphics(146, 86);
  virtualscreen4.background(226);
  
  virtualscreen5 = createGraphics(146, 86);
  virtualscreen5.background(226);
  
  virtualscreen6 = createGraphics(146, 86);
  virtualscreen6.background(226);
  
  virtualscreen7 = createGraphics(128, 86);
  virtualscreen7.background(226);
  
  virtualscreen8 = createGraphics(128, 86);
  virtualscreen8.background(226);
  
  c[0] = color(0);
  c[1] = color(183,28,28);
  c[2] = color(191,54,12);
  c[3] = color(230,81,0);
  c[4] = color(255,111,0);
  c[5] = color(251,192,45);
  c[6] = color(175,180,43);
  c[7] = color(85,139,47);
  c[8] = color(46,125,50);
  c[9] = color(0,105,92);
  c[10] = color(0,151,167);
  c[11] = color(2,136,209);
  c[12] = color(13,71,161);
  c[13] = color(40,53,147);
  c[14] = color(69,39,160);
  c[15] = color(106,27,154);
  
  myColour = c[10];

  system = new ParticleSystem(createVector(605, 640));

  button2 = createButton("Mouse: draw | Key1: lights | Key0: reset | Palette: colours");
  button2.position(0,0);
  button2.size(650, 400);
  button2.style('font-size', '20px');
  button2.style("color: rgba(93,64,55);background-color:#D7CCC8; border:none;");
  button2.hide();
  
  button3 = createButton("I'm the tear, the least worthwhile thing.");
  button2.position(0,0);
  button3.size(650, 400);
  button3.style('font-size', '20px');
  button3.style("color:rgba(69,90,100);background-color:#CFD8DC; border:none;");
  button3.hide();

  button = createButton("");
  button.position(610, -360);
  button.size(15,15);
  button.mousePressed(Disablerect);
  button.style("background-color:rgba(220); border:none; border-radius:0px;");
  button.hide();

  for (var i = 0; i < windowWidth; i += 5) {
    snowX[i] = random(0, windowWidth);
    snowY[i] = random(0, windowHeight);
  }
}

function draw() {
  image(img, 0, 0, windowWidth, windowHeight);

  fill(106,27,154);
  beginShape();
  vertex(1164, 705);
  
  vertex(1175, 695);
  vertex(1195, 695);
  
  vertex(1206, 705);
  vertex(1206, 725);
  
  vertex(1195, 735);
  vertex(1175, 735);
  
  vertex(1164, 725);
  endShape(CLOSE);
  fill(255, 210);
  textSize(28);
  text('?', 1177, 725);
  
  var sinOfTime = sin(frameCount*2);
  size = map(sinOfTime, -1, 1, 10, 500);
  transparency = map(sinOfTime, -1, 1, 0, 255);  
  
  p = mouseX*0.015;
  
  fill(255,238,88, transparency);
  circle(120+p,220,12);
  circle(55+p,345,15);
  circle(75+p,100,15);
  circle(175+p,22,12);
  
  circle(1180-p,340,15);
  circle(1031-p,173,12);
  circle(1109-p,55,15);
  circle(785-p,5,15);
  circle(1225-p,255,12);

  drawSnow();
  
  virtual1();
  virtual2();
  virtual3();
  virtual4();
  virtual5();
  virtual6();
  virtual7();
  virtual8();
  

  fill(78,52,46);
  beginShape();
  vertex(175, 714);
  vertex(175, 650);
  vertex(182, 646);
  vertex(282, 646);
  vertex(287, 650);
  vertex(287, 714);
  vertex(282, 718);
  vertex(182, 718);
  
  endShape(CLOSE);
  
  //draw palette squares
  fill(c[1]);
  rect(182,652, 20,20);

  fill(c[2]);
  rect(202, 652, 20,20);

  fill(c[3]);
  rect(222, 652, 20,20);

  fill(c[4]);
  rect(242, 652,20,20);
  
  fill(c[5]);
  rect(262, 652, 20,20);
  fill(c[6]);
  
  rect(182,672, 20,20);

  fill(c[7]);
  rect(202, 672, 20,20);

  fill(c[8]);
  rect(222, 672, 20,20);

  fill(c[9]);
  rect(242, 672,20,20);
  
  fill(c[10]);
  rect(262, 672,20,20);
  
  rect(182,692,20,20);

  fill(c[11]);
  rect(202, 692,20,20);

  fill(c[12]);
  rect(222, 692,20,20);

  fill(c[13]);
  rect(242, 692,20,20);
  
  fill(c[14]);
  rect(262, 692,20,20);
  
  fill(c[15]);
  rect(262, 692,20,20);

  system.addParticle();
  system.run();

  let h = map(mouseX, 0, windowWidth, 0, 255);
  fill(h, 100, 80);
  noStroke();

  var n = noise(t);
  var x1 = map(n, 0, 1, 260, 280);
  t += 0.01;


  image(img10, 556, x1, 120, 80);

  image(img9, 400, 25, 35, 35);
  image(img9, 600, 25, 35, 35);
  image(img9, 800, 25, 35, 35);

  image(img9, 400, 560, 35, 35);
  image(img9, 600, 560, 35, 35);
  image(img9, 820, 560, 35, 35);

  image(img9, 120, 110, 35, 35);
  image(img9, 50, 290, 35, 35);
  image(img9, 120, 455, 35, 35);

  image(img9, 1200, 650, 35, 35);
  image(img9, 1080, 110, 35, 35);
  image(img9, 1000, 450, 35, 35);

  if (choice == 0) {
    
  image(img4, 0, 0, windowWidth, windowHeight);
  
  drawSnow();
    
    
  var n2 = noise(t);
  var x2 = map(n2, 0, 1, 260, 280);
  t += 0.01;


  image(img12, 556, x2, 120, 80); 
    
    
  image(img5, 400, 25, 35, 35);
  image(img5, 600, 25, 35, 35);
  image(img5, 800, 25, 35, 35);

  image(img5, 400, 560, 35, 35);
  image(img5, 600, 560, 35, 35);
  image(img5, 820, 560, 35, 35);

  image(img5, 120, 110, 35, 35);
  image(img5, 50, 290, 35, 35);
  image(img5, 120, 455, 35, 35);

  image(img5, 1200, 650, 35, 35);
  image(img5, 1080, 110, 35, 35);
  image(img5, 1000, 450, 35, 35);

  }

  if (choice == 1) {
    
  image(img2, 0, 0, windowWidth, windowHeight);
  
  drawSnow(); 
    
  var n3 = noise(t);
  var x3 = map(n3, 0, 1, 260, 280);
  t += 0.01;


  image(img13, 556, x3, 120, 80); 
    
  image(img6, 400, 25, 35, 35);
  image(img6, 600, 25, 35, 35);
  image(img6, 800, 25, 35, 35);

  image(img6, 400, 560, 35, 35);
  image(img6, 600, 560, 35, 35);
  image(img6, 820, 560, 35, 35);

  image(img6, 120, 110, 35, 35);
  image(img6, 50, 290, 35, 35);
  image(img6, 120, 455, 35, 35);

  image(img6, 1200, 650, 35, 35);
  image(img6, 1080, 110, 35, 35);
  image(img6, 1000, 450, 35, 35);
  }

  if (choice == 2) {
    
  image(img1, 0, 0, windowWidth, windowHeight);
    
  drawSnow();
    
  var n4 = noise(t);
  var x4 = map(n4, 0, 1, 260, 280);
  t += 0.01;

  image(img14, 556, x4, 120, 80); 
  
  image(img7, 400, 25, 35, 35);
  image(img7, 600, 25, 35, 35);
  image(img7, 800, 25, 35, 35);

  image(img7, 400, 560, 35, 35);
  image(img7, 600, 560, 35, 35);
  image(img7, 820, 560, 35, 35);

  image(img7, 120, 110, 35, 35);
  image(img7, 50, 290, 35, 35);
  image(img7, 120, 455, 35, 35);

  image(img7, 1200, 650, 35, 35);
  image(img7, 1080, 110, 35, 35);
  image(img7, 1000, 450, 35, 35);
  }

  if (choice == 3) {
    
  image(img3, 0, 0, windowWidth, windowHeight);
    
  drawSnow();
    
  var n5 = noise(t);
  var x5 = map(n5, 0, 1, 260, 280);
  t += 0.01;
    
  image(img11, 556, x5, 120, 80); 
    
  image(img8, 400, 25, 35, 35);
  image(img8, 600, 25, 35, 35);
  image(img8, 800, 25, 35, 35);

  image(img8, 400, 560, 35, 35);
  image(img8, 600, 560, 35, 35);
  image(img8, 820, 560, 35, 35);

  image(img8, 120, 110, 35, 35);
  image(img8, 50, 290, 35, 35);
  image(img8, 120, 455, 35, 35);

  image(img8, 1200, 650, 35, 35);
  image(img8, 1080, 110, 35, 35);
  image(img8, 1000, 450, 35, 35);
  }

  if (choice == 4) {
  image(img9, 400, 25, 35, 35);
  image(img9, 600, 25, 35, 35);
  image(img9, 800, 25, 35, 35);

  image(img9, 400, 560, 35, 35);
  image(img9, 600, 560, 35, 35);
  image(img9, 820, 560, 35, 35);

  image(img9, 120, 110, 35, 35);
  image(img9, 50, 290, 35, 35);
  image(img9, 120, 455, 35, 35);

  image(img9, 1200, 650, 35, 35);
  image(img9, 1080, 110, 35, 35);
  image(img9, 1000, 450, 35, 35);
  }

  if (mouseX > 1165 && mouseX < 1205 && mouseY > 695 && mouseY < 735) {
    if (mouseIsPressed == true) {
      rect1();
    }
  }
  
    if (mouseX > 535 && mouseX < 695 && mouseY > 250 && mouseY < 360) {
    if (mouseIsPressed == true) {
      rect2();
    }
  }
}

function rect1() {
  button2.show();
  button.show();
}

function rect2() {
  button3.show();
  button.show();
}

function virtual1() {
  image(virtualscreen1,333,269);
  
  if (mouseIsPressed == true) {
  virtualscreen1.fill(myColour);
  virtualscreen1.noStroke();
  virtualscreen1.circle(mouseX-333,mouseY-269,8);
  }
}

function virtual2() {
  image(virtualscreen2,334,435);
  
  if (mouseIsPressed == true) {
  virtualscreen2.fill(myColour);
  virtualscreen2.noStroke();
  virtualscreen2.circle(mouseX-334,mouseY-435,8);
  }
}

function virtual3() {
  image(virtualscreen3,333.5,105.5);
  
  if (mouseIsPressed == true) {
  virtualscreen3.fill(myColour);
  virtualscreen3.noStroke();
  virtualscreen3.circle(mouseX-333.5,mouseY-105.5,8);
  }
}

function virtual4() {
  image(virtualscreen4,750.5,105.5);
  
  if (mouseIsPressed == true) {
  virtualscreen4.fill(myColour);
  virtualscreen4.noStroke();
  virtualscreen4.circle(mouseX-750.5,mouseY-105.5,8);
  }
}

function virtual5() {
  image(virtualscreen5,750.5,269);
  
  if (mouseIsPressed == true) {
  virtualscreen5.fill(myColour);
  virtualscreen5.noStroke();
  virtualscreen5.circle(mouseX-750.5,mouseY-269,8);
  }
}

function virtual6() {
  image(virtualscreen6,751.5,434.5);
  
  if (mouseIsPressed == true) {
  virtualscreen6.fill(myColour);
  virtualscreen6.noStroke();
  virtualscreen6.circle(mouseX-751.5,mouseY-434.5,8);
  }
}

function virtual7() {
  image(virtualscreen7,550.5,435);
  
  if (mouseIsPressed == true) {
  virtualscreen7.fill(myColour);
  virtualscreen7.noStroke();
  virtualscreen7.circle(mouseX-550.5,mouseY-435,8);
  }
}

function virtual8() {
  image(virtualscreen8,550.5,105.5);
  
  if (mouseIsPressed == true) {
  virtualscreen8.fill(myColour);
  virtualscreen8.noStroke();
  virtualscreen8.circle(mouseX-550.5,mouseY-105.5,8);
  }
}

function Disablerect() {
  clear();
  background(220);
  button3.hide();
  button2.hide();
  button.hide();
  image(img, 0, 0, windowWidth, windowHeight);
}

function drawSnow() {
  fill(255,210);
  noStroke();

  for (var i = 0; i < windowWidth; i += 20) {
    circle(snowX[i], snowY[i], 6);
    snowY[i] += 1;
    snowX[i] += 1;
    if (snowY[i] > windowHeight) snowY[i] = 0;
    if (snowX[i] > windowWidth) snowX[i] = 0;
  }
}

// A simple Particle class
let Particle = function (position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function () {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 0.5;
};

// Method to display
Particle.prototype.display = function () {
  let h = map(mouseX, 0, windowWidth, 0, 255);
  noStroke();
  fill(h, 190, 180, this.lifespan);
  ellipse(this.position.x, this.position.y, 22, 22);
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  return this.lifespan < 0;
};

let ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function () {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

function keyPressed() {
  if (key == 1) tossCoin(true);
  if (key == 9) fullscreen(true);
  if (key == 0) resetSketch(true);
}

function mousePressed() {
   let s = new Sprite(mouseX, mouseY, 10, 10);
   s.vel.x = random(-1, 1);
   s.vel.y = random(-1, 1);
  
  // detect if palette square is clicked
  if (mouseY < 713 && mouseY > 652) {
    if (mouseX < 282 && mouseX > 182) {
      myColour = get(mouseX, mouseY);
    }
  }
  
}

function tossCoin() {
  choice = int(random(0, 5));
  print(choice);
}

function resetSketch() {
  virtualscreen1.background(226);
  virtualscreen2.background(226);
  virtualscreen3.background(226);
  virtualscreen4.background(226);
  virtualscreen5.background(226);
  virtualscreen6.background(226);
  virtualscreen7.background(226);
  virtualscreen8.background(226);
}
