var doraemon,doraemon_running,doraemon_lose,doraemon_won;
var bg,bg_image;
var ground;
function preload(){
doraemon_running=loadImage("Image\pngkit_doraemon-png_685605.png")
bg_image=loadImage("Image\playground.png");
}
function setup(){createCanvas(1000,600);
    bg=createSprite(500,300,1000,600);
    bg.addImage(bg_image);
    bg.scale=1;

    doraemon=createSprite(200,400,20,50);
    doraemon.scale=0.2
    ground=createSprite(200,585,400,10);
    ground.visible=false;
    
}
function draw(){
    drawSprites()
    if(keyDown("space")){
        doraemon.velocityY=-16;
        doraemon.velocityY=doraemon.velocityY+0.5;
    }
    doraemon.collide(ground)
    doraemon.debug=true;

}