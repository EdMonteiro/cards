var suits = ["H","S","C","D"];
// "H" - Hearts
// "S" - Spades
// "C" - Clubs
// "D" - Diamonds
var numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var cards = [];
var count = 0;
// Add a shuffle and draw button and a place to display the cards
// ****** Add Bootsrap for better UI/UX ***** 


// On the shuffle button's click event, I run two for loops that generates the cards and assigns a random number to the card. The card object created, stores the suit, the number and a random number between 1 and 5200. I chose a big number to minimize the chances of getting a duplicate number
$("#shuffle").click(function() {
  count = 0
  cards = [];
  $("#cards").html("");
  for(s in suits) {
      var suit = suits[s];
      for(n in numbers) {
          var num = numbers[n]
          var card = {
            suit: suit,
            number: num,
            order: Math.floor(Math.random() * 5200) + 1   
          };
          cards.push(card);   
      }
  }


// To sort the cards, used a custom sort function.
  cards = cards.sort(function(a,b) {
      return (a.order < b.order ? -1 : 1)
  });



// Finally, display the first four from the deck
  for(var i = 0;i < 4;i++) {
      count++;
      displayCard(i);
  }
});


// I used a function called displayCard to display the card
function displayCard(cardNum) {
  var i = cardNum
  var count = cardNum + 1;
  var card = cards[i];
  $("#cards").append(count + " - " + card.number + card.suit + "<br/>");   
}


// The draw button just takes the next card, and does nothing if the number is 52
$("#draw").click(function() {
  if(count < 52) {
      displayCard(count);
      count++;
  }
  return false;
});




