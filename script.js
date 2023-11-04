const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
const restartButton = document.getElementById('restart-button');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

