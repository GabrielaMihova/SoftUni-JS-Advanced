function createCard(face, suit) {
  // Define valid faces and suits
  const validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const validSuits = ["S", "H", "D", "C"];

  // Check if the provided face is valid
  if (!validFaces.includes(face)) {
    throw new Error("Invalid card face");
  }

  // Check if the provided suit is valid
  if (!validSuits.includes(suit)) {
    throw new Error("Invalid card suit");
  }

  // Define a toString method for the Card object
  const toString = () => {
    const suitSymbols = {
      S: "\u2660", // Spades (♠)
      H: "\u2665", // Hearts (♥)
      D: "\u2666", // Diamonds (♦)
      C: "\u2663", // Clubs (♣)
    };

    return `${face}${suitSymbols[suit]}`;
  };

  // Return the Card object
  return {
    face,
    suit,
    toString,
  };
}

// Test cases
try {
  const card1 = createCard("A", "S");
  console.log(card1.toString()); // Output: A♠

  const card2 = createCard("10", "H");
  console.log(card2.toString()); // Output: 10♥

  // This will throw an error
  const invalidCard = createCard("1", "C");
  console.log(invalidCard.toString());
} catch (error) {
  console.error(error.message); // Output: Invalid card face
}
