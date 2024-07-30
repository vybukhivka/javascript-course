'use strict';

// Challenge 1
const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	// This generates [0, 0, 0, 0]. More in the next section!
	answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function() {
	const optionsStr = this.options.join().replaceAll(',', '\n');
	const answer = Number(prompt(`${this.question}\n${optionsStr}\n(Write your answer)`)) 

	typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++

	// if(answer === '') {
	// 	console.log(`null`)
	// } else if(+answer >= 0 && +answer <= 3) {
	// 	this.answers[answer]++
	// } else {
	// 	console.log(`answer is not a number between 0 and 3`)

	this.displayResults()
}

poll.displayResults = function(type='array') {
		type === 'string' ?
			console.log(`Poll results are ${this.answers.join(', ')}`) :
			console.log(this.answers)
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// data1: [5, 2, 3]
// data2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});

// Challenge 2
(function() {
	const header = document.querySelector('h1')
	header.style.color = 'red'
	document.querySelector('body').addEventListener('click', function(){
		header.style.color === 'red' ?
			header.style.color = 'blue' :
			header.style.color = 'red'
	})
})()
	
// Defaul parameters

/* const bookings = []

const createBooking = function(
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
	) {
	const booking = {
		flightNum,
		numPassengers,
		price
	}
	console.log(booking)
	bookings.push(booking)
}

createBooking('LH123K')
createBooking('LH123K', 2, 800)
createBooking('LH123K', 2)
createBooking('LH123K', 5)

createBooking('LH123K', undefined, 1000) // use undefined to skip default parameters(leave default) */

// Passing arguments

/* const flight = 'H234'
const bob = {
	name: 'Bob shh',
	passport: 8458843
}

const checking = function(flightNum, passenger) {
	flightNum = 'LH999'
	passenger.name = 'Mr.' + passenger.name

	if(passenger.passport === 8458843) {
		alert('Check in')
	} else {
		alert('Wrong passport!')
	}
}

checking(flight, bob)
console.log(flight)
console.log(bob)

const newPassport = function(person) {
	person.passport = Math.trunc(Math.random() * 1000000000)
}

newPassport(bob)
checking(flight, bob) */

// Callback functions

/* const oneWord = function(str) {
	return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str) {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(), ...others].join(' ')
}

// Higher-order function
const tranformer = function(str, fn) {
	console.log(`Original string: ${str}`)
	console.log(`Transformed string: ${fn(str)}`)	

	console.log(`Transformed by: ${fn.name}`)
}

tranformer('JavaScript is the best!', upperFirstWord)
console.log('----')
tranformer('JavaScript is the best!', oneWord)

// JS uses callbacks all the time
const high5 = function() {
	console.log('yo')
}
// document.body.addEventListener('click', high5)

[1, 2, 3].forEach(high5) */

// Functions returning functions
/* const greet = function(greeting) {
	return function(name) {
		console.log(`${greeting} ${name}`)
	}
}

const greeterHey = greet('Hey'); // this variable is now a funciton
// greeterHey('Bob')
// greeterHey('Lol')

// function returns a value, therefore the syntax below works
// so it's possible to call a returned funciton without storing
// a higher-order funciton in a variable
// greet('Hello')('mr.Bob') 

const greeting = (greet) => (name) => console.log(`${greet} ${name}`)
const greetYo = greeting('Yo')

greetYo('dude') */

// Fucntion methods
/* const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
		this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
	}
}

lufthansa.book(239, 'Bob Bib')
lufthansa.book(635, 'Lol lil')
console.log(lufthansa.bookings)

const eurowing = {
	airline: 'Eurowings',
	iataCode: 'EW',
	bookings: [],
}

const book = lufthansa.book;

// doesn't work
// book(23, 'check')

book.call(eurowing, 23, 'check')
console.log(eurowing)

book.call(lufthansa, 14, 'wow')
console.log(lufthansa)

const swiss = {
	airline: 'Swiss Air Llines',
	iataCode: 'LX',
	bookings: []
}

book.call(swiss, 1000, 'dude')

// Apply method
const flightData = [582, 'Dude Bob']
book.apply(swiss, flightData)

book.call(swiss, ...flightData)
console.log(swiss)

// Bind method
const bookEW = book.bind(eurowing)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(23, 'Bobi Bo')

const bookEW23 = book.bind(eurowing, 23)
const bookEW23Bob = book.bind(eurowing, 23, 'Bob')
bookEW23('lol')
bookEW23Bob()

// With event listeners
lufthansa.planes = 300
lufthansa.buyPlane = function() {
	this.planes++
	console.log(this.planes)
	console.log(this)
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// Partial application
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))

// addVAT = value => value + value * 0.23
const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100))

// rebuild without bind
const calcTax = function(rate) {
	return function(value) {
		return value + value * rate
	}
}

console.log(calcTax(0.1)(100)) */

// Immediately invoked function expression

// IIFE
/* (() => console.log('This will never run again'))();

(function() {
	console.log('This will never run again')
	const isPrivate = 23; // incapsulated variable is secure
})() */

// Closures
/* const secureBooking = function() {
	let passengerCount = 0;
	console.log(`parrent count: ${passengerCount}`)
	return function() {
		passengerCount++
		console.log(`${passengerCount} passengers`)
	}
}

const booker = secureBooking();

booker()
booker()
booker()
secureBooking()
booker()
booker()
booker()

// console.dir(booker) */

// Closure examples
/* let f;

const g = function() {
	const a = 23;
	f = function() {
		console.log(a * 2);
	}
}

const h = function() {
	const b = 888
	f = function() {
		console.log(b * 2)
	}
}

g();
f()
h()
f()
console.dir(f)

// example 2
const boardPassengers = function(n, wait) {
	const perGroup = n / 3;
	
	setTimeout(function(){
		console.log(`We are now boarding all ${n} passengers`)
		console.log(`There are 3 groups, each with ${perGroup} passengers`)
		}, wait * 1000)

	console.log(`Will start boarding in ${wait} seconds`)
}

const perGroup = 10000 // Closure have priority over the scope chain
boardPassengers(180, 3) */
