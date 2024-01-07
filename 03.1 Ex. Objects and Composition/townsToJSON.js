function townsToJSON(towns) {
  const matrix = towns
    .map((row) =>
      row
        .trim()
        .split("|")
        .map((cell) => cell.trim())
    )
    .map((row) => row.filter((cell) => cell !== ""));

  const headers = matrix[0];
  const data = matrix.slice(1);

  const result = data.map((row) => {
    const obj = {};
    headers.forEach((el, index) => {
      if (el === "Latitude" || el === "Longitude") {
        obj[el] = Number(parseFloat(row[index]).toFixed(2));
      } else {
        obj[el] = row[index];
      }
    });
    return obj;
  });

  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
