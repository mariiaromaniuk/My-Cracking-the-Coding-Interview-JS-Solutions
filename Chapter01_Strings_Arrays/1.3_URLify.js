// Write a method to replace all spaces in a string with '%20'.

// Time: O(n^2), Space: O(1)
function URLify(str){
  return str.split(' ').join('%20');
}

// Time: O(n), Space: O(n)
function URLify(str){
  if (str.length === 0)
    return str;
  
  let newStr = '';
  for (let char of str){
    if (char === ' ')
      newStr += '%20';
    else
      newStr += char;
  }
  return newStr;
}

// Tests
console.log(URLify("Mr John Smith"), "Mr%20John%20Smith");
console.log(URLify(" "), "%20");
