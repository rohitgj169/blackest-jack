let shuffle = require("lodash.shuffle");

function card(value, suit) {
  this.value = value;
  this.suit = suit;
}

function deck() {
  this.values = [
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
  this.suits = ["♣", "♦", "♥", "♠"];
  let cards = [];

  for (let s = 0; s < this.suits.length; s++) {
    for (let v = 0; v < this.values.length; v++) {
      cards.push(new card(this.values[v], this.suits[s]));
    }
  }

  return cards;
}

function shuffleDeck(deck) {
  let shuffledDeck = shuffle(deck);
  return shuffledDeck;
  // randomly change indexes of cards in deck array
}

function draw(deck) {
  // draw a random card from the deck
  // returns card object
  let card = deck.pop();
  console.log(card);
  return card;
}

function deal(deck) {
  let playerDeal = [];
  let computerDeal = [];

  playerDeal.push(draw(deck));
  computerDeal.push(draw(deck));
  playerDeal.push(draw(deck));
  computerDeal.push(draw(deck));

  return [playerDeal, computerDeal];
}

function bustCheck(hand, player) {
  let aces = [];
  let total = 0;
  hand.forEach((card) => {
    if (card.value === "A") {
      total += 1;
      aces.push(11);
    } else if (["K", "Q", "J"].indexOf(card.value) >= 0) {
      total += 10;
    } else {
      total += card.value * 1;
    }
  });
  if (total > 21) {
    console.log("BUST! Total: ", total);
    return {
      total, 
      bust: true,
    }
  } else if (total < 12 && aces.length > 0) {
    total += 10;
    console.log("Soft hand total: ", total);
    if (total === 21) {
      console.log("Soft Win!", total);
    }
    return {
      total, 
      bust: false,
    };
  } else {
    if(player === 1) console.log("Player:",total);
    if(player === 2) console.log("Computer:",total);
    return {
      total:total, 
      bust: false,
    };
  }
}

module.exports = {
  deck,
  shuffle: shuffleDeck,
  draw,
  deal,
  bustCheck,
};
