
objects = [];
status = "";


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("object_status").innerHTML = object_name + "Found" ;
  object_name = document.getElementById("object_name").value;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw() {
  image(video, 0, 0, 380, 380);
      if(object[i] == object_name)
      {
      objectDetector = objectDetector.detect(video, gotResult);
      for (i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + object.length;

        fill('#FF0000');
        percent = floor(object[i].confidence * 100);
        text(object[i].label + "" + percent + "%" , object[i].x + 15 + object[i].y + 15);
        noFill();
       stroke('#FF0000');
       rect(object[i].x + object[i].y + object[i].width + object[i].height);
      }
          }          
         }
      
