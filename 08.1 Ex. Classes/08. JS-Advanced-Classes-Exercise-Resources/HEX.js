class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }

  plus(numberOrHex) {
    const newValue = this.value + this.parseInput(numberOrHex);
    return new Hex(newValue);
  }

  minus(numberOrHex) {
    const newValue = this.value - this.parseInput(numberOrHex);
    return new Hex(newValue);
  }

  parse(string) {
    return parseInt(string, 16);
  }

  parseInput(numberOrHex) {
    if (numberOrHex instanceof Hex) {
      return numberOrHex.valueOf();
    } else {
      return numberOrHex;
    }
  }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 === 256);

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
