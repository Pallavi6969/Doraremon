var doraemon,doraemon_running,doraemon_lose,doraemon_won;
var bg,bg_image;
function preload(){
doraemon_running=loadAnimation("Image\clipart4224351.png")
bg_image=loadImage("Image\nobita home.jpg","Image\playground.png","Image\shizuka home.jpg","Image\school.png","Image\sunio home.jpg");
}
function setup(){createCanvas(1000,600);
    bg=createSprite(500,300,1000,600);
    bg.addImage(bg_image);
    bg.scale=0.5

    doraemon=createSprite(200,400,20,50)
}
function draw(){
    dramSprites()
}