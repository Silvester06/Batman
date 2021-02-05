

function preload(){
b = loadAnimation("proc41images\images/Walking Frame/walking_1.png","proc41images\images/Walking Frame/walking_2.png")  

}

function setup(){
createCanvas(1200,800)
boy = createSprite(600,200,20,20)
boy.addAnimation("boy",b)
thunder = createSprite(800,20,10,10)
    
}

function draw(){
    drawSprites();
}   

