function townPopulation(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let [name, population] = arr[i].split(" <-> ");
    population = Number(population);

    if (map[name] === undefined) {
      map[name] = 0;
    }

    map[name] += population;
  }

  for (const townName in map) {
    console.log(`${townName} : ${map[townName]}`);
  }
}
townPopulation (['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)
