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

// Time: O(n), Space: O(1)
function oneAway(str1, str2){
  let count = 1, len;
  if (Math.abs(str1.length - str2.length) > 1) 
    return false;
  else if (str1.length - str2.length === 1) 
    len = str1.length-1;
  else if (str2.length - str1.length === 1) 
    len = st2.length-1;
  else if (str1.length === str2.length) {
    len = str1.length;
    count = 2;
  }
  for (let i = 0; i < len; i++){
    if (str1[i] !== str2[i]){
      if (count > 2) return false;
      else count++;
    }
  }
  return true;
}

// Tests
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
