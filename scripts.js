/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  split(str);

  let words = str.split(' ');

  let longestWord = words[0];

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.assert(
  longest('hallo heimur') === 'heimur',
  'longest: skilar `heimur` fyrir streng hallo heimur'
);

function shortest(str) {
  split(str);

  let words = str.split(' ');

  let shortestWord = words[0];

  for (let word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}
console.assert(
  shortest('hallo heimur') === 'hallo',
  'shortest: skilar `hallo` fyrir streng hallo heimur'
);
console.assert(
  shortest('stutt laaaangt') === 'stutt',
  'shortest: skilar stutt fyrir stutt laaaangt'
);

function reverse(str) {
  split(str);

  return str.split('').reverse().join('');
}
console.assert(
  reverse('hallo heimur') === 'rumieh ollah',
  'reverse: skilar `rumieh ollah` fyrir streng hallo heimur'
);
console.assert(
  reverse('verkefni7') === '7infekrev',
  'reverse: skilar 7infekrev fyrir verkefni7'
);

function palindrome(str) {
  split(str);

  str = str.toLowerCase();

  return str === str.split('').reverse().join('');
}
console.assert(
  palindrome('alllla') === true,
  'palindrome: skilar true í strengnum allllla'
);
console.assert(
  palindrome('ekkieins') === false,
  'palindrome: skilar false í strengnum ekkieins'
);

function vowels(str) {
  split(str);

  let fjoldiSerhljoda = 0;

  for (let char of str.toLowerCase()) {
    if (VOWELS.includes(char)) {
      fjoldiSerhljoda++;
    }
  }
  return fjoldiSerhljoda;
}
console.assert(
  vowels('hallo heimur') === 5,
  'vowels: skilar 5 fyrir streng hallo heimur'
);
console.assert(vowels('12345') === 0, 'vowels: skilar 0 fyrir 12345');

function consonants(str) {
  split(str);

  let fjoldiSerhljoda = 0;
  for (let char of str.toLocaleLowerCase()) {
    if (CONSONANTS.includes(char)) {
      fjoldiSerhljoda++;
    }
  }
  return fjoldiSerhljoda;
}
console.assert(
  consonants('hallo heimur') === 6,
  'consonants: skilar 6 fyrir hallo heimur'
);
console.assert(consonants('aeéi') === 0, 'consonants: skilar 0 fyrir aeéi');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(
    'Þetta fall kannar strengi með: longest, shortest, reverse, vowels, consonants og palindrome. Gefðu inn streng til greiningar.'
  );

  let input = prompt('Gefðu inn streng:');

  if (input === null || input === '') {
    return;
  }

  let longestWord = longest(input);
  let shortestWord = shortest(input);
  let reversedString = reverse(input);
  let vowelCount = vowels(input);
  let consonantCount = consonants(input);
  let isPalindrome = palindrome(input);

  let result = `String analysis results:
    - Longest word: ${longestWord}
    - Shortest word: ${shortestWord}
    - Reversed string: ${reversedString}
    - Number of vowels: ${vowelCount}
    - Number of consonants: ${consonantCount}
    - Is palindrome: ${isPalindrome ? 'Yes' : 'No'}`;

  alert(result);

  let again = confirm('Viltu reyna aftur?');

  if (again) {
    start();
  }
}
