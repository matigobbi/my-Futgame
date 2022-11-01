let ballX = 280
let ballY = 100
let speedX = (Math.random()*4) - 2;
let speedY = (Math.random()*7.5) + 3.5
let leftWall = 110
let rigthWall = 440
let score=0
let ballkicked = new Audio('png/ball-kick.mp3');
let crowd = new Audio('png/crowd-stadium.mp3');
let ballcatched = new Audio('png/ball-catched.mp3');
let gol = new Audio('png/gol-crowd.mp3');
let finalclap = new Audio('png/final-clapping.mp3');
let ballcatched2 = new Audio('png/catched-crowd.mp3');

let delay = ( function() {
    let timer = 0;
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
			
		let xc = constrain(mouseX, leftWall, rigthWall);
    image(game.DEplayer, 260, 80, 40, 18);
		image(game.ball, ballX, ballY, 20 , 20);
    image(game.playerImage, xc - 17, 485, this.width, this.height);
		if(frameCount>= 150){
		ballX = ballX - (speedX);
		ballY = ballY + (speedY);
	}

		//here the ball re-appears
		if( ballX <= 50 || ballX  >= 500 || ballY <= -20){
			ballX = 270
			ballY = 100
			speedY = 0
			speedX = 0
			document.querySelector(".score").innerText=score+=20;
			//starts delay
			delay(function(){
				speedX = (Math.random()*4) - 2;
				speedY = (Math.random()* 5.5)+ 3.5; 
				ballkicked.play();
			}, 2000 ); 
			// end delay
			
		}
		// the ball hits the goalpost
		
		let paloleftdist = dist(ballX, ballY, 89 , 485)
		let palorigthdist = dist (ballX, ballY, 457 , 485)

		if (paloleftdist < 30){ speedY -=1};
		if (palorigthdist < 30){ speedY -=1};
 		let d = dist(ballX, ballY, Math.round(mouseX), 485);

		//the ball hits the goalkepeer
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
		 if(score>=100){
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
		crowd.play();
		image(game.backgroundImage, 0, 0, width, height)
		image(game.goalImage, 0, 507, 550, 55)
		image(game.tribuna1, 500, 30, 70, 500)
		image(game.tribuna, -7, 30, 70, 500)
		

    }
}
