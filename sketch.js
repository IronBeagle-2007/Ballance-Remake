
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var gameState=welcomeScreen;
var darkSkyImg ,galaxyImg,hazyImg,snowImg,spaceImg, welcomeBgImg;
var crystalBallImg, leatherBallImg, stoneBallImg, woodenBallImg,paperBallImg;
var welcomeScreen,level1,level2,level3, level4,level5;
var start, startImg;
var exit,exitImg;
var levelOpt,levelOptImg
var levelsList,levelsListImg;
var madeBy,madeByImg;
var name,nameImg;
var screen2,screen2Img;


function preload()
{
  //Backgrounds
darkSkyImg=loadImage("images/Backgrounds/darkSky_bg.jpg");
galaxyImg=loadImage("images/Backgrounds/galaxy_bg.jpg");
hazyImg=loadImage("images/Backgrounds/hazy_bg.jpg");
snowImg=loadImage("images/Backgrounds/snow_bg.jpg");
spacemg=loadImage("images/Backgrounds/space_bg.jpg");
welcomeBgImg=loadImage("images/Backgrounds/welcomeBg.jpg");

//Balls
crystalBallImg=loadImage("images/Balls/crystalBall.png");
leatherBallImg=loadImage("images/Balls/leatherBall.png");
stoneBallImg=loadImage("images/Balls/stoneBall.png");
woodenBallImg=loadImage("images/Balls/woodenBall.jpg");
paperBallImg=loadImage("images/Balls/paperBall.png");

//Assets
aboutImg=loadImage("images/Assets/about.png");
exitImg=loadImage("images/Assets/exit.png");
levelOptImg=loadImage("images/Assets/levelOption.png");
levelsListImg=loadImage("images/Assets/levelsList.png");
madeByImg=loadImage("images/Assets/madeBy.png");
nameImg=loadImage("images/Assets/name.png");
screen2Img=loadImage("images/Assets/screen2.png");
startImg=loadImage("images/Assets/startButton.png");

}


function setup()
{
  createCanvas(windowWidth-1,windowHeight-2);
  background(windowWidth-1,windowHeight-2);

 

function draw() 
{ if(gameState===welcomeScreen){
  background(welcomeBgImg);
}


 drawSprites();








}
}