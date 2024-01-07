function generateSequence(n, k) {
    const sequence = [1];
  
    for (let i = 1; i < n; i++) {
      const sumOfPrevK = sequence.slice(Math.max(0, i - k), i).reduce((acc, curr) => acc + curr, 0);
      sequence.push(sumOfPrevK);
    }
  
    return sequence;
  }
console.log(generateSequence(6, 3));  

/*second way

function generateSequence(n, k) {
  const sequence = [1];

  for (let i = 1; i < n; i++) {
    let sumOfPrevK = 0;

    // Sum the previous k elements
    for (let j = i - 1; j >= Math.max(0, i - k); j--) {
      sumOfPrevK += sequence[j];
    }

    sequence.push(sumOfPrevK);
  }

  return sequence;
}
*/ 