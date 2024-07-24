'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// Maps: fundamentals

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
