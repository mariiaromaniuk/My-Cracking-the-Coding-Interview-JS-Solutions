// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

// Time: O(nˆ2), Space: O(1)
function isUnique(str){
  for (let i = 0; i < str.length; i++){
    for (let j = i + 1; j < str.length; j++) 
      if (str[i] === str[j]) 
        return false;
  }
  return true;
}

// Time: O(n), Space: O(n)
function isUnique(str){
  let obj = {};
  for (let i = 0; i < str.length; i++){
    if (!obj[str[i]])
      obj[str[i]] = 1;
    else
      return false;
  }
  return true;
}

// Time: O(n), Space: O(n)
function isUnique(str) {
  const charSet = new Set();

  for (const char of str) {
    if (charSet.has(char)) 
      return false;
    charSet.add(char);
  }
  return true;
}

console.log(isUnique('abertyuifm'));
