let ballX = 450
let ballY = 100
let speed1 = 3
let speed2 = 1

class Player{
	constructor ( x , y){
		this.x 
		this.y
		this.width = 38
		this.height = 18
		
		
	}
	
	draw(){
        image(game.DEplayer, 450, 80, 40, 18)
		image(game.ball, ballX, ballY, 20 , 20)
        image(game.playerImage, mouseX, 485, this.width, this.height)
		if(mouseX <= 100){
			mouseX = 100}
		if(mouseX >= 415){
			mouseX = 415}
			ballX = ballX - (speed2)
			ballY = ballY + (speed1)
 		let d = dist(ballX, ballY, Math.round(mouseX), 485);
		console.log(Math.round(d))
		if ( d < 9 ){
			speed1 -= 1 		
		}
			
			
		}	
	}


class Background {
    draw() {
		image(game.backgroundImage, 0, 0, width, height)
		image(game.goalImage, 0, 505, 550, 55)
		
		
    }
}
