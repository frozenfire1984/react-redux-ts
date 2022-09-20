function fn (x) {
	return x + 100
}

function fn2 (x) {
	return x + x
}

const mySelect = key => myObj => myObj[key];

function mySelect2 (key) {
	return function myObj() {
		return myObj[key]
	}
}

console.log(fn(fn2(2)))