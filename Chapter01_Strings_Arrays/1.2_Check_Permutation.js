// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

// Time: O(n), Space: O(n)
function checkPermutation(str1, str2){
  if (str1.length !== str2.length)
    return false;
  // else sort and compare 
  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');
  return sorted1 === sorted2;
}

// Time: O(n), Space: O(n)
function checkPermutations(str1, str2){
  if (str1.length !== str2.length)
    return false;
  const charMap = new Map();

  for (const char of str1) 
    charMap.set(char, charMap.get(char) + 1 || 1);

  for (const char of str2){
    if (!charMap.has(char)) 
      return false;
    if (charMap.get(char) === 1) 
      charMap.delete(char);
    else 
      charMap.set(char, charMap.get(char) - 1);
  }
  return !charMap.size;
}

// Time: O(n), Space: O(n)
function checkPermutation(str1, str2){
  if (str1.length !== str2.length)
    return false;
  let charMap = {};

  for (const char of str1){
    if (!charMap[char])
      charMap[char] = 1;
    else
      charMap[char] = charMap[char] + 1;
  }

  for (const char of str2){
    if (!charMap[char])
      return false;
    else
      charMap[char] = charMap[char] - 1;
  }
  return true;
}

// Tests
console.log(checkPermutation('ab ac', 'aa bc'), true);
console.log(checkPermutation('aba', 'aaba'), false);
console.log(checkPermutation('aba', 'aa'), false);
