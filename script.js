let car = {
	color: 'red',
	model: 'Lada',
	changeColor(color) {
		this.color = color;
	}
};

let home = {
	color: 'green',
}

console.log(car.color);

car.changeColor('blue');

console.log(car.color);

// car.changeColor.call(home, 'orange');
car.changeColor.bind(home, 'orange');

console.log(home.color);

//==================================


const arr = [1, 2, 3, 4, 5];

function mulArr(arr, value) {
	return arr.map(elem => elem * value)
}

Array.prototype.multBy = function (n) {
	console.log('multBy', this);
	return this.map(elem => elem * n)
}

// console.log(mulArr(arr, 2));
console.log(arr.multBy(4));
