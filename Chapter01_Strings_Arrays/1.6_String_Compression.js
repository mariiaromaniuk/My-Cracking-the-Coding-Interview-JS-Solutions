// Implement a method to perform basic string compression using the counts of repeated characters. 
// If the "compressed" string would not become smaller than the original string, your method should 
// return the original string. You can assume the string has only uppercase and lowercase letters (a-z).

// Time: O(n) -> nested loops, but we traverse an array just once, Space: O(n)
function stringCompression(str){
  let newStr = '';
  for (let i = 0, count = 1; i < str.length; i += count){
    count = 1;
    for (let j = i + 1; j < str.length; j++){
      if (str[i] === str[j]) count++;
      else break;
    }
    newStr += str[i];
    newStr += count;
  }
  return newStr.length < str.length ? newStr : str;
}

// Tests
console.log(stringCompression('aabcccccaaa'), 'a2b1c5a3');
console.log(stringCompression('AabCCccccaaaa'), 'A1a1b1C2c4a4');
console.log(stringCompression('AabCccccaa'), 'AabCccccaa');
