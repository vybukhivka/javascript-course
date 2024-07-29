'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for(const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';')
  const output = `${type.startsWith('_Delayed') ? '*' : ''} ${type.replaceAll('_', ' ')} from ${from.toUpperCase().slice(0, 3)} ${to.toUpperCase().slice(0, 3)} (${time.replace(':', 'h')})`.padStart(50)
  console.log(output)
}

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object litereal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address = 'no address' }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  }
};

// Strings 3

/* // Split and join
// console.log('a+very+nice+string'.split('+'))
// console.log('Bob Bobinkton'.split(' '))

const [firstName, lastName] = 'Bob Bobinkton'.split(' ');
// console.log(firstName, lastName)

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName)

// Capitalization
const cappitalizedName = function(name) {
  const names = name.split(' ');
  const namesUpper = []
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // another solution
  }
  console.log(namesUpper.join(' '))
}

cappitalizedName('jessica and smith davis')
cappitalizedName('bob bobinkton')

// Padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(35, '+'))

const maskCreditCard = function(number) {
  const str = number + ''; // smart string convertion
  const last = str.slice(-4)
  console.log(last.padStart(str.length, '*'))
}

maskCreditCard(5675883938)
maskCreditCard(43248875499248732)
maskCreditCard('47329858499873281')

// Repeat
const message2 = 'Bad weather... All Depatures Delayed...'
console.log(message2.repeat(6))

const planesInLane = function(n) {
  console.log(`There are ${n} planes in a line ${'🚀'.repeat(n)}`)
}
planesInLane(5)
planesInLane(3)
planesInLane(12) */

// Strings 2
/* const airline = 'TAP Air Portugal';

// Strings 2
/* const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

// Fix capitalisation in name
const passanger = 'bOBiE'
const passengerLower = passanger.toLowerCase()
const passengerCapitalised = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCapitalised)

// Comparing emails
const email = 'hello@bob.io'
const loginEmail = '  Hello@BoBie.iO \n'

// const lowerEmail = loginEmail.toLowerCase()
// const trimmedEmail = lowerEmail.trim()
// console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email === normalizedEmail)

// replacing
const priceUSD = '288.97$'
const priceInUAH = priceUSD.replace('$', 'UAH').replace('.', ',');
console.log(priceInUAH)

const announcement = 'All paddengers come to boarding door 23, Boarding door 23!'

// console.log(announcement.replaceAll('door', 'gate'))
console.log(announcement.replace(/door/g, 'gate'))

// Booleans
const plane = 'Airbus A320neo'
console.log(plane.includes('A320'))
console.log(plane.includes('Boeing'))
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('part of the new airbus family')

// Practice
const checkBaggage = function(items) {
  const itemsLower = items.toLowerCase()
  if (itemsLower.includes('knife') || itemsLower.includes('gun')) {
    console.log('You are not allowed on board')
  } else {
    console.log('Welcome aboard')
  }
}
checkBaggage('I have a laptop, some Food and a pocket knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection') */

// // Strings
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
//
// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log('B727'[2])
//
// console.log(airline.length);
// console.log('B727'.length);
//
// console.log(airline.indexOf('r'))
// console.log(airline.lastIndexOf('r'))
// console.log(airline.indexOf('portugal'))
//
// console.log(airline.slice(4))
// console.log(airline.slice(4, 7))
//
// console.log(airline.slice(0, airline.indexOf(' ')))
// console.log(airline.slice(airline.lastIndexOf(' ') + 1))
//
// console.log(airline.slice(-2))
// console.log(airline.slice(1, -1))
//
// console.log('---is middle---')
//
// const checkMiddleSeat = function(seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log(`${seat} is middle`)
//   else console.log(`${seat} isn't middle`)
//   
//   // const isMiddle = (seat.indexOf('B') !== -1 || seat.indexOf('E') !== -1) ?
//   //   'is middle' :
//   //   'isn\'t middle'
//   // console.log(`${seat} ${isMiddleCorrect}`)
// }
//
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')
//
// console.log(new String('bob'))
// console.log(typeof new String('bob'))

/* // Map iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'], 
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
])
console.log(question)

// Convert object to Map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries((openingHours)))
console.log(hoursMap)

// Iteration
console.log(question.get('question'))
for (const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt('Your answer'))
// console.log(question.get(answer === question.get('correct')))

// Convert Map to array
console.log([...question])

// Some array methods works with maps as well
console.log(...question.entries())
console.log(...question.keys())
console.log(...question.values()) */

/* // Maps: fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano')
rest.set(1, "Firenze Italy")
console.log(rest.set(2, "Lisbon, Portugal"))

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')))

console.log(rest.has('categories'))
rest.delete(2)

rest.set(document.querySelector('h1'), 'Heading')
const arr = [1,2]
rest.set(arr, 'Test')
// rest.clear()

console.log(rest.get(arr))
console.log(rest) */

/* // Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size); */

/* // Looping objects: keys, values and entries

// Property names (keys)
const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} `

for (const day of properties) {
  openStr += `${day}, `
}
// console.log(openStr)

// Property Values
const values = Object.values(openingHours)
// console.log(values)

// Entire objects (entries)
const entries = Object.entries(openingHours);
console.log(entries)

for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
} */

// for (const day of Object.values(openingHours)) console.log(day)

/* // Optional chaining (helps avoid errors)

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`)
}

// Method
console.log(restaurant.order?.(0,1) ?? 'Method does not exist')

// Arrays
const users = [
  {name: 'bob', email: 'hellobob@bob.io'}
]
console.log(users[0]?.name ?? 'User array empty') */

/* // Enhanced object literals

console.log(restaurant) */

/* // Looping Array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) console.log(item)

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`) */

// console.log(...menu.entries())

// Logical assignment operators

/* const rest1= {
  name: 'Bob',
  // numGuests: 20,
  numGuests: 0,
}

const rest2= {
  name: 'la Bib',
  owner: 'Mr.Bib'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Logical OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment
// rest1.owner = rest1.owner && 'bibi'

// Logical AND assignment operator
rest2.owner &&= 'lol';

console.log(rest1)
console.log(rest2) */

// Nullish Coalescing Operator (null or undefined === false)

/* // other values === true (0 === true) 

restaurant.numGuests = 0
const guests2 = restaurant.numGuests || 10;
console.log(guests2)

const guests3 = restaurant.numGuests ?? 10;
console.log(guests3) */

// Short-circuiting

/* // || returns first truethy value
console.log(3 || 'Bob') // 3
console.log('' || 'Bob') // Bob
console.log(true || 0) // true
console.log(undefined || null) // null (undefinde === false)
console.log(undefined || 0 || '' || 'Hello' || 23 || null) // Hello

restaurant.numGuests = 23

// Dum circuiting
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// Use of short circuitings
const guests2 = restaurant.numGuests || 10;
console.log(guests1, guests2)

console.log('----AND----')

// && returns first falsy value
console.log(3 && 'Bob') // Bob
console.log('' && 'Bob') // ''
console.log(true && 0) // 0
console.log(undefined && null) // undefined
console.log(undefined && 0 && '' && 'Hello' && 23 && null) // undefined

// example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mush', 'spich')
}

restaurant.orderPizza && restaurant.orderPizza('mush', 'spich') */

// Rest pattern
/*
// 1. Destructuring

const arr = [1,2, ...[3, 4]]; // Spread on the right side

const [a, b, ...others] = [1, 2, 3, 4, 5] // Rest on the left side
console.log(a, b, others)

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, ...otherFood)

// Objects
const { sat, ...weekdays } = restaurant.openingHours
console.log(weekdays)

// 2. Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i]
  console.log(sum)
  return sum;
}
add(2, 3)
add(5, 3, 7, 2)
add(3, 1, 8, 9, 1, 5, 4)

const x = [23, 5, 7]
add(...x);

const ings = ['mushrooms', 'onion', 'olives', 'spinach']
restaurant.orderPizza(...ings) */

// Spread operator

/* const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]

// console.log(newArr) // logs an array
// console.log(...newArr) // logs an array values : 1 2 7 8 9 

const newMenu = [...restaurant.mainMenu, 'Gnocci']

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]

// Join arrays
const bothMenus = [...restaurant.mainMenu, ...restaurant.starterMenu]

// Iterables: arrays, strings, maps, stes. Not objects
const str = 'Bob';
const letters = [...str, ' ', 'S. ']
console.log(letters)
console.log(...str)
// console.log(`${...str}`)

// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'),
//   prompt('Let\'s make pasta! Ingredient 2?'),
//   prompt('Let\'s make pasta! Ingredient 3?')
// ]
// restaurant.orderPasta(...ingredients)

// Objects
const newRestaurant = {foundedIn: 1999, ...restaurant, founder: 'Bob'};
console.log(newRestaurant)

const restaurantCopy = {...restaurant};
restaurantCopy.name = ['lol']
console.log(restaurantCopy)
console.log(restaurant) */

/* restaurant.orderDelivery({
  starterIndex: 2,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags)

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111 // initial variable
let b = 999 // initial variable
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b)

// Nested objects
const { fri: {open: o, close: c} } = openingHours;
console.log(o, c) */

// Destructuring basics

/* const arr = [2, 3, 4];
const a = arr[0]
const b = arr[1]
const c = arr[2]

// Destructuring assigment
const [x, y, z] = arr;

console.log(a, b, c)
console.log(x, y, z)

let [main, , secondary] = restaurant.categories;

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary)

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5 , 6]];
// const [i, ,j] = nested;
// console.log(i, j)
const [i, , [j , k]] = nested
console.log(i, j, k)

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); */
