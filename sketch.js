//Creates variables.
var x, y;
//var gSlider, fVal;
var database;

var drawing = [];

var db_drawing = [];
var eraser

function setup() {
  //Creates the canvas.
  createCanvas(1200, 600);

  //Gives the background colour as white.
  background(0);

  database = firebase.database();
  readData();


  eraser = createButton("Clear")

}

function mouseDragged() {
  var point = {
    x: mouseX,
    y: mouseY,
    x1: pmouseX,
    y1: pmouseY,
  };
  stroke("white")
  drawing.push(point);
  var drawingRef = database.ref("drawing");
  drawingRef.set({
    d: drawing,
  });
}

function draw() {
 // clearDrawing

 eraser.mousePressed(() => {
      stroke("black")
      console.log("hi")
 })

  //Gives the value of mouse position for the variables.
  x = mouseX;
  y = mouseY;

  //Gives the value of slider for fval.


  
  //Draws lines.
  // if (mouseIsPressed && mouseY < 400) {
  //   //stroke(0);
  //   stroke(strokeColor);
  //   strokeWeight(fVal);
  //   line(x, y, pmouseX, pmouseY);
  // }
  // //
  // //Draws the red line
  // for (var i = 0; i < 1166; i = i + 20) {
  //   stroke("black");
  //   strokeWeight(2);
  //   line(i, 400, i + 5, 400);
  // }

  //Real time drawing
  for (var i of db_drawing) {
    line(i.x, i.y, i.x1, i.y1);
  }
}

function readData() {
  var query = database.ref("drawing/").on("value", (data) => {
    db_drawing = data.val().d;
  });
}



