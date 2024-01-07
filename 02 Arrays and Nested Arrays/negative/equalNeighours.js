function countEqualNeighborPairs(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
      console.log("Invalid input. Please provide a non-empty 2D matrix.");
      return 0;
    }
  
    let count = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i + 1 < matrix.length && matrix[i][j] === matrix[i + 1][j]) {
          count++;
        }
        if (j + 1 < matrix[i].length && matrix[i][j] === matrix[i][j + 1]) {
          count++;
        }
      }
    }
  
    return count;
  }
console.log(countEqualNeighborPairs([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));  