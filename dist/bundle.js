/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Box = __webpack_require__(4);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var T = 0,
    O = 1,
    S = 2,
    Z = 3,
    L = 4,
    L2 = 5,
    I = 6;

var Tetramine = function () {
	function Tetramine(type, posx, posy, size, color) {
		var gap = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 4;

		_classCallCheck(this, Tetramine);

		var offset = size + gap;
		this.type = type;
		this.rotationAllowed = true;
		if (type == Tetramine.types.T) {
			this.boxes = [new _Box2.default(posx, posy, size, color), new _Box2.default(posx - offset, posy, size, color), new _Box2.default(posx + offset, posy, size, color), new _Box2.default(posx, posy + offset, size, color)];
		} else if (type == Tetramine.types.O) {
			this.boxes = [new _Box2.default(posx, posy, size, color), new _Box2.default(posx + offset, posy, size, color), new _Box2.default(posx, posy + offset, size, color), new _Box2.default(posx + offset, posy + offset, size, color)];
			this.rotationAllowed = false;
		} else if (type == Tetramine.types.S) {
			this.boxes = [new _Box2.default(posx, posy, size, color), new _Box2.default(posx + offset, posy, size, color), new _Box2.default(posx + offset, posy - offset, size, color), new _Box2.default(posx, posy + offset, size, color)];
		} else if (type == Tetramine.types.Z) {
			this.boxes = [new _Box2.default(posx, posy, size, color), new _Box2.default(posx + offset, posy, size, color), new _Box2.default(posx + offset, posy + offset, size, color), new _Box2.default(posx, posy - offset, size, color)];
		} else if (type == Tetramine.types.L) {
			this.boxes = [new _Box2.default(posx, posy, size, color), new _Box2.default(posx, posy - offset, size, color), new _Box2.default(posx, posy + offset, size, color), new _Box2.default(posx + offset, posy + offset, size, color)];
		} else if (type == Tetramine.types.L2) {
			this.boxes = [new _Box2.default(posx, posy, size, color), new _Box2.default(posx, posy - offset, size, color), new _Box2.default(posx, posy + offset, size, color), new _Box2.default(posx - offset, posy + offset, size, color)];
		} else if (type == Tetramine.types.I) {
			this.boxes = [new _Box2.default(posx, posy, size, color), new _Box2.default(posx - offset, posy, size, color), new _Box2.default(posx + offset, posy, size, color), new _Box2.default(posx + offset * 2, posy, size, color)];
		}
	}

	_createClass(Tetramine, [{
		key: 'rotate',
		value: function rotate() {
			var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -Math.PI / 2;

			var rotate = function rotate(posx, posy) {
				return [posx * Math.cos(angle) + posy * Math.sin(angle), -posx * Math.sin(angle) + posy * Math.cos(angle)];
			};
			var baseBox = this.boxes[0];
			var _ref = [baseBox.posx, baseBox.posy],
			    baseBoxPosx = _ref[0],
			    baseBoxPosy = _ref[1];

			for (var i = 0; i < this.boxes.length; i++) {
				if (i == 0) continue;
				this.boxes[i].posx = this.boxes[i].posx - baseBoxPosx;
				this.boxes[i].posy = this.boxes[i].posy - baseBoxPosy;

				var _rotate = rotate(this.boxes[i].posx, this.boxes[i].posy),
				    _rotate2 = _slicedToArray(_rotate, 2),
				    newPosx = _rotate2[0],
				    newPosy = _rotate2[1];

				this.boxes[i].posx = newPosx + baseBoxPosx;
				this.boxes[i].posy = newPosy + baseBoxPosy;
			}
		}

		// type = 0: LEFT
		// type = 1: RIGHT
		// type = 2: DOWN
		// type = 3: UP

	}, {
		key: 'move',
		value: function move(type, offset) {
			if (type == 0) for (var i = 0; i < this.boxes.length; ++i) {
				this.boxes[i].posx = this.boxes[i].posx - offset;
			}if (type == 1) for (var _i = 0; _i < this.boxes.length; ++_i) {
				this.boxes[_i].posx = this.boxes[_i].posx + offset;
			}if (type == 2) for (var _i2 = 0; _i2 < this.boxes.length; ++_i2) {
				this.boxes[_i2].posy = this.boxes[_i2].posy + offset;
			}if (type == 3) for (var _i3 = 0; _i3 < this.boxes.length; ++_i3) {
				this.boxes[_i3].posy = this.boxes[_i3].posy - offset;
			}
		}
	}]);

	return Tetramine;
}();

Tetramine.types = { T: T, O: O, S: S, Z: Z, L: L, L2: L2, I: I };

exports.default = Tetramine;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

var _CanvasScene = __webpack_require__(3);

var _CanvasScene2 = _interopRequireDefault(_CanvasScene);

var _Tetramine = __webpack_require__(0);

var _Tetramine2 = _interopRequireDefault(_Tetramine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var precision = function precision(number, _precision) {
	return Math.round(number * Math.pow(10, _precision)) / Math.pow(10, _precision);
};
var randomize = function randomize(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

var _ref = [document.addEventListener.bind(document), document.removeEventListener.bind(document)],
    addEvent = _ref[0],
    removeEvent = _ref[1];
var ROTATIONANGLE = Math.PI / 2,
    PRECISION_COEFF = 4;
var L = 37,
    R = 39,
    D = 40,
    U = 38,
    ENTER = 13;
var ROWS = 16,
    COLUMNS = 12;

var BOXGAP = 4;
var BOXSIZE = 20;
var BOXCLR = '#111';
var BOXOFFSET = BOXSIZE + BOXGAP;

var SW = COLUMNS * BOXOFFSET + BOXGAP,
    SH = ROWS * BOXOFFSET + BOXGAP,
    SCLR = '#eeeeee';

var scene = new _CanvasScene2.default(SW, SH, SCLR);

_Game2.default.init(function (initData) {

	var spawnRandomTetramine = function spawnRandomTetramine() {
		var types = [_Tetramine2.default.types.I, _Tetramine2.default.types.O, _Tetramine2.default.types.S, _Tetramine2.default.types.Z, _Tetramine2.default.types.T, _Tetramine2.default.types.L, _Tetramine2.default.types.L2];
		return new _Tetramine2.default(types[randomize(0, types.length - 1)], BOXGAP, BOXGAP, BOXSIZE, BOXCLR, BOXGAP);
	};

	var placeTetramineToInvisiblePoint = function placeTetramineToInvisiblePoint(tetramine) {
		var _Tetramine$types = _Tetramine2.default.types,
		    L2 = _Tetramine$types.L2,
		    T = _Tetramine$types.T;

		var lowestBox = tetramine.boxes[0];
		for (var v = 1; v < tetramine.boxes.length; v++) {
			if (tetramine.boxes[v].posy > lowestBox.posy) {
				lowestBox = tetramine.boxes[v];
			}
		}
		if (tetramine.type == L2 || tetramine.type == T) tetramine.move(1, BOXOFFSET * 6);else tetramine.move(1, BOXOFFSET * 5);
		tetramine.move(3, lowestBox.posy + BOXSIZE);
		return tetramine;
	};

	var pushNextTetramine = function pushNextTetramine() {
		currentTetramine = nextTetramine;
		nextTetramine = spawnRandomTetramine();
		scene.push(placeTetramineToInvisiblePoint(currentTetramine), nextTetramine);
	};

	var removeFilledRows = function removeFilledRows() {
		var filledRows = 0;
		for (var row = 0; row < ROWS; row++) {
			var boxesInARow = [];
			for (var column = 0; column < COLUMNS; column++) {
				for (var w = 0; w < scene.boxes.length; ++w) {
					if (row * BOXOFFSET + BOXGAP == precision(scene.boxes[w].posy, PRECISION_COEFF) && column * BOXOFFSET + BOXGAP == precision(scene.boxes[w].posx, PRECISION_COEFF)) {
						boxesInARow[boxesInARow.length] = scene.boxes[w];
					}
				}
			}
			var ifFilledRow = boxesInARow.length == COLUMNS;
			if (ifFilledRow) {
				var firstBoxInARow = boxesInARow[0];
				filledRows++;
				for (var v = 0; v < boxesInARow.length; v++) {
					for (var _w = 0; _w < scene.boxes.length; ++_w) {
						if (scene.boxes[_w] === boxesInARow[v]) scene.boxes.splice(_w--, 1);
					}
				}
				for (var _w2 = 0; _w2 < scene.boxes.length; ++_w2) {
					if (scene.boxes[_w2].posy < firstBoxInARow.posy) {
						scene.boxes[_w2].posy = scene.boxes[_w2].posy + BOXOFFSET;
					}
				}
			}
		}
		if (filledRows == 0) return 0;else return filledRows + removeFilledRows();
	};

	var transformFilledRowsToScoreIfNeeded = function transformFilledRowsToScoreIfNeeded() {
		var filledRows = removeFilledRows();
		if (filledRows > 0) {
			if (filledRows == 1) scene.points(1000);else scene.points(1000 * 2 * filledRows);
		}
	};

	var tetramineCollidesBox = function tetramineCollidesBox(offsetX, offsetY) {
		var tetramine = currentTetramine;
		var isSelfBox = function isSelfBox(sceneBox) {
			for (var v = 0; v < tetramine.boxes.length; ++v) {
				if (sceneBox === tetramine.boxes[v]) return true;
			}
		};
		for (var v = 0; v < tetramine.boxes.length; ++v) {
			for (var w = 0; w < scene.boxes.length; ++w) {
				if (!isSelfBox(scene.boxes[w])) {
					if (precision(tetramine.boxes[v].posx + offsetX, PRECISION_COEFF) == precision(scene.boxes[w].posx, PRECISION_COEFF) && precision(tetramine.boxes[v].posy + offsetY, PRECISION_COEFF) == precision(scene.boxes[w].posy, PRECISION_COEFF)) {
						return true;
					}
				}
			}
		}
		return false;
	};

	var completeGameCriteria = function completeGameCriteria() {
		for (var v = 0; v < scene.boxes.length; v++) {
			if (precision(scene.boxes[v].posy, PRECISION_COEFF) == BOXGAP) {
				return true;
			}
		}
		return false;
	};

	var completeMovementDownCriteria = function completeMovementDownCriteria(tetramine) {
		for (var i = 0; i < tetramine.boxes.length; ++i) {
			if (precision(tetramine.boxes[i].posy + BOXOFFSET, PRECISION_COEFF) == SH) {
				return true;
			}
		}
		if (tetramineCollidesBox(0, BOXOFFSET)) return true;
	};

	var completeMovementSideCriteria = function completeMovementSideCriteria(tetramine, side) {
		if (side == 0) {
			if (tetramineCollidesBox(-BOXOFFSET, 0)) return true;
			for (var i = 0; i < tetramine.boxes.length; ++i) {
				if (precision(tetramine.boxes[i].posx - BOXGAP, PRECISION_COEFF) == 0) return true;
			}
		} else if (side == 1) {
			if (tetramineCollidesBox(BOXOFFSET, 0)) return true;
			for (var _i = 0; _i < tetramine.boxes.length; ++_i) {
				if (precision(tetramine.boxes[_i].posx + BOXOFFSET, PRECISION_COEFF) == SW) return true;
			}
		}
		return false;
	};

	var allowedRotation = function allowedRotation(tetramine) {
		if (tetramine.rotationAllowed == false) return false;
		for (var v = 0; v < tetramine.boxes.length; ++v) {
			var _ref2 = [tetramine.boxes[v].posx, tetramine.boxes[v].posy],
			    boxPosx = _ref2[0],
			    boxPosy = _ref2[1];

			if (boxPosx < 0 || boxPosy < 0 || boxPosx + BOXSIZE > SW || boxPosy + BOXSIZE > SH) return false;
		}
		if (tetramineCollidesBox(0, 0)) return false;
		return true;
	};

	var _ref3 = [spawnRandomTetramine(), spawnRandomTetramine()],
	    currentTetramine = _ref3[0],
	    nextTetramine = _ref3[1];
	var keydownEventListener = undefined,
	    keydownEvent = 'keydown';


	scene.push(placeTetramineToInvisiblePoint(currentTetramine), nextTetramine);
	scene.render();

	var interval = setInterval(function () {
		if (completeMovementDownCriteria(currentTetramine)) {
			if (completeGameCriteria()) {
				scene.render();
				_Game2.default.complete();
			} else {
				transformFilledRowsToScoreIfNeeded();
				pushNextTetramine();
				scene.render();
			}
		} else {
			currentTetramine.move(2, BOXOFFSET);
			scene.render();
		}
	}, 500);

	addEvent(keydownEvent, keydownEventListener = function keydownEventListener(event) {
		var pressedCode = event.keyCode;
		if (pressedCode == R) {
			if (completeMovementSideCriteria(currentTetramine, 1) == false) {
				currentTetramine.move(1, BOXOFFSET);
			}
			scene.render();
		} else if (pressedCode == L) {
			if (completeMovementSideCriteria(currentTetramine, 0) == false) {
				currentTetramine.move(0, BOXOFFSET);
			}
			scene.render();
		} else if (pressedCode == U) {
			currentTetramine.rotate(-ROTATIONANGLE);
			if (allowedRotation(currentTetramine) == false) currentTetramine.rotate(ROTATIONANGLE);
			scene.render();
		} else if (pressedCode == D) {
			while (!completeMovementDownCriteria(currentTetramine)) {
				currentTetramine.move(2, BOXOFFSET);
			}
			if (completeGameCriteria()) {
				scene.render();
				_Game2.default.complete();
			} else {
				transformFilledRowsToScoreIfNeeded();
				pushNextTetramine();
				scene.render();
			}
		}
	});

	initData.interval = interval;
	initData.keydownEvent = keydownEvent;
	initData.keydownEventListener = keydownEventListener;
}, function (initData) {
	var interval = initData.interval,
	    keydownEvent = initData.keydownEvent,
	    keydownEventListener = initData.keydownEventListener;

	clearInterval(interval);
	removeEvent(keydownEvent, keydownEventListener);
	var enterEventHandler = function enterEventHandler(event) {
		var pressedCode = event.keyCode;
		if (pressedCode == ENTER) {
			scene.clear();
			removeEvent(keydownEvent, enterEventHandler);
			_Game2.default.init();
		}
	};
	scene.render(true);
	addEvent(keydownEvent, enterEventHandler);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);
	}

	_createClass(Game, null, [{
		key: "init",
		value: function init(initHandler, completeHandler) {
			if (undefined == initHandler && undefined == completeHandler) {
				this.initHandler(this.initData);
			} else {
				var _ref = [initHandler, completeHandler];
				this.initHandler = _ref[0];
				this.completeHandler = _ref[1];

				this.initHandler(this.initData);
			}
		}
	}, {
		key: "complete",
		value: function complete() {
			this.completeHandler(this.initData);
		}
	}]);

	return Game;
}();

Game.initData = {};

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tetramine = __webpack_require__(0);

var _Tetramine2 = _interopRequireDefault(_Tetramine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasScene = function () {
	function CanvasScene(width, height, backgroundColor) {
		_classCallCheck(this, CanvasScene);

		var body = document.body || document.getElementsByTagName('body')[0];
		var canvasSceneElement = document.createElement('canvas');
		var canvasNextTetramineElement = document.createElement('canvas');
		var canvasScoreElement = document.createElement('canvas');
		canvasSceneElement.style.backgroundColor = backgroundColor;
		canvasNextTetramineElement.style.backgroundColor = canvasScoreElement.style.backgroundColor = 'transparent';
		canvasSceneElement.width = this.width = width;
		canvasSceneElement.height = this.height = height;
		canvasNextTetramineElement.width = 150;
		canvasNextTetramineElement.height = 150;
		canvasScoreElement.width = 150;
		canvasScoreElement.height = 150;
		canvasNextTetramineElement.style.position = canvasSceneElement.style.position = canvasScoreElement.style.position = 'absolute';
		canvasSceneElement.style.top = '70px';
		canvasSceneElement.style.left = '170px';
		body.insertBefore(canvasSceneElement, body.children[0]);
		body.insertBefore(canvasNextTetramineElement, body.children[0]);
		body.insertBefore(canvasScoreElement, body.children[0]);
		var canvasSceneElementRect = canvasSceneElement.getBoundingClientRect();
		canvasNextTetramineElement.style.top = canvasSceneElementRect.top + 'px';
		canvasNextTetramineElement.style.left = canvasSceneElementRect.left + this.width + 'px';
		canvasScoreElement.style.top = canvasSceneElementRect.top + 150 + 'px';
		canvasScoreElement.style.left = canvasSceneElementRect.left + this.width + 'px';
		this.boxes = [];
		this.nextTetramine = { boxes: [] };
		this.pointsValue = 0;
		this._canvas = { canvasSceneElement: canvasSceneElement, canvasNextTetramineElement: canvasNextTetramineElement, canvasScoreElement: canvasScoreElement };
	}

	_createClass(CanvasScene, [{
		key: 'push',
		value: function push(tetramine, nextTetramine) {
			for (var i = 0; i < tetramine.boxes.length; i++) {
				this.boxes.push(tetramine.boxes[i]);
			}
			if (nextTetramine && nextTetramine.boxes instanceof Array) this.nextTetramine = nextTetramine;
		}
	}, {
		key: 'points',
		value: function points(_points) {
			this.pointsValue = this.pointsValue + _points;
		}
	}, {
		key: 'clear',
		value: function clear() {
			this.nextTetramine = { boxes: [] };
			this.boxes = [];
			this.pointsValue = 0;
		}
	}, {
		key: 'render',
		value: function render(renderGameOver) {
			var _ref = [this._canvas.canvasSceneElement, this._canvas.canvasNextTetramineElement, this._canvas.canvasScoreElement],
			    canvasSceneElement = _ref[0],
			    canvasNextTetramineElement = _ref[1],
			    canvasScoreElement = _ref[2];
			var _ref2 = [canvasSceneElement.getContext('2d'), canvasNextTetramineElement.getContext('2d'), canvasScoreElement.getContext('2d')],
			    canvasContext = _ref2[0],
			    canvasNextTetramineElementContext = _ref2[1],
			    canvasScoreElementContext = _ref2[2];
			var _ref3 = [this.width, this.height],
			    CSW = _ref3[0],
			    CSH = _ref3[1];

			if (renderGameOver) {
				var T1 = 'GAME OVER',
				    T2 = 'Points: ',
				    T3 = 'Press ENTER',
				    TFONT1 = 'bold 36px Roboto',
				    TFONT2 = 'normal 17px Roboto',
				    TCOLOR1 = '#111',
				    TCOLOR2 = '#fff';

				canvasContext.globalAlpha = .75;
				canvasContext.fillStyle = TCOLOR1;
				canvasContext.fillRect(0, 0, CSW, CSH);
				canvasContext.globalAlpha = 1;
				canvasContext.fillStyle = TCOLOR2;
				canvasContext.font = TFONT1;
				canvasContext.fillText(T1, 7, CSH / 2 - 24);
				canvasContext.font = TFONT2;
				canvasContext.fillText('' + T2 + this.pointsValue, 10, CSH / 2);
				canvasContext.fillText(T3, 10, CSH / 2 + 24);
			} else {
				var nextTetramineType = this.nextTetramine.type;
				var _T = 'NEXT TETRAMINE:',
				    _T2 = 'POINTS AMOUNT:',
				    TFONT = 'bold 12px Roboto',
				    TCOLOR = '#888',
				    ZERO = '0';

				canvasNextTetramineElementContext.clearRect(0, 0, CSW, CSH);
				canvasContext.clearRect(0, 0, CSW, CSH);
				canvasScoreElementContext.clearRect(0, 0, CSW, CSH);
				for (var i = 0; i < this.boxes.length; ++i) {
					var _boxes$i = this.boxes[i],
					    color = _boxes$i.color,
					    posx = _boxes$i.posx,
					    posy = _boxes$i.posy,
					    size = _boxes$i.size;

					canvasContext.fillStyle = color;
					canvasContext.fillRect(posx, posy, size, size);
				}
				for (var _i = 0; _i < this.nextTetramine.boxes.length; ++_i) {
					var _nextTetramine$boxes$ = this.nextTetramine.boxes[_i],
					    _posx = _nextTetramine$boxes$.posx,
					    _posy = _nextTetramine$boxes$.posy,
					    _size = _nextTetramine$boxes$.size,
					    type = _nextTetramine$boxes$.type;
					var _Tetramine$types = _Tetramine2.default.types,
					    S = _Tetramine$types.S,
					    Z = _Tetramine$types.Z,
					    L = _Tetramine$types.L,
					    L2 = _Tetramine$types.L2;
					var offsetX = _size * 2 - 8,
					    offsetY1 = _size * 2 + 4,
					    offsetY2 = _size;

					canvasNextTetramineElementContext.fillStyle = TCOLOR;
					if (nextTetramineType == S || nextTetramineType == Z || nextTetramineType == L || nextTetramineType == L2) {
						canvasNextTetramineElementContext.fillRect(_posx + offsetX, _posy + offsetY1, _size, _size);
					} else canvasNextTetramineElementContext.fillRect(_posx + offsetX, _posy + offsetY2, _size, _size);
				}
				canvasNextTetramineElementContext.font = TFONT;
				canvasNextTetramineElementContext.fillStyle = TCOLOR;
				canvasNextTetramineElementContext.fillText(_T, 10, 10);
				canvasScoreElementContext.font = TFONT;
				canvasScoreElementContext.fillStyle = TCOLOR;
				canvasScoreElementContext.fillText(_T2, 10, 10);
				canvasScoreElementContext.fillText('' + ZERO.repeat(6 - String(this.pointsValue).length) + this.pointsValue, 10, 25);
			}
		}
	}]);

	return CanvasScene;
}();

exports.default = CanvasScene;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box = function Box(posx, posy, size, color) {
	_classCallCheck(this, Box);

	this.posx = posx;
	this.posy = posy;
	this.size = size;
	this.color = color;
};

exports.default = Box;

/***/ })
/******/ ]);