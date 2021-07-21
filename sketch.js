const World = Matter.World; // 91 needed
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var polygon, poly;
var box1;
var ground;
var sling;
let mConstraint;
var poly1;

function preload() {
  poly = loadImage("polygon.png");
}

function setup() {
  const canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  
  // chain = new Slingshot(poly1, {x:200, y:200})

  var P_options = {
    density: 0.02,
    restitution: 0.6,
    friction: 30,
    frictionAir: 0.04,
  };

  poly1 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly1);
  poly2 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly2);
  poly3 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly3);
  poly4 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly4);
  poly5 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly5);
  poly6 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly6);
  poly7 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly7);
  poly8 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly8);
  poly9 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly9);
  poly10 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly10);

  poly11 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly11);
  poly12 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly12);
  poly13 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly13);
  poly14 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly14);
  poly15 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly15);
  poly16 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly16);
  poly17 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly17);
  poly18 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly18);
  poly19 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly19);
  poly20 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly20);

  poly21 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly21);
  poly22 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly22);
  poly23 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly23);
  poly24 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly24);
  poly25 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly25);
  poly26 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly26);
  poly27 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly27);
  poly28 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly28);
  poly29 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly29);
  poly30 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly30);
  
  poly31 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly31);
  poly32 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly32);
  poly33 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly33);
  poly34 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly34);
  poly35 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly35);
  poly36 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly36);
  poly37 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly37);
  poly38 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly38);
  poly39 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly39);
  poly40 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly40);
  
  poly41 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly41);
  poly42 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly42);
  poly43 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly43);
  poly44 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly44);
  poly45 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly45);
  poly46 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly46);
  poly47 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly47);
  poly48 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly48);
  poly49 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly49);
  poly50 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly50);
  
  poly51 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly51);
  poly52 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly52);
  poly53 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly53);
  poly54 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly54);
  poly55 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly55);
  poly56 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly56);
  poly57 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly57);
  poly58 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly58);
  poly59 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly59);
  poly60 = Matter.Bodies.circle(180, 80, 15, P_options);
  World.add(world, poly60);

  groundS = new Ground(200, 398, width, 20);
  groundR = new Ground(397, 199, 20, height - 20);
  groundL = new Ground(3, 199, 20, height - 20);
  groundT = new Ground(200, 2, width, 20);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  };
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function draw() {
  background("blue");
  Engine.update(engine);

  groundS.display();
  groundR.display();
  groundL.display();
  groundT.display();

  imageMode(CENTER);
  image(poly, poly1.position.x, poly1.position.y, 40, 40);
  image(poly, poly2.position.x, poly2.position.y, 40, 40);
  image(poly, poly3.position.x, poly3.position.y, 40, 40);
  image(poly, poly4.position.x, poly4.position.y, 40, 40);
  image(poly, poly5.position.x, poly5.position.y, 40, 40);
  image(poly, poly6.position.x, poly6.position.y, 40, 40);
  image(poly, poly7.position.x, poly7.position.y, 40, 40);
  image(poly, poly8.position.x, poly8.position.y, 40, 40);
  image(poly, poly9.position.x, poly9.position.y, 40, 40);
  image(poly, poly10.position.x, poly10.position.y, 40, 40);
  image(poly, poly11.position.x, poly11.position.y, 40, 40);
  image(poly, poly12.position.x, poly12.position.y, 40, 40);
  image(poly, poly13.position.x, poly13.position.y, 40, 40);
  image(poly, poly14.position.x, poly14.position.y, 40, 40);
  image(poly, poly15.position.x, poly15.position.y, 40, 40);
  image(poly, poly16.position.x, poly16.position.y, 40, 40);
  image(poly, poly17.position.x, poly17.position.y, 40, 40);
  image(poly, poly18.position.x, poly18.position.y, 40, 40);
  image(poly, poly19.position.x, poly19.position.y, 40, 40);
  image(poly, poly20.position.x, poly20.position.y, 40, 40);
  image(poly, poly21.position.x, poly21.position.y, 40, 40);
  image(poly, poly22.position.x, poly22.position.y, 40, 40);
  image(poly, poly23.position.x, poly23.position.y, 40, 40);
  image(poly, poly24.position.x, poly24.position.y, 40, 40);
  image(poly, poly25.position.x, poly25.position.y, 40, 40);
  image(poly, poly26.position.x, poly26.position.y, 40, 40);
  image(poly, poly27.position.x, poly27.position.y, 40, 40);
  image(poly, poly28.position.x, poly28.position.y, 40, 40);
  image(poly, poly29.position.x, poly29.position.y, 40, 40);
  image(poly, poly30.position.x, poly30.position.y, 40, 40);
  image(poly, poly31.position.x, poly31.position.y, 40, 40);
  image(poly, poly32.position.x, poly32.position.y, 40, 40);
  image(poly, poly33.position.x, poly33.position.y, 40, 40);
  image(poly, poly34.position.x, poly34.position.y, 40, 40);
  image(poly, poly35.position.x, poly35.position.y, 40, 40);
  image(poly, poly36.position.x, poly36.position.y, 40, 40);
  image(poly, poly37.position.x, poly37.position.y, 40, 40);
  image(poly, poly38.position.x, poly38.position.y, 40, 40);
  image(poly, poly39.position.x, poly39.position.y, 40, 40);
  image(poly, poly40.position.x, poly40.position.y, 40, 40);
  image(poly, poly41.position.x, poly41.position.y, 40, 40);
  image(poly, poly42.position.x, poly42.position.y, 40, 40);
  image(poly, poly43.position.x, poly43.position.y, 40, 40);
  image(poly, poly44.position.x, poly44.position.y, 40, 40);
  image(poly, poly45.position.x, poly45.position.y, 40, 40);
  image(poly, poly46.position.x, poly46.position.y, 40, 40);
  image(poly, poly47.position.x, poly47.position.y, 40, 40);
  image(poly, poly48.position.x, poly48.position.y, 40, 40);
  image(poly, poly49.position.x, poly49.position.y, 40, 40);
  image(poly, poly50.position.x, poly50.position.y, 40, 40);
  image(poly, poly51.position.x, poly51.position.y, 40, 40);
  image(poly, poly52.position.x, poly52.position.y, 40, 40);
  image(poly, poly53.position.x, poly53.position.y, 40, 40);
  image(poly, poly54.position.x, poly54.position.y, 40, 40);
  image(poly, poly55.position.x, poly55.position.y, 40, 40);
  image(poly, poly56.position.x, poly56.position.y, 40, 40);
  image(poly, poly57.position.x, poly57.position.y, 40, 40);
  image(poly, poly58.position.x, poly58.position.y, 40, 40);
  image(poly, poly59.position.x, poly59.position.y, 40, 40);
  image(poly, poly60.position.x, poly60.position.y, 40, 40);
}
