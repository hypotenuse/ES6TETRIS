
import Game from './classes/Game'
import CanvasScene from './classes/CanvasScene'
import Tetramine from './classes/Tetramine'

const precision = (number, precision) => Math.round(number * (10 ** precision)) / (10 ** precision)
const randomize = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

const [addEvent, removeEvent] = [document.addEventListener.bind(document), document.removeEventListener.bind(document)]
const [ROTATIONANGLE, PRECISION_COEFF] = [Math.PI / 2, 4]
const [L, R, D, U, ENTER] = [37, 39, 40, 38, 13]
const [ROWS, COLUMNS] = [16, 12]
const BOXGAP = 4
const BOXSIZE = 20
const BOXCLR = '#111'
const BOXOFFSET = BOXSIZE + BOXGAP

const [SW, SH, SCLR] = [COLUMNS * BOXOFFSET + BOXGAP, ROWS * BOXOFFSET + BOXGAP, '#eeeeee']
const scene = new CanvasScene(SW, SH, SCLR)


Game.init(initData => {

	const spawnRandomTetramine = () => {
		const types = [
			Tetramine.types.I,
			Tetramine.types.O,
			Tetramine.types.S,
			Tetramine.types.Z,
			Tetramine.types.T,
			Tetramine.types.L,
			Tetramine.types.L2
		]
		return new Tetramine(types[randomize(0, types.length - 1)], BOXGAP, BOXGAP, BOXSIZE, BOXCLR, BOXGAP)
	}

	const placeTetramineToInvisiblePoint = tetramine => {
		const {L2, T} = Tetramine.types
		let lowestBox = tetramine.boxes[0]
		for (let v = 1; v < tetramine.boxes.length; v++) {
			if (tetramine.boxes[v].posy > lowestBox.posy) {
				lowestBox = tetramine.boxes[v]
			}
		}
		if (tetramine.type == L2 || tetramine.type == T) tetramine.move(1, BOXOFFSET * 6)
		else tetramine.move(1, BOXOFFSET * 5)
		tetramine.move(3, lowestBox.posy + BOXSIZE)
		return tetramine
	}

	const pushNextTetramine = () => {
		currentTetramine = nextTetramine
		nextTetramine = spawnRandomTetramine()
		scene.push(placeTetramineToInvisiblePoint(currentTetramine), nextTetramine)
	}

	const removeFilledRows = () => {
		let filledRows = 0
		for (let row = 0; row < ROWS; row++) {
			let boxesInARow = []
			for (let column = 0; column < COLUMNS; column++) {
				for (let w = 0; w < scene.boxes.length; ++w) {
					if (row * BOXOFFSET + BOXGAP == precision(scene.boxes[w].posy, PRECISION_COEFF) && column * BOXOFFSET + BOXGAP == precision(scene.boxes[w].posx, PRECISION_COEFF)) {
						boxesInARow[boxesInARow.length] = scene.boxes[w]
					}
				}
			}
			const ifFilledRow = boxesInARow.length == COLUMNS
			if (ifFilledRow) {
				const firstBoxInARow = boxesInARow[0]
				filledRows++
				for (let v = 0; v < boxesInARow.length; v++) {
					for (let w = 0; w < scene.boxes.length; ++w) {
						if (scene.boxes[w] === boxesInARow[v]) scene.boxes.splice(w--, 1)
					}
				}
				for (let w = 0; w < scene.boxes.length; ++w) {
					if (scene.boxes[w].posy < firstBoxInARow.posy) {
						scene.boxes[w].posy = scene.boxes[w].posy + BOXOFFSET
					}
				}
			}
		}
		if (filledRows == 0) return 0
		else return filledRows + removeFilledRows()
	}

	const transformFilledRowsToScoreIfNeeded = () => {
		let filledRows = removeFilledRows()
		if (filledRows > 0) {
			if (filledRows == 1) scene.points(1000)
			else scene.points(1000 * 2 * filledRows)
		}
	}

	const tetramineCollidesBox = (offsetX, offsetY) => {
		const tetramine = currentTetramine
		const isSelfBox = sceneBox => {
			for (let v = 0; v < tetramine.boxes.length; ++v) if (sceneBox === tetramine.boxes[v]) return true
		}
		for (let v = 0; v < tetramine.boxes.length; ++v) {
			for (let w = 0; w < scene.boxes.length; ++w) {
				if (!isSelfBox(scene.boxes[w])) {
					if (precision(tetramine.boxes[v].posx + offsetX, PRECISION_COEFF) == precision(scene.boxes[w].posx, PRECISION_COEFF) && precision(tetramine.boxes[v].posy + offsetY, PRECISION_COEFF) == precision(scene.boxes[w].posy, PRECISION_COEFF)) {
						return true
					}
				}
			}
		}
		return false
	}

	const completeGameCriteria = () => {
		for (let v = 0; v < scene.boxes.length; v++) {
			if (precision(scene.boxes[v].posy, PRECISION_COEFF) == BOXGAP) {
				return true
			}
		}
		return false
	}

	const completeMovementDownCriteria = tetramine => {
		for (let i = 0; i < tetramine.boxes.length; ++i) {
			if (precision(tetramine.boxes[i].posy + BOXOFFSET, PRECISION_COEFF) == SH) {
				return true
			}
		}
		if (tetramineCollidesBox(0, BOXOFFSET)) return true
	}

	const completeMovementSideCriteria = (tetramine, side) => {
		if (side == 0) {
			if (tetramineCollidesBox(-BOXOFFSET, 0)) return true
			for (let i = 0; i < tetramine.boxes.length; ++i) if (precision(tetramine.boxes[i].posx - BOXGAP, PRECISION_COEFF) == 0) return true
		}
		else if (side == 1) {
			if (tetramineCollidesBox(BOXOFFSET, 0)) return true
			for (let i = 0; i < tetramine.boxes.length; ++i) if (precision(tetramine.boxes[i].posx + BOXOFFSET, PRECISION_COEFF) == SW) return true
		}
		return false
	}

	const allowedRotation = tetramine => {
		if (tetramine.rotationAllowed == false) return false
		for (let v = 0; v < tetramine.boxes.length; ++v) {
			const [boxPosx, boxPosy] = [tetramine.boxes[v].posx, tetramine.boxes[v].posy]
			if (boxPosx < 0 
				|| boxPosy < 0 
				|| boxPosx + BOXSIZE > SW 
				|| boxPosy + BOXSIZE > SH) return false
		}
		if (tetramineCollidesBox(0, 0)) return false
		return true
	}

	let [currentTetramine, nextTetramine] = [spawnRandomTetramine(), spawnRandomTetramine()]
	
	let [keydownEventListener, keydownEvent] = [undefined, 'keydown']
	
	scene.push(placeTetramineToInvisiblePoint(currentTetramine), nextTetramine)
	scene.render()

	let interval = setInterval(() => {
		if (completeMovementDownCriteria(currentTetramine)) {
			if (completeGameCriteria()) {
				scene.render()
				Game.complete()
			}
			else {
				transformFilledRowsToScoreIfNeeded()
				pushNextTetramine()
				scene.render()
			}
		}
		else {
			currentTetramine.move(2, BOXOFFSET)
			scene.render()
		}
	}, 500)

	addEvent(keydownEvent, keydownEventListener = event => {
		const pressedCode = event.keyCode
		if (pressedCode == R) {
			if (completeMovementSideCriteria(currentTetramine, 1) == false) {
				currentTetramine.move(1, BOXOFFSET)
			}
			scene.render()
		}
		else if (pressedCode == L) {
			if (completeMovementSideCriteria(currentTetramine, 0) == false) {
				currentTetramine.move(0, BOXOFFSET)
			}
			scene.render()
		}
		else if (pressedCode == U) {
			currentTetramine.rotate(-ROTATIONANGLE)
			if (allowedRotation(currentTetramine) == false) currentTetramine.rotate(ROTATIONANGLE)
			scene.render()
		}
		else if (pressedCode == D) {
			while (!completeMovementDownCriteria(currentTetramine)) {
				currentTetramine.move(2, BOXOFFSET)
			}
			if (completeGameCriteria()) {
				scene.render()
				Game.complete()
			}
			else {
				transformFilledRowsToScoreIfNeeded()
				pushNextTetramine()
				scene.render()
			}
		}
	})

	initData.interval = interval
	initData.keydownEvent = keydownEvent
	initData.keydownEventListener = keydownEventListener
},

initData => {
	const {interval, keydownEvent, keydownEventListener} = initData
	clearInterval(interval)
	removeEvent(keydownEvent, keydownEventListener)
	const enterEventHandler = event => {
		const pressedCode = event.keyCode
		if (pressedCode == ENTER) {
			scene.clear()
			removeEvent(keydownEvent, enterEventHandler)
			Game.init()
		}
	}
	scene.render(true)
	addEvent(keydownEvent, enterEventHandler)
})