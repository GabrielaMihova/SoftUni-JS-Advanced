function carProduction(input) {
  const carRegistry = new Map();

  for (const line of input) {
    const [brand, model, producedCars] = line.split(" | ");
    const producedCarsCount = Number(producedCars);

    if (!carRegistry.has(brand)) {
      carRegistry.set(brand, new Map());
    }

    if (!carRegistry.get(brand).has(model)) {
      carRegistry.get(brand).set(model, 0);
    }

    carRegistry
      .get(brand)
      .set(model, carRegistry.get(brand).get(model) + producedCarsCount);
  }

  let result = "";

  for (const [brand, models] of carRegistry) {
    result += brand + "\n";

    for (const [model, producedCarsCount] of models) {
      result += `###${model} -> ${producedCarsCount}\n`;
    }
  }

  return result.trim();
}

const input = [
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
];

console.log(carProduction(input));
