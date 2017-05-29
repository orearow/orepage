'use strict';

var cardLength = document.querySelectorAll('.card').length;
var cardHeader = document.querySelectorAll('.card_header');
console.log(cardLength, cardHeader);
for (var i = 0; i < cardLength; i++) {
  var cardHeaderUrl = cardHeader[i].getAttribute('data-background');
  cardHeader[i].style.background = 'url(' + cardHeaderUrl + ')no-repeat center center / cover';
}