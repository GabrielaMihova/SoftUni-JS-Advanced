    function findBiggestElement(matrix) {
        if (!Array.isArray(matrix) || matrix.length === 0) {
          console.log("Invalid input. Please provide a non-empty 2D matrix.");
          return;
        }
      
        let biggestElement = matrix[0][0];
      
        for (let row of matrix) {
          for (let num of row) {
            if (num > biggestElement) {
              biggestElement = num;
            }
          }
        }
      
        return biggestElement;
      }
      

console.log(findBiggestElement ([[20, 50, 10],
    [8, 33, 145]]
    ));