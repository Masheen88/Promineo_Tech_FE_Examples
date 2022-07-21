console.log("Generating a basic set of cards.");

// class to define each playing card
class PlayingCard {
  constructor() {
    // There are 4 suits
    this.cardSuits = [
      "clubs \u2663",
      "diamonds \u2666",
      "hearts \u2665",
      "spades \u2660",
    ];
    // There are 13 ranks
    this.cardRanks = [
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
    // Each card has a numerical value of 1-13
    this.cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }

  // iterates through each cardSuits, cardRanks, and cardValues and creates a new array of cards.
  createCards() {
    // A new array to hold all the cards temporarily
    let cardDeck = [];
    console.log("This is my deck of cards array:", cardDeck);
    // For in loop to iterate through each suit. (4 Loops)
    for (let cardSuit in this.cardSuits) {
      console.log("This is the card suit:", this.cardSuits[cardSuit]);
      // For in loop to iterate through each rank. (13 Loops)
      for (let cardRank in this.cardRanks) {
        console.log("This is the card rank:", this.cardRanks[cardRank]);
        // Pushs the card to the cardDeck array.
        cardDeck.push({
          // Creates a new object with the cardValue
          cardValue: this.cardValues[cardRank],
          // Creates a new object with the cardSuit and cardRank
          faceValue:
            this.cardRanks[cardRank] + " of " + this.cardSuits[cardSuit],
        });
      }
    }
    console.log("cardDeck in createCards method:", cardDeck);
    // Returns the cardDeck array.
    return cardDeck;
  }
}

// class to define a deck of cards
class CardDeck {
  constructor(newCards) {
    // Creates a new array to hold all the cards
    this.cards = newCards;
  }
}

// creates new cards
let newCards = new PlayingCard();
console.log("newCards in createCards method:", newCards);

// creates a new card deck
let newCardDeck = new CardDeck(newCards.createCards());
console.log("my new card deck class:", newCardDeck);

// display the overall cards object from the newCardDeck
console.log("This is a new card deck:", newCardDeck.cards);

// displays a specific faceValue object and cardValue object from the array of cards
console.log(`
This is a specific card value from my deck.
  A ${newCardDeck.cards[1].faceValue} with a value of ${newCardDeck.cards[1].cardValue}
`);
