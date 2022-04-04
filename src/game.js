
class Game {
    constructor(){
        this.background = new Background()
		this.player = new Player()
        this.backgroundImage 
		this.playerImage 
        this.goal
    }
    draw(){

        
        this.background.draw()  
        this.player.draw()
    }
    
    preload(){
        
        this.backgroundImage = loadImage('png/grassimg.jpg')
        this.playerImage = loadImage('png/characterBlue.png')   
        
    }
}