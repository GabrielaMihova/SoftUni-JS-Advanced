function carFactory(input) {
    const availableEngines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 }
    ];
  
    const availableCarriages = {
      hatchback: { type: 'hatchback', color: input.color },
      coupe: { type: 'coupe', color: input.color }
    };
  
    const wheelsize = Math.floor(input.wheelsize) % 2 === 0
      ? Math.floor(input.wheelsize) - 1
      : Math.floor(input.wheelsize);
  
    const car = {
      model: input.model,
      engine: availableEngines.find(engine => engine.power >= input.power),
      carriage: availableCarriages[input.carriage],
      wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    };
  
    return car;
  }
  
  console.log(JSON.stringify(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
  }), null, 2));
  