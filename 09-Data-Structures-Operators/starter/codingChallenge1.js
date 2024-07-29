// Challenge 4

/* THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅ */

/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const toCamelCase = function(str) {
  const lowerStr = str.toLowerCase()
  const words = lowerStr.split('\n')
  
  // build array with camel cased strings
  for (const [i, w] of words.entries()) {
    const [firstWord, secondWord] = w.trim().split('_');
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`
    console.log(output.padEnd(20, ' ') + '✅'.repeat(i + 1))
  }
}

document.body
  .querySelector('button')
  .addEventListener('click',
    () => toCamelCase(document.querySelector('textarea').value)) */

// Challenge 3

/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events)

// 2
gameEvents.delete(64)
console.log(gameEvents)

// 3
const average = [...gameEvents.keys()].pop() / gameEvents.size;
console.log(average)

for(const [time, event] of gameEvents) {
  const half = time <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'
  console.log(`${half} ${time}: ${event}`)
} */

// Challenge 2

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ], [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}; */

/* // 1
for (const [i, name] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(i) + 1}: "${name}"`)
}

// 2
const odds = Object.values(game.odds)
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length
console.log(average)

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`)
}

// 4
const scorers = {}
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : scorers[player] = 1
}
console.log(scorers) */

// Challenge 1

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ], [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = [...game.players]
console.log(players1, players2)

// 2
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

// 3
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

// 4
const playerd1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(playerd1Final)

// 5
const {odds: team1, x: draw, team2} = game;
console.log(team1, draw, team2)

// 6
const printGoals = function(...playerNames) {
  console.log(`${playerNames.length} goals were scored`)
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

// 7
team1 > team2 && console.log('team 2 gonna win')
team1 < team2 && console.log('team 1 gonna win') */

// Assignments

/* const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: '&&Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
]; */

/* // 2.2
const {keywords: tags} = books[0]
console.log(tags)

// 2.3
const {language, programmingLanguage = 'unknown'} = books[6]
console.log(language, programmingLanguage)

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title: bookTitle, author: bookAuthor} = books[0])
console.log(bookTitle, bookAuthor)

// 2.5
const {thirdParty:{goodreads:{rating: bookRating}}} = books[0]
console.log(bookRating)

// 2.6
const printBookInfo = function({ title, author, year='year unknown' }) {
  console.log(`${title} by ${author}, ${year}`)
}

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' }); */

/* // 3.1
const bookAuthors = [...books[0].author, ...books[1].author]
console.log(bookAuthors)

// 3.2
const spellWord = function(word) {
  console.log(...word)
}
spellWord('JavaScipt') */

/* // 4.1
const [mainKeyword, ...rest] = books[0].keywords
console.log(mainKeyword, rest)

// 4.2
const {publisher: bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher, restOfTheBook);

const printBookAuthorsCount = function(title, ...authors) {
  console.log(`That book "${title}" has ${authors.length} authors`)
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne'); */

/* // 5.1
const hasExamplesInJava = function(book) {
  const hasJava = book.programmingLanguage === 'Java' || 'no data available'
  return hasJava
}

console.log(hasExamplesInJava(books[0]))

// 5.2
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent && console.log(`${books[i].title} provides online content`)
} */

/* // 6.1
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ?? console.log(`"${books[i].title}" provies no data about it's online content`) 
} */

/* // 7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1
}

// 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2)
*/
