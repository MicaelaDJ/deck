$(document).ready(function() {

  var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  var suits =['Spades', 'Hearts', 'Diamonds', 'Clubs'];

  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      $("ul#deck").append("<li>" + card + ' of ' + suit + "</li>");
    });
  });
});
