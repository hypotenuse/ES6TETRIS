

class Game {
	
	static init(initHandler, completeHandler) {
		if (undefined == initHandler && undefined == completeHandler) {
			this.initHandler(this.initData)
		}
		else {
			[this.initHandler, this.completeHandler] = [initHandler, completeHandler];
			this.initHandler(this.initData)
		}
	}
	
	static complete() {
		this.completeHandler(this.initData)
	}
}

Game.initData = {}

export default Game