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
console.log('===================================');

//? Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
// 	let password = prompt("Password?", '');
// 	if (password == "rockstar") ok();
// 	else fail();
// }

// let user = {
// 	name: 'Вася',

// 	loginOk() {
// 		alert(`${this.name} logged in`);
// 	},

// 	loginFail() {
// 		alert(`${this.name} failed to log in`);
// 	},

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
console.log('===========================================================');


//? Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

// Объект user был изменён.Теперь вместо двух функций loginOk / loginFail у него есть только одна – user.login(true / false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail ?

function askPassword(ok, fail) {
	let password = prompt("Password?", '');
	if (password == "rockstar") ok();
	else fail();
}

let user = {
	name: 'John',

	login(result) {
		alert(this.name + (result ? ' logged in' : ' failed to log in'));
	}
};

// askPassword(?, ?);
askPassword(user.login.bind(user, true), user.login.bind(user, false));
