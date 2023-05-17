// 1. Write a function that takes a string as an argument and returns the left most digit in the string.
function leftDigit(num) {
	let found = num.match(/\d/);
	if(found) return parseInt(found[0]);
}

// 2. Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.
function getDecimalPlaces(num) {
    let decimal = num.toString().split('.')[1];
      if(decimal) return decimal.length;
      return 0;
  }

// 3. Write a regular expression that matches a string if and only if it is a valid zip code.
let x = /^\d{5}$/;

// 4. Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).
let isPrefix = (word, prefix) => word.startsWith(prefix.slice(0, -1));
let isSuffix = (word, suffix) => word.endsWith(suffix.slice(1));

// 5. Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
function cardHide(cardNumber) {
    let hidden = cardNumber.slice(0, -4).replace(/./g, "*");
    let last4 = cardNumber.slice(-4);
    return hidden + last4;
  }

// 6. Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
function spellOut(word) {
    return word.split('').map((_, i) => word.slice(0, i + 1));
  }

// 7. Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
function spelling(str) {
  return str.split('').map((_, i) => str.slice(0, i + 1));
}

// 8. Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.
function joinPath(portion1, portion2) {
    let separator = "/";
    let trimmedPortion1 = portion1.endsWith(separator) ? portion1.slice(0, -1) : portion1;
    let trimmedPortion2 = portion2.startsWith(separator) ? portion2.slice(1) : portion2;
    return trimmedPortion1 + separator + trimmedPortion2;
  }

// 9. Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
function testJackpot(arr) {
    let firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== firstElement) return false;
    }
    return true;
  }

// 10. You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
function findNemo(sentence) {
    const word = sentence.split(" ");
    const nemo = word.indexOf("Nemo");
    if (nemo !== -1) {
      const wordCount = nemo + 1;
      return `I found Nemo at ${wordCount}!`;
    } else {
      return "I can't find Nemo :(";
    }
  }

// 11. Create a function that takes a string and returns the concatenated first and last character.
function firstLast(str) {
    if (str.length >= 2) {
      return str[0] + str[str.length - 1];
    } else {
      return str;
    }
  }

// 12. Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
function stutter(word) {
    const firstTwo = word.slice(0, 2);
    return `${firstTwo}... ${firstTwo}... ${word}?`;
  }

// 13. Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
function greaterThanOne(fraction) {
    const result = eval(fraction);
    return result > 1;
  }

// 14. Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
function moodToday(mood) {
    if (mood) {
      return "Today, I am feeling " + mood;
    } else {
      return "Today, I am feeling neutral";
    }
  }

// 15. Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
function countSyllables(str) {
    const syllables = str.match(/[aeiouy]+/gi);
    return syllables ? syllables.length : 0;
  }

// 16. Write a function that validates whether two strings are identical. Make it case insensitive.
function match(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
  }

// 17. Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.
function intOrString(arg) {
    if (typeof arg === 'number' && Number.isInteger(arg)) {
      return 'int';
    } else if (typeof arg === 'string') {
      return 'str';
    } else {
      return 'str';
    }
  }

// // 18. Write a function that takes an integer and:
// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
function helloWorld(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "Hello World";
    } else if (num % 3 === 0) {
      return "Hello";
    } else if (num % 5 === 0) {
      return "World";
    } else {
      return "";
    }
  }

// // 19. Write two functions:
// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
function toInt(str) {
    return parseInt(str);
  }
  
  function toStr(num) {
    return num.toString();
  }

// 20. Create a function that counts how many D's are in a sentence.
function countDs(sentence) {
    const regex = /d/gi;
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
  }