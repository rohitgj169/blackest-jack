let shuffle = require('lodash.shuffle');

function card(value,suit){
    this.value=value;
    this.suit=suit;
}

function deck(){
    this.values = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
    this.suits = ['Clubs','Diamonds','Hearts','Spades'];
    let cards = [];

    for( let s = 0; s <this.suits.length; s++){
        for( let v = 0; v < this.values.length; v++){
            cards.push( new card(this.values[v], this.suits[s]));
        }
    }

    return cards;
}

function shuffleDeck(deck){
    let shuffledDeck = shuffle(deck);
    // console.log(shuffledDeck);
    return shuffledDeck;
    // randomly change indexes of cards in deck array
}

function draw(deck){
    // draw a random card from the deck
    // returns card object
    let card = deck.pop();
    console.log(card);
    return card;
}

function deal(deck){
    let playerDeal = [];
    let computerDeal = [];

    playerDeal.push(draw(deck));
    computerDeal.push(draw(deck));
    playerDeal.push(draw(deck));
    computerDeal.push(draw(deck));

    return [playerDeal, computerDeal];

}

function bustCheck(hand){
    let total = 0;
    hand.forEach((card) => {
      
    })
}

module.exports = {
  deck,
  shuffle:shuffleDeck,
  draw,
  deal,
}