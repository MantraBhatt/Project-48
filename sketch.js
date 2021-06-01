var hero;
var her_ani
var vaccine;
var vaccine;

var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22;
var edge1,edge2,edge3,edge4;

function preload(){
  hero_ani = loadAnimation("man1.png","man2.png","man3.png","man4.png","man5.png","man6.png","man7.png","man8.png","man9.png","man10.png","man11.png","man12.png","man13.png");
  vaccine_img = loadImage("Vaccine.png");
}

function setup() {
  createCanvas(400,400);
  
hero = createSprite(25,30,15,15)
hero.addAnimation("running",hero_ani);
hero.scale = 0.15;


vaccine = createSprite(370,370,25);
vaccine.addImage(vaccine_img);
vaccine.scale = 0.15;
vaccine.x = 370;
vaccine.y = 370;


edge1 = createSprite(1,1,2,2000);
edge1.visible = false;

edge2 = createSprite(400,1,2,2000);
edge2.visible = false;

edge3 = createSprite(1,400,2000,2);
edge3.visible = false;

edge4 = createSprite(200,1,2000,2);
edge4.visible = false;


cardboard1 = createSprite(10,70,100,20);
cardboard2 = createSprite(100,130,130,20);
cardboard3 = createSprite(120,10,20,170);
cardboard4 = createSprite(170,20,100,20);
cardboard5 = createSprite(20,290,80,20);
cardboard6 = createSprite(150,220,100,20);
cardboard7 = createSprite(250,150,80,20);
cardboard8 = createSprite(60,200,25,80);
cardboard9 = createSprite(150,175,25,35);
cardboard10 = createSprite(230,280,25,70);
cardboard11 = createSprite(150,320,25,90);
cardboard12 = createSprite(220,70,100,20)
cardboard13 = createSprite(50,380,100,20);
cardboard14 = createSprite(350,70,25,70);
cardboard15 = createSprite(260,210,25,50);
cardboard16 = createSprite(350,230,100,20);
cardboard17 = createSprite(350,170,25,60);
cardboard18 = createSprite(250,380,100,20);
cardboard19 = createSprite(350,290,25,60);
cardboard20 = createSprite(290,290,55,20);
cardboard21 = createSprite(280,70,25,65);
cardboard22 = createSprite(100,285,25,35);
}

function draw() {
  background(255,255,255);  
  
  hero.bounceOff(edge1);
  hero.bounceOff(edge2);
  hero.bounceOff(edge3);
  hero.bounceOff(edge4);
  
  hero.bounceOff(cardboard1);
  hero.bounceOff(cardboard2);
  hero.bounceOff(cardboard3);
  hero.bounceOff(cardboard4);
  hero.bounceOff(cardboard5);
  hero.bounceOff(cardboard6);
  hero.bounceOff(cardboard7);
  hero.bounceOff(cardboard8);
  hero.bounceOff(cardboard9);
  hero.bounceOff(cardboard10);
  hero.bounceOff(cardboard11);
  hero.bounceOff(cardboard12);
  hero.bounceOff(cardboard13);
  hero.bounceOff(cardboard14);
  hero.bounceOff(cardboard15);
  hero.bounceOff(cardboard16);
  hero.bounceOff(cardboard17);
  hero.bounceOff(cardboard18);
  hero.bounceOff(cardboard19);
  hero.bounceOff(cardboard20);
  hero.bounceOff(cardboard21);
  hero.bounceOff(cardboard22);



  
  
  if (noFill()) {
    hero.velocityX = 0;
    hero.velocityY = 0;

  }
  
  if(keyDown("UP_ARROW")) {
    hero.velocityX = 0;
    hero.velocityY = -5;
  }
if (keyDown(DOWN_ARROW)) {
hero.velocityX = 0;
hero.velocityY = 5;


}

 if (keyDown(LEFT_ARROW)) {
    hero.velocityX = -5;
    hero.velocityY = 0;
      
    }
 if (keyDown(RIGHT_ARROW)) {
  hero.velocityX = 5;
  hero.velocityY = 0;
                              
}

if (hero.bounceOff(vaccine)) {
  textSize(40);
  stroke("darkgreen");
  text("You are Vacinated",70,200);
  
}

  drawSprites();

}