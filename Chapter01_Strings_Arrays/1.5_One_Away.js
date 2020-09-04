// There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one (or zero) edit away.

// Time: O(n), Space: O(n)
function oneAway(str1, str2){
  if (Math.abs(str1.length - str2.length) > 1) 
    return false;

  let charMap = new Map();
  for (let char of str1)
    charMap.set(char, 1);

  for (let char of str2){
    if (charMap.has(char))
      charMap.delete(char);
  }
  return charMap.size <= 1;
}

// Tests
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
