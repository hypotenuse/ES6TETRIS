
import Tetramine from './Tetramine'

class CanvasScene {
	
	constructor(width, height, backgroundColor) {
		const body = document.body || document.getElementsByTagName('body')[0]
		const canvasSceneElement = document.createElement('canvas')
		const canvasNextTetramineElement = document.createElement('canvas')
		const canvasScoreElement = document.createElement('canvas')
		canvasSceneElement.style.backgroundColor = backgroundColor
		canvasNextTetramineElement.style.backgroundColor = canvasScoreElement.style.backgroundColor = 'transparent'
		canvasSceneElement.width = this.width = width
		canvasSceneElement.height = this.height = height
		canvasNextTetramineElement.width = 150
		canvasNextTetramineElement.height = 150
		canvasScoreElement.width = 150
		canvasScoreElement.height = 150
		canvasNextTetramineElement.style.position = canvasSceneElement.style.position = canvasScoreElement.style.position = 'absolute'
		canvasSceneElement.style.top = '70px'
		canvasSceneElement.style.left = '170px'
		body.insertBefore(canvasSceneElement, body.children[0])
		body.insertBefore(canvasNextTetramineElement, body.children[0])
		body.insertBefore(canvasScoreElement, body.children[0])
		const canvasSceneElementRect = canvasSceneElement.getBoundingClientRect()
		canvasNextTetramineElement.style.top = `${canvasSceneElementRect.top}px`
		canvasNextTetramineElement.style.left = `${canvasSceneElementRect.left + this.width}px`
		canvasScoreElement.style.top = `${canvasSceneElementRect.top + 150}px`
		canvasScoreElement.style.left = `${canvasSceneElementRect.left + this.width}px`
		this.boxes = []
		this.nextTetramine = {boxes: []}
		this.pointsValue = 0
		this._canvas = { canvasSceneElement, canvasNextTetramineElement, canvasScoreElement }
	}

	push(tetramine, nextTetramine) {
		for (let i = 0; i < tetramine.boxes.length; i++) {
			this.boxes.push(tetramine.boxes[i])
		}
		if (nextTetramine && nextTetramine.boxes instanceof Array) this.nextTetramine = nextTetramine
	}

	points(points) { this.pointsValue = this.pointsValue + points }
	
	clear() {
		this.nextTetramine = {boxes: []}
		this.boxes = []
		this.pointsValue = 0
	}

	render(renderGameOver) {
		const [canvasSceneElement, canvasNextTetramineElement, canvasScoreElement] = [
			this._canvas.canvasSceneElement,
			this._canvas.canvasNextTetramineElement,
			this._canvas.canvasScoreElement
		]
		const [canvasContext, canvasNextTetramineElementContext, canvasScoreElementContext] = [
			canvasSceneElement.getContext('2d'),
			canvasNextTetramineElement.getContext('2d'),
			canvasScoreElement.getContext('2d')
		]
		const [CSW, CSH] = [this.width, this.height]
		if (renderGameOver) {
			const [T1, T2, T3, TFONT1, TFONT2, TCOLOR1, TCOLOR2] = ['GAME OVER', 'Points: ', 'Press ENTER', 'bold 36px Roboto', 'normal 17px Roboto', '#111', '#fff']
			canvasContext.globalAlpha = .75
			canvasContext.fillStyle = TCOLOR1
			canvasContext.fillRect(0, 0, CSW, CSH)
			canvasContext.globalAlpha = 1
			canvasContext.fillStyle = TCOLOR2
			canvasContext.font = TFONT1
			canvasContext.fillText(T1, 7, CSH / 2 - 24)
			canvasContext.font = TFONT2
			canvasContext.fillText(`${T2}${this.pointsValue}`, 10, CSH / 2)
			canvasContext.fillText(T3, 10, CSH / 2 + 24)
		}
		else {
			const nextTetramineType = this.nextTetramine.type
			const [T1, T2, TFONT, TCOLOR, ZERO] = ['NEXT TETRAMINE:', 'POINTS AMOUNT:', 'bold 12px Roboto', '#888', '0']
			canvasNextTetramineElementContext.clearRect(0, 0, CSW, CSH)
			canvasContext.clearRect(0, 0, CSW, CSH)
			canvasScoreElementContext.clearRect(0, 0, CSW, CSH)
			for (let i = 0; i < this.boxes.length; ++i) {
				const {color, posx, posy, size} = this.boxes[i]
				canvasContext.fillStyle = color
				canvasContext.fillRect(posx, posy, size, size)
			}
			for (let i = 0; i < this.nextTetramine.boxes.length; ++i) {
				const {posx, posy, size, type} = this.nextTetramine.boxes[i]
				const {S, Z, L, L2} = Tetramine.types
				const [offsetX, offsetY1, offsetY2] = [size * 2 - 8, size * 2 + 4, size]
				canvasNextTetramineElementContext.fillStyle = TCOLOR
				if (nextTetramineType == S || nextTetramineType == Z || nextTetramineType == L || nextTetramineType == L2) {
					canvasNextTetramineElementContext.fillRect(posx + offsetX, posy + offsetY1, size, size)
				}
				else canvasNextTetramineElementContext.fillRect(posx + offsetX, posy + offsetY2, size, size)
			}
			canvasNextTetramineElementContext.font = TFONT
			canvasNextTetramineElementContext.fillStyle = TCOLOR
			canvasNextTetramineElementContext.fillText(T1, 10, 10)
			canvasScoreElementContext.font = TFONT
			canvasScoreElementContext.fillStyle = TCOLOR
			canvasScoreElementContext.fillText(T2, 10, 10)
			canvasScoreElementContext.fillText(`${ZERO.repeat(6 - String(this.pointsValue).length)}${this.pointsValue}`, 10, 25)
		}
	}
}

export default CanvasScene