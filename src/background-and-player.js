let ballX = 280
let ballY = 100
/*function randomX(){
	 return SpeedX * ((Math.random()*4) - 2)}
function randomY(){ 
	 return (Math.random()*5.5) +3.5}*/
let speedX = (Math.random()*4) - 2;
let speedY = (Math.random()*7.5) + 3.5
let leftWall = 110
let rigthWall = 440
let score=1 
var ballkicked = new Audio('png/ball-kick.mp3');
var crowd = new Audio('png/crowd-stadium.mp3');
var ballcatched = new Audio('png/ball-catched.mp3');
var gol = new Audio('png/gol-crowd.mp3');
var finalclap = new Audio('png/final-clapping.mp3');
var ballcatched2 = new Audio('png/catched-crowd.mp3');


crowd.play();


var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function keyPressed(){
	if(keyCode === 32){
		location.reload();
}};

class Player{
	constructor ( x , y){
		this.x 
		this.y
		this.width = 38
		this.height = 18	
	}	

	draw(){	
			
		let xm = mouseX;
		let xc = constrain(mouseX, leftWall, rigthWall);
        image(game.DEplayer, 260, 80, 40, 18);
		image(game.ball, ballX, ballY, 20 , 20);
        image(game.playerImage, xc - 17, 485, this.width, this.height);
		ballX = ballX - (speedX);
		ballY = ballY + (speedY);
		//here text for a goal
		//here the ball re-appears
		if( ballX <= 50 || ballX  >= 500 || ballY <= -20){
			ballX = 270
			ballY = 100
			speedY = 0
			speedX = 0
			document.querySelector(".score").innerText=score++;
			//starts delay
			delay(function(){
				speedX = (Math.random()*4) - 2;
				speedY = (Math.random()* 5.5)+ 3.5; 
				ballkicked.play();
			}, 1500 ); 
			// end delay
			
		}

		let paloleft = dist(ballX, ballY, 89 , 485)
		let palorigth = dist (ballX, ballY, 457 , 485)

		// si golpea los palos o el arquerox
		if (paloleft < 30){ speedY -=1};
		if (palorigth < 30){ speedY -=1};
 		let d = dist(ballX, ballY, Math.round(mouseX), 485);
	
		if ( d < 25 ){ 
			ballcatched.play();
			ballcatched2.play();
			speedY -= 3
			var mySave= createDiv('Goood save!!');
			mySave.style("font-family", "Fuzzy Bubbles");
			mySave.style("background-color", "white");
			mySave.style('font-size', '22px');
			mySave.position(730, 250);
			mySave.style.position ="static"
			function removediv(){
				mySave.remove()
			}
			setTimeout(removediv, 750)
		 }
		 //HERE THE GAME FINISH
		 if(score>=7){
			speedY = 0;
			speedX = 0;
			textSize(30);
			text("YOU WON!!!",200, 200);
			text(" Press Spacebar to play again", 80 , 240);
			image(game.messi, 100, 270, 350 ,180 );
			finalclap.play();
		}
		 
			//HERE THE GAME FINISH
		if( ballY >= 514){ 
			speedY = 0;
			speedX = 0
			textSize(30);
			text(" You loose :(",200, 200)
			text(" Press Spacebar to play again", 80 , 240)	;
			image(game.gerChamp, 100, 270, 350 ,180 );
			gol.play();
		 }	
		}	
	}


class Background {
    draw() {
		image(game.backgroundImage, 0, 0, width, height)
		image(game.goalImage, 0, 507, 550, 55)
		image(game.tribuna1, 500, 30, 70, 500)
		image(game.tribuna, -7, 30, 70, 500)		
    }
}
