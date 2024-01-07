function processOddPositions (arr) {
    let res = arr
    .filter((x, i) => i % 2 === 1)
    .map(x => x * 2)
    .reverse()
    .join(' ');

    console.log(res);
}
processOddPositions ([10, 15, 20, 25]);