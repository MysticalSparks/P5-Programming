//create variable to store color of canvas
var stageColor;

function setup() {
 	createCanvas(300, 300);
    //initiliaze variable
    stageColor = "#FF0000"       
}

function draw() {
    //set background to value of variable
    background(stageColor);
}

function mousePressed(){
    //if stage color is red 
    if (stageColor === "#FF0000"){
        //set it to blue
        stageColor = "#0000FF";  
    } else {
        //else set it to red
        stageColor = "#FF0000";
    }
     //the console can check the value of a variable 
    //console.log(stageColor);
}