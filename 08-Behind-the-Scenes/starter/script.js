'use strict'

/* function t alcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		let output = `${firstName} are ${age}, born in ${birthYear}`	;
		console.log(output);

		if (birthYear >= 996 && birthYear <= 1996) {
			var millenial = true
			// Creating new variable with same name as outer scope's variable
			const firstName = 'Steve'
			const str = `Oh, and you're a millenial, ${firstName}`
			console.log(str)

			function add(a, b) {
				return a + b;
			}
			// console.log(add(1, 2))
			
			// Reassing outer scope's variable
			output = 'NEW OUTPUT';
		}
		// console.log(millenial)
		// console.log(str) 
		console.log(output)
	}
	printAge();

	return age;
}

const firstName = 'Bob';
calcAge(999);
// console.log(age);
// printAge(); */

 /* console.log(me)
 // console.log(job)
 // console.log(year)

var me = 'bob'
// let job = 'teacher'
// const year = 999

// Functions
console.log(addDecl(2,3))
// console.log(addExpr(2,3))
// console.log(addArrow(2,3))

function addDecl(a, b) {
	return a + b 
}

const addExpr = function (a,b) {
	return a + b 
}

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) {
	deleteShoppingCard()
}

var numProducts = 10;

function deleteShoppingCard() {
	console.log('All products deleted!') 
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z) */

/* // console.log(this)

const calcAge = function(year) {
	console.log(2037 - year)
	console.log(this); // undefined
}
// calcAge(999)

const calcAgeArrow = (year) => {
	console.log(2037 - year)
	console.log(this); // window, because window is the parrent
}
// calcAgeArrow(1222)

const bob = {
	year: 999,
	calcAge: function() {
	console.log(this)
	console.log(2037 - this.year)
	}
}
// bob.calcAge();

const lil = {
	year: 2017
}
lil.calcAge = bob.calcAge
lil.calcAge()

const f = bob.calcAge
f(); */

// var firstName = 'dude'

/* const bob = {
	firstName: 'Bob',
	year: 999,
	calcAge: function() {
		console.log(this)
		console.log(2037 - this.year)

	// Solution 1
		// const self = this; // self or that (old solution)
		// const isMillenian = function() {
		// 	console.log(self.year >= 900 && self.year <= 2000)
		// }

	// Solution 2
		const isMillenian = () => {
			console.log(this)
			console.log(this.year >= 900 && this.year <= 2000)
		}
		isMillenian()
	},
	greet: function() {
		console.log(`Hey ${this.firstName}`)
	} // this = window, therefore firstName is undefined, there is no firstName in window object
}
bob.greet()
bob.calcAge()

// arguments keyword
const addExpr = function (a,b) {
	console.log(arguments)
	return a + b 
}
addExpr(2, 5)
addExpr(2, 5, 7, 12)

var addArrow = (a, b) => {
	console.log(arguments)
	return a + b;
}
addArrow(2, 5, 8)
*/
