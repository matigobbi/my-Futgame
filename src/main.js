

const game = new Game()
// this is used to load the game assets
function preload() {
	console.log('this is the preload')
	game.preload()
}

function setup() {
	console.log('this is the setup')
	createCanvas(550, 550)
}

function draw(){
	game.draw()
}

