class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
    }

    createDeck () {
        for (let i = 0; i < this.suits.length; i++){
            for (let j = 0; j < this.ranks.length; j++){
                let card = {
                
                name: `${this.ranks[j]} of ${this.suits[i]}` ,
                value: j+1
                }
            
                this.deck.push(card)

                console.log(card)
            }
        }
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1)); 
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            } 
    }

}

class Game {
  constructor() {
    this.player1 = {
    name: "Player 1",
    score: 0,
    hand: []
    }
    this.player2 = {
        name: "Player 2",
        score: 0,
        hand: []
    }
  } 

  playGame() {
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

    while (deck.deck.length !== 0) {

        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())
    }

    for (let i = 0; i < this.player1.hand.length; i++) {
        if (this.player1.hand[i].value > this.player2.hand[i].value){
            this.player1.score ++
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 1 wins a point!
                Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)    
            }  else if (this.player2.hand[i].value > this.player1.hand[i].value){
                this.player2.score ++
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 2 wins a point!
                    Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                    `)
            } else {
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Tie: No points awarded
                    Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                    `)
            }

    }

    if (this.player1.score > this.player2.score){
        console.log(`Player 1 Wins!
        Final Score: p1: ${this.player1.score}
                     p2: ${this.player2.score}
        `)
    } else if (this.player2.score > this.player1.score){
        console.log(`Player 2 Wins!
               Final Score: p1: ${this.player1.score}
                            p2: ${this.player2.score}
        `)
    } else {
        console.log('Tie')
    }
  }



}


const game = new Game
game.playGame()







//Shuffle deck reference:
//https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/