function card(value,suit){
    this.value=value;
    this.suit=suit;
}

export function deck(){
    this.values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    this.suits = ['Clubs','Diamonds','Hearts','Spades'];
    let cards = [];

    for( let s = 0; s <this.suits.length; s++){
        for( let v = 0; v < this.values.length; v++){
            cards.push( new card(this.values[v], this.suits[s]));
        }
    }

    return cards;
}

export function shuffle(deck){
    return null;
    // randomly change indexes of cards in deck array
}

export function draw(deck){
    return null;
    // draw a random card from the deck
}