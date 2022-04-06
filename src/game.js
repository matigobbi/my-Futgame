
class Game {
    constructor(){
        this.background = new Background()
		this.player = new Player()
        this.backgroundImage 
		this.playerImage 
        this.goalImage
        this.DEplayer
        this.tribuna
    }
    draw(){
        this.background.draw()  
        this.player.draw()
    }
    
    preload(){
        this.tribuna = loadImage('png/tribuna.png')
        this.tribuna1 = loadImage('png/tribuna1.png')
        this.DEplayer = loadImage('png/DEplayer.png')
        this.ball =loadImage('png/ball_soccer1.png')
        this.backgroundImage = loadImage('png/grassimg1.png')
        this.playerImage = loadImage('png/characterBlue.png')   
        this.goalImage = loadImage('png/goal.png')
        this.gerChamp = loadImage("png/germany-champion.gif")
    }
}