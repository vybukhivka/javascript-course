'use strict'

function calcAge(birthYear) {
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
// printAge();
