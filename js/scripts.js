var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits =['Spades', 'Hearts', 'Diamonds', 'Clubs'];
var deck =[];
// var suit2 =['Hearts']
// var suit3 =['Diamonds']
// var suit4 =['Clubs']
suits.forEach(function(suit) {
  cards.forEach(function(card) {
    deck.push(card + ' of ' + suit);
  })
});
alert(deck);
