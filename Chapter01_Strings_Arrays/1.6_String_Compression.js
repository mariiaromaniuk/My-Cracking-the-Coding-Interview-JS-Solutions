// Implement a method to perform basic string compression using the counts of repeated characters. 
// If the "compressed" string would not become smaller than the original string, your method should 
// return the original string. You can assume the string has only uppercase and lowercase letters (a-z).

// Time: O(n) -> nested loops, but we traverse an array just once, Space: O(n)
function stringCompression(str){
  if (str.length <= 2) 
    return str;
  
  let newStr = '';
  for (let i = 0, count = 1; i < str.length; i += count){
    count = 1;
    for (let j = i + 1; j < str.length; j++){
      if (str[i] === str[j]) count++;
      else break;
    }
    newStr += str[i] + count;
  }
  return newStr.length < str.length ? newStr : str;
}

// Time: O(n), Space: O(n)
function stringCompression(str) {
  if (str.length <= 2) 
    return str;

  let charMap = new Map();
  let newStr = '', currChar = str[0];

  for (const char of str) {
    if (char === currChar) {
      charMap.set(char, charMap.get(char) + 1 || 1);
    } else {
      newStr += currChar + charMap.get(currChar);
      charMap.clear();
      currChar = char;
      charMap.set(char, 1);
    }
  }

  newStr += [...charMap][0].join``;
  return newStr.length < str.length ? newStr : str;
}

// Tests
console.log(stringCompression('aabcccccaaa'), 'a2b1c5a3');
console.log(stringCompression('AabCCccccaaaa'), 'A1a1b1C2c4a4');
console.log(stringCompression('AabCccccaa'), 'AabCccccaa');
