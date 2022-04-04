class Player{
	constructor ( x , y){
		this.x 
		this.y = 500
		this.width = 40
		this.height = 30
	}

	draw(){
        
        image(game.playerImage, mouseX, this.y, this.width, this.height)
		if(mouseX <= 100){
			mouseX = 100}
		if(mouseX >= 450){
			mouseX = 450}
		}	
	}


class Background {
    draw() {
        image(game.backgroundImage, 0, 0, width, height)
    }
}
