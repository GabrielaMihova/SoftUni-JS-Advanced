function sumDiagonals(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
      console.log("Invalid input. Please provide a non-empty 2D matrix.");
      return;
    }
  
    const size = matrix.length;
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
  
    for (let i = 0; i < size; i++) {
      mainDiagonalSum += matrix[i][i];
      secondaryDiagonalSum += matrix[i][size - 1 - i];
    }
  
    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
  }
  
sumDiagonals ([[20, 40], [10, 60]]);