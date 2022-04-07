
class Game {
    constructor(){
        this.background = new Background()
		this.player = new Player()
        this.backgroundImage 
		this.playerImage 
        this.goalImage
        this.DEplayer
        this.tribuna
    //    this.ballcatched
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
        this.messi = loadImage("png/messi.gif")
    //    this.ballcatched = loadSound("png/ball-catched.mp3")
    //    this.ballkicked = loadSound("png/ball-kick.mp3")
   //     this.soccerballkicked = loadSound("png/soccer-ball-kick.mp3")
   //     this.crowd =loadSound("png/crowd-stadium.mp3")
    }
}