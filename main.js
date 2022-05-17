fil = "";
nosex = 0;
nosey = 0;
function preload(){
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.position();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("ModelLoaded!!!");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        nosex = results[0].pose.nose.x;
        console.log("nose y =" + results[0].pose.nose.y);
        nosey = results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 400, 400);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(nosex, nosey, 20)
}
function tss(){
    save("snapchatphoto.png");
}
function clown(){
    fil = "clown";
}
function hat(){
    fil = "hat";
}
