function isPalindrome(word) {
  let flippedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    flippedWord += word[i];
  }
  return flippedWord === word
}

/*
  Add your pseudocode here
  -accumulate the word in a variable
  -iterate through the word
  -check if words match
  -no match returns false
*/

/*
  Add written explanation of your solution here
  The way that I think about it is if we are to flip the word and check if the word and the flipped word match then that means that it is palindrome otherwise well it's not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
