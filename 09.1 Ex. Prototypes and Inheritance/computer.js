function createComputerHierarchy() {
    class Keyboard {
      constructor(manufacturer, responseTime) {
        this.manufacturer = manufacturer;
        this.responseTime = responseTime;
      }
    }
  
    class Monitor {
      constructor(manufacturer, width, height) {
        this.manufacturer = manufacturer;
        this.width = width;
        this.height = height;
      }
    }
  
    class Battery {
      constructor(manufacturer, expectedLife) {
        this.manufacturer = manufacturer;
        this.expectedLife = expectedLife;
      }
    }
  
    class Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        this.manufacturer = manufacturer;
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
      }
    }
  
    class Laptop extends Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
  
        // Ensure that the battery is an instance of the Battery class
        if (!(battery instanceof Battery)) {
          throw new TypeError('Invalid battery. Must be an instance of the Battery class.');
        }
  
        this._battery = battery;
      }
  
      get battery() {
        return this._battery;
      }
  
      set battery(newBattery) {
        // Ensure that the newBattery is an instance of the Battery class
        if (!(newBattery instanceof Battery)) {
          throw new TypeError('Invalid battery. Must be an instance of the Battery class.');
        }
  
        this._battery = newBattery;
      }
    }
  
    class Desktop extends Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
  
        // Ensure that the keyboard is an instance of the Keyboard class
        if (!(keyboard instanceof Keyboard)) {
          throw new TypeError('Invalid keyboard. Must be an instance of the Keyboard class.');
        }
  
        // Ensure that the monitor is an instance of the Monitor class
        if (!(monitor instanceof Monitor)) {
          throw new TypeError('Invalid monitor. Must be an instance of the Monitor class.');
        }
  
        this._keyboard = keyboard;
        this._monitor = monitor;
      }
  
      get keyboard() {
        return this._keyboard;
      }
  
      set keyboard(newKeyboard) {
        // Ensure that the newKeyboard is an instance of the Keyboard class
        if (!(newKeyboard instanceof Keyboard)) {
          throw new TypeError('Invalid keyboard. Must be an instance of the Keyboard class.');
        }
  
        this._keyboard = newKeyboard;
      }
  
      get monitor() {
        return this._monitor;
      }
  
      set monitor(newMonitor) {
        // Ensure that the newMonitor is an instance of the Monitor class
        if (!(newMonitor instanceof Monitor)) {
          throw new TypeError('Invalid monitor. Must be an instance of the Monitor class.');
        }
  
        this._monitor = newMonitor;
      }
    }
  
    return {
      Battery,
      Keyboard,
      Monitor,
      Computer,
      Laptop,
      Desktop
    };
  }
  
  // Example usage:
  let classes = createComputerHierarchy();
  let Computer = classes.Computer;
  let Laptop = classes.Laptop;
  let Desktop = classes.Desktop;
  let Monitor = classes.Monitor;
  let Battery = classes.Battery;
  let Keyboard = classes.Keyboard;
  
  let battery = new Battery('Energy', 3);
  let laptop = new Laptop('Hewlett Packard', 2.4, 4, 1, 2.5, 'Silver', battery);
  let keyboard = new Keyboard('Logitech', 0.2);
  let monitor = new Monitor('Dell', 1920, 1080);
  let desktop = new Desktop('Dell', 3.2, 8, 2, keyboard, monitor);
 