
class Game {
    constructor(){
        this.background = new Background()
		this.player = new Player()
        this.backgroundImage 
		this.playerImage 
        this.goalImage
        this.ball = new Player("ball")
        this.DEplayer
    }
    draw(){

        
        this.background.draw()  
        this.player.draw()
    }
    
    preload(){
        this.DEplayer = loadImage('png/DEplayer.png')
        this.ball =loadImage('png/ball_soccer1.png')
        this.backgroundImage = loadImage('png/grassimg1.png')
        this.playerImage = loadImage('png/characterBlue.png')   
        this.goalImage = loadImage('png/goal.png')
    }
}