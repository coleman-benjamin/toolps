Data.Common = {
	back : {
		sprite : 'button',
		x : 940,
		y : 60		
	}
}

Data.SpriteTest = {
	player : {
		spriteKey : 'walkingSprites',
		frameRate : 10,
		movementEnabled : false
	},

	copy : {
		instructions : {
			text : 'Press up/down to adjust framerate,\nleft/right to animate,\nspace to toggle movement',
			font : {font: '16px consolas', fill: '#FFFFFF'},
			x : 40,
			y : 40
		}	
	},
}

Data.CameraTest = {
	player : {
		spriteKey : 'walkingSprites',
		frameRate : 10,
		movementEnabled : true
	}	
}