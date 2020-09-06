// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

// Time: O(n^2), Space: O(1)
function rotateMatrix(matrix){
  if (matrix.length === 0 || matrix[0].length !== matrix.length)
    return 'Invalid matrix';

  for (let layer = 0; layer < matrix.length/2; layer++){
    let first = layer, last = matrix.length-1-layer; 
    for (let i = first; i < last; i++){ 
      let offset = i - first; 
      let top = matrix[first][i]; 
      // left -> top
      matrix[first][i] = matrix[last-offset][first];
      // bottom -> left
      matrix[last-offset][first] = matrix[last][last-offset];
      // right -> bottom
      matrix[last][last-offset] = matrix[i][last];
      // top -> right
      matrix[i][last] = top;
    }
  }
  return matrix;
}


// Tests
let m = [
  [9, 25, 33, 4],
  [2, 13, 10, 5],
  [7, 16, 15, 6],
  [1, 19, 18, 3]
];
console.log(rotateMatrix(m));
