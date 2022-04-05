let ballX = 270
let ballY = 100
let speedX =  (Math.random()*2.8) - 1.4;
let speedY = (Math.random()* 4)+2
let leftWall = 110
let rigthWall = 440

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
        image(game.DEplayer, 260, 80, 40, 18)
		image(game.ball, ballX, ballY, 20 , 20)
        image(game.playerImage, xc - 17, 485, this.width, this.height)
		if( ballX <= 50 || ballX  >= 540){
			ballX = 270
			ballY = 100
			speedY = speedY * -1
		}
		
		ballX = ballX - (speedX)
		ballY = ballY + (speedY)
 		let d = dist(ballX, ballY, Math.round(mouseX), 485);
	//	console.log(Math.round(d))
		if ( d < 20 ){ speedY -= 1 }	
		//HERE THE GAME FINISH
		if( ballY >= 512){ speedY = 0;
			speedX = 0}	
		}	
	}


class Background {
    draw() {
		image(game.backgroundImage, 0, 0, width, height)
		image(game.goalImage, 0, 505, 550, 55)
//		image(game.photograph, -70, 410, 100,189)
		image(game.tribuna1, 500, 30, 70, 500)
		image(game.tribuna, -7, 30, 70, 500)		
    }
}
