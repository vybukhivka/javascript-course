'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = ( movements, sort = false ) => {
  containerMovements.innerHTML = ''

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
}

const calcPrintBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance} EUR`
}

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${ incomes }€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => mov + acc, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * deposit.interestRate) /100)
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0)
  labelSumInterest.textContent = `${interest}€`
}

const createUsernames = (accs) => {
  accs.forEach(acc => 
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('')
  )
}
createUsernames(accounts)

const updateUI = acc => {
  displayMovements(acc.movements)
  calcPrintBalance(acc)
  calcDisplaySummary(acc)
}

// Login
let currentAccount;
btnLogin.addEventListener('click', function(e) {
  e.preventDefault()

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  if( currentAccount?.pin === Number(inputLoginPin.value) ) {
    labelWelcome.textContent = `Weclome back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    updateUI(currentAccount)
  }
})

// Transfer money
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
  // clear input fields
  inputTransferAmount.value = inputTransferTo.value = ''

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)

    // Update UI
    updateUI(currentAccount)
  }
})

// Loan
btnLoan.addEventListener('click', e => {
  e.preventDefault()
  
  const amount = Number(inputLoanAmount.value)

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount)

    // update ui
    updateUI(currentAccount)
  }
})

// Close account
btnClose.addEventListener('click', e => {
  e.preventDefault()
  const closedAccount = inputCloseUsername.value
  const closedPin = Number(inputClosePin.value)

  if(
    currentAccount.username === closedAccount &&
    currentAccount.pin === closedPin
  ) {

    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    accounts.splice(index, 1)

    // hide ui
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = ''
})

// Sort
let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})
///////////////////////////////////////
// Array Methods Practice

/* // 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0)
console.log(bankDepositSum)

// 2.
// solution 1
const numDepositsAbove1k = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000)

console.log(numDepositsAbove1k.length)

// solution 2 reduce
const numDepositsAbove1k2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => cur >= 1000 ? ++count : count,0)

console.log(numDepositsAbove1k2)

// 3.
const {deposits, withdrawals} = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur
    return sums
  }, {deposits: 0, withdrawals: 0})

console.log(deposits, withdrawals)

// 4.
// this is a title -> This Is A Title
const convertToTitleCase = title => {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']
  
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : capitalize(word))
    .join(' ')
  return capitalize(titleCase)
}

console.log(convertToTitleCase('this is a title'))
console.log(convertToTitleCase('THIS is a title'));
console.log(convertToTitleCase('and this is a another check string'))
console.log(convertToTitleCase('this is aNOTRER title with an EXAMPLE')) */

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
   So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

/* const checkDogs = (dogsJulia, dogsKate) => {
  const juliaCopy = dogsJulia.slice(1, -2);
  console.log(juliaCopy)
  const dogsData = [...juliaCopy, ... dogsKate]

  dogsData.forEach((age, i) => {
    age >= 3 ?
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`) :
      console.log(`Dog number ${i + 1} is still a puppy 🐶`)
  })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]) */

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const calcAverageHumanAge = ages => {
  // 1
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
  console.log(humanAges)
  
  // 2
  const lessThen18 = humanAges.filter(age => age >= 18)
  console.log(lessThen18)

  // 3 
  // const average = lessThen18.reduce((acc, age) => acc += age, 0) / lessThen18.length
  const average = lessThen18.reduce((acc, age, _, arr) => acc + age / arr.length, 0)
  console.log(average)
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
console.log('----')
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]) */

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const calcAverageHumanAge = ages => {
  const output = ages
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0)
  return output 
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])) */

////////////////////////////////////////
// Challenge 4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

*/

/* const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
dogs.forEach(dog => dog.recommendedPortion = Math.trunc(dog.weight ** 0.75 * 28))
console.log(dogs)

// 2.
const sarahsDog = dogs
  .find(dog => dog.owners.includes('Sarah'))
console.log(`Sarahs dog eats too ${sarahsDog.curFood >= sarahsDog.recommendedPortion ? 'much' : 'little'}, rec. portion ${sarahsDog.recommendedPortion}, cur. portion: ${sarahsDog.curFood}`)

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedPortion).flatMap(dog => dog.owners)
const ownersEatTooLittle = dogs.filter(dog => dog.curFood > dog.recommendedPortion).flatMap(dog => dog.owners)

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`)

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedPortion))

// 6.
const eatingOkay = dog => {
  return dog.curFood > dog.recommendedPortion * 0.9 && dog.curFood < dog.recommendedPortion * 1.1
}
console.log(dogs.some(dog => eatingOkay(dog)))

// 7.
const okayDogs = dogs.filter(dog => eatingOkay(dog))
console.log(okayDogs)

// 8.
const sortedByRecommendedPortion = dogs.slice().sort((a, b) => {
  return a.recommendedPortion - b.recommendedPortion
})
console.log(sortedByRecommendedPortion) */

/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple array_, arr mehtods

/* let arr = ['a', 'b', 'c', 'd', 'e']

// Slice (no mutation)
console.log('---Slice---')
console.log(arr.slice(2))
console.log(arr.slice(2, 4))
console.log(arr.slice(-2))
console.log(arr.slice(-1))
console.log(arr.slice(1, -2))
console.log(arr.slice())
console.log([...arr])

// Splice (mutate)
console.log('---Splice---')
// console.log(arr.splice((2)))
arr.splice(-1)
arr.splice(1, 2)
console.log(arr)

// Reverse (no mutation)
arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse())
console.log(arr2)

// Concat (no mutation)
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])

// Join
console.log(letters.join(' - ')) */

// at method

/* const arr = [23, 11, 64]
console.log(arr[0])
console.log(arr.at(0))

// getting last array element
console.log(arr[arr.length - 1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))

console.log('bob'.at(-2)) */

// forEach
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if(movement > 0) console.log(`You deposited ${movement} ${i + 1}`)
  else console.log(`You withdrew ${Math.abs(movement)} ${i + 1}`)
}

console.log('---forEach---')

movements.forEach(function(movement, i, arr) {
  if(movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement} ${arr}`)
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
}) */

// forEach with maps and sets

// Map
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`)
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}. Map: ${map}`) // key === value in Set
}) */

// map, filter and reduce methods

// map
/* const euroToUsd = 1.1;

// consice way to write map 
const movementsUSD = movements.map(mov => mov * euroToUsd)

console.log(movements)
console.log(movementsUSD)

// const movementsUSDfor = []
// for(const mov of movements) movementsUSDfor.push(mov * euroToUsd)
// console.log(movementsUSDfor)

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)
console.log(movementsDescription) */

// filter method 
/* const deposits = movements.filter(mov => mov > 0)
console.log(movements)
console.log(deposits)

const withdrawals = movements.filter(mov => mov < 0)
console.log(movements)
console.log(withdrawals) */

// reduce method 

// accumulator is like a snowball
/* const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`)
  return acc + cur
}, 0)
console.log(movements)
console.log(balance)

// Maximum value
const maxValue = movements.reduce((acc, val) => {
  if(acc > val) {
    return acc
  } else {
    return val
  }
}, movements[0])
console.log(maxValue) */

// Chaining methods
// const eurToUsd = 1.1
// const totalDepositInUSD = movements
//   .filter(mov => mov < 0)
//   // debugging
//   /* .map(( mov, i, arr ) => {
//     console.log(arr)
//     mov * eurToUsd
//   }) */
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov ,0)
// console.log(totalDepositInUSD)

// Find method
/* const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements)
console.log(firstWithdrawal)

console.log(accounts)
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
let accObj = {}
for(const acc of accounts) {
  acc.owner === 'Jessica Davis' ? accObj = acc : {}
}
console.log(account)
console.log(accObj) */

// some and every methods

// Equality
/* console.log(movements)
console.log(movements.includes(-130))

// some: if some of the elements returns true then true
console.log(movements.some(mov => mov === -130))

const anyDeposits = movements.some(mov => mov > 500)
console.log(anyDeposits)

// every: if every element returns true then true
console.log(account4.movements.every(mov => mov > 0))

// Separate callback
const deposit = mov => mov > 0
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit)) */

// flat and flatMap methods
/* const arr = [[1,2,3], [4,5,6], 7, 8]
console.log(arr.flat()) // removes nested arrays

const arrDeep = [[[1,2],3], [4,[5,6]], 7, 8]
console.log(arrDeep.flat(2))

const overallBalance = accounts
  .flatMap(acc => acc.movements) // map and then flaten the result !(only goes one level deep)!
  .reduce((acc, mov) => acc + mov)
console.log(overallBalance) */

// sort method
/* const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners.sort()) // this method mutate the array
console.log(owners)

// Numbers
console.log(movements)
// console.log(movements.sort()) // sorting convert everything to string and then sorts!

// a is current value, and b is compared value
// return < 0 then a, b 
// return > 0 then b, a
 
// Ascending
// movements.sort((a, b) => {
//   if(a > b) return 1 // returning 1 means swith the order
//   if(a < b) return -1 // returning -1 means keep order
// })
movements.sort((a, b) => a - b)

// Descending
movements.sort((a, b) => b - a)
console.log(movements) */

// Creating arrays

/* // Empty arrays + fill method
const arr = ([1,2,3,4,5,6,7])
console.log(new Array(1,2,3,4,5,6,7))

const x = new Array(7)
console.log(x)
// x.map(() => 5)
x.fill(1, 3, 5)
x.fill(1)
console.log(x)

arr.fill(23, 4,6)
console.log(arr)

// Array.from
const y = Array.from({length: 7}, () => 1)
console.log(y)

const z = Array.from({length: 7}, (_, i) => i + 1)
console.log(z)

// const randomDices = Array.from({length: 100}, () => Math.floor(Math.random() * 6) + 1)
// console.log(randomDices)

labelBalance.addEventListener('click', () => {
  const movementsUI = Array
    .from(document.querySelectorAll('.movements__value'))
    .map(el => Number(el.textContent.replace('€', '')))

  const movementsUI2 = [...document.querySelectorAll('.movements__value')]
    .map(el => Number(el.textContent.replace('€', '')))
  console.log(movementsUI)
  console.log(movementsUI2)
}) */


