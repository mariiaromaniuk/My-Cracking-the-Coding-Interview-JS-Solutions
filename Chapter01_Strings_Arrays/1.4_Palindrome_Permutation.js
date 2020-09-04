// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement 
// of letters. The palindrome does not need to be limited to just dictionary words.

// Time: O(n), Space: O(n)
function palindromePermutation(str){
    if (str.length <= 1) return true;

    str = str.toLowerCase();   
    let charSet = new Set();

    for (let char of str){
      if (char !== ' '){
        if (charSet.has(char))
          charSet.delete(char);
        else
          charSet.add(char);
      }
    }
    return charSet.size <= 1;
}

// Tests
console.log(palindromePermutation("Tact Coa"), true);
console.log(palindromePermutation("TactcCoa"), false);
