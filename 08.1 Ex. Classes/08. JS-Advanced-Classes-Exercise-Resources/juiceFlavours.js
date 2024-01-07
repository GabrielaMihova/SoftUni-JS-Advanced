function juiceBottling(input) {
  const juices = new Map();
  const bottles = new Map();

  for (const line of input) {
    const [juice, quantity] = line.split(" => ");
    const juiceQuantity = Number(quantity);

    if (!juices.has(juice)) {
      juices.set(juice, 0);
    }

    juices.set(juice, juices.get(juice) + juiceQuantity);

    if (juices.get(juice) >= 1000) {
      const bottlesProduced = Math.floor(juices.get(juice) / 1000);
      bottles.set(juice, (bottles.get(juice) || 0) + bottlesProduced);
      juices.set(juice, juices.get(juice) % 1000);
    }
  }

  const result = [];
  for (const [juice, count] of bottles) {
    result.push(`${juice} => ${count}`);
  }

  return result.join("\n");
}

const input1 = [
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
];
console.log(juiceBottling(input1));

const input2 = [
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
];
console.log(juiceBottling(input2));
