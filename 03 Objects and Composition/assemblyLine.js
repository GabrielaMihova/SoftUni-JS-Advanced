function createAssemblyLine() {
    return {
      hasClima(car) {
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = function () {
          if (car.temp < car.tempSettings) {
            car.temp++;
          } else if (car.temp > car.tempSettings) {
            car.temp--;
          }
        };
      },
  
      hasAudio(car) {
        car.currentTrack = null;
        car.nowPlaying = function () {
          if (car.currentTrack !== null) {
            console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
          }
        };
      },
  
      hasParktronic(car) {
        car.checkDistance = function (distance) {
          if (distance < 0.1) {
            console.log("Beep! Beep! Beep!");
          } else if (distance < 0.25) {
            console.log("Beep! Beep!");
          } else if (distance < 0.5) {
            console.log("Beep!");
          } else {
            console.log("");
          }
        };
      }
    };
  }
  
  // Example usage
  const assemblyLine = createAssemblyLine();
  const myCar = {
    make: 'Toyota',
    model: 'Avensis'
  };

  // Compose functionalities into the car object
assemblyLine.hasClima(myCar);

// Testing the functionalities
console.log(myCar.temp); // Output: 21

myCar.tempSettings = 18; // Set tempSettings to 18
myCar.adjustTemp(); // Temp becomes 20
console.log(myCar.temp); // Output: 20