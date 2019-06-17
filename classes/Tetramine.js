
import Box from './Box'

const [T, O, S, Z, L, L2, I] = [0, 1, 2, 3, 4, 5, 6]

class Tetramine {
	
	constructor(type, posx, posy, size, color, gap = 4) {
		const offset = size + gap
		this.type = type
		this.rotationAllowed = true
		if (type == Tetramine.types.T) {
			this.boxes = [
				new Box(posx, posy, size, color),
				new Box(posx - offset, posy, size, color),
				new Box(posx + offset, posy, size, color),
				new Box(posx, posy + offset, size, color)
			]
		}
		else if (type == Tetramine.types.O) {
			this.boxes = [
				new Box(posx, posy, size, color),
				new Box(posx + offset, posy, size, color),
				new Box(posx, posy + offset, size, color),
				new Box(posx + offset, posy + offset, size, color)
			]
			this.rotationAllowed = false
		}
		else if (type == Tetramine.types.S) {
			this.boxes = [
				new Box(posx, posy, size, color),
				new Box(posx + offset, posy, size, color),
				new Box(posx + offset, posy - offset, size, color),
				new Box(posx, posy + offset, size, color)
			]
		}
		else if (type == Tetramine.types.Z) {
			this.boxes = [
				new Box(posx, posy, size, color), 
				new Box(posx + offset, posy, size, color), 
				new Box(posx + offset, posy + offset, size, color), 
				new Box(posx, posy - offset, size, color)
			]
		}
		else if (type == Tetramine.types.L) {
			this.boxes = [
				new Box(posx, posy, size, color), 
				new Box(posx, posy - offset, size, color), 
				new Box(posx, posy + offset, size, color), 
				new Box(posx + offset, posy + offset, size, color)
			]
		}
		else if (type == Tetramine.types.L2) {
			this.boxes = [
				new Box(posx, posy, size, color), 
				new Box(posx, posy - offset, size, color), 
				new Box(posx, posy + offset, size, color), 
				new Box(posx - offset, posy + offset, size, color)
			]
		}
		else if (type == Tetramine.types.I) {
			this.boxes = [
				new Box(posx, posy, size, color), 
				new Box(posx - offset, posy, size, color), 
				new Box(posx + offset, posy, size, color), 
				new Box(posx + offset * 2, posy, size, color)
			]
		}
	}

	rotate(angle = -Math.PI / 2) {
		const rotate = (posx, posy) => [posx * Math.cos(angle) + posy * Math.sin(angle), -posx * Math.sin(angle) + posy * Math.cos(angle)]
		const baseBox = this.boxes[0]
		const [baseBoxPosx, baseBoxPosy] = [baseBox.posx, baseBox.posy]
		for (let i = 0; i < this.boxes.length; i++) {
			if (i == 0) continue
			this.boxes[i].posx = this.boxes[i].posx - baseBoxPosx
			this.boxes[i].posy = this.boxes[i].posy - baseBoxPosy
			const [newPosx, newPosy] = rotate(this.boxes[i].posx, this.boxes[i].posy)
			this.boxes[i].posx = newPosx + baseBoxPosx
			this.boxes[i].posy = newPosy + baseBoxPosy
		}
	}

	// type = 0: LEFT
	// type = 1: RIGHT
	// type = 2: DOWN
	// type = 3: UP
	move(type, offset) {
		if (type == 0) for (let i = 0; i < this.boxes.length; ++i) this.boxes[i].posx = this.boxes[i].posx - offset
		if (type == 1) for (let i = 0; i < this.boxes.length; ++i) this.boxes[i].posx = this.boxes[i].posx + offset
		if (type == 2) for (let i = 0; i < this.boxes.length; ++i) this.boxes[i].posy = this.boxes[i].posy + offset
		if (type == 3) for (let i = 0; i < this.boxes.length; ++i) this.boxes[i].posy = this.boxes[i].posy - offset
	}

}

Tetramine.types = { T, O, S, Z, L, L2, I }

export default Tetramine