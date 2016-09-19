/*JavaScript for BlackJack-GA Unit 1 Project*/
/*Created by Eric Stermer*/

/********************PSUEDO CODE********************/
/*
Create a game stats object
  contains player bank ammount,
  cards , current bet ammount,
  isGameOver, dealerDeck, discardDeck, player and dealers hand
  isDeckEmpty, playersTurn
  //each card will be an object that contains a cardValue, suit, img, cardName, faceUp
*/

var gameStats = {
  playerBankAmmount: 0,
  betAmmount: 50,
  currentBet: 0,
  discards: 1,
  playerHand: [],
  playerScore: 0,
  dealerHand:[],
  dealerScore: 0,
  playersTurn: true,
  playerBust: false,
  cardsAreDealt: false,
  playerWins: false,
  dealerWins: false
};

var App = {

  cards: [{cardName: 'ace', cardValue: 11, img: '../img/acespades.jpeg', suit: 'spades'}, {cardName: 'two', cardValue: 2, img: '../img/twospades.jpeg', suit: 'spades'},
    {cardName: 'three', cardValue: 3, img: '../img/threespades.jpeg', suit: 'spades'}, {cardName: 'four', cardValue: 4, img: '../img/fourspades.jpeg', suit: 'spades'},
    {cardName: 'five', cardValue: 5, img: '../img/fivespades.jpeg', suit: 'spades'}, {cardName: 'six', cardValue: 6, img: '../img/sixspades.jpeg', suit: 'spades'},
    {cardName: 'seven', cardValue: 7, img: '../img/sevenspades.jpeg', suit: 'spades'}, {cardName: 'eight', cardValue: 8, img: '../img/eightspades.jpeg', suit: 'spades'},
    {cardName: 'nine', cardValue: 9, img: '../img/ninespades.jpeg', suit: 'spades'}, {cardName: 'ten', cardValue: 10, img: '../img/tenspades.jpeg', suit:'spades'},
    {cardName: 'jack', cardValue: 10, img: '../img/jackspades.jpeg', suit: 'spades'}, {cardName: 'queen', cardValue: 10, img: '../img/queenspades.jpeg', suit: 'spades'},
    {cardName: 'king', cardValue: 10, img: '../img/kingspades.jpeg', suit: 'spades'}, {cardName: 'ace', cardValue: 11, img: '../img/aceclubs.jpeg', suit: 'clubs'},
    {cardName: 'two', cardValue: 2, img: '../img/twoclubs.jpeg', suit: 'clubs'}, {cardName: 'three', cardValue: 3, img: '../img/threeclubs.jpeg', suit: 'clubs'},
    {cardName: 'four', cardValue: 4, img: '../img/fourclubs.jpeg', suit: 'clubs'}, {cardName: 'five', cardValue: 5, img: '../img/fiveclubs.jpeg', suit: 'clubs'},
    {cardName: 'six', cardValue: 6, img: '../img/sixclubs.jpeg', suit: 'clubs'}, {cardName: 'seven', cardValue: 7, img: '../img/sevenclubs.jpeg', suit: 'clubs'},
    {cardName: 'eight', cardValue: 8, img: '../img/eightclubs.jpeg', suit: 'clubs'}, {cardName: 'nine', cardValue: 9, img: '../img/nineclubs.jpeg', suit: 'clubs'},
    {cardName: 'ten', cardValue: 10, img: '../img/tenclubs.jpeg', suit: 'clubs'}, {cardName: 'jack', cardValue: 10, img: '../img/jackclubs.jpeg', suit: 'clubs'},
    {cardName: 'queen', cardValue: 10, img: '../img/queenclubs.jpeg', suit: 'clubs'}, {cardName: 'king', cardValue: 10, img: '../img/kingclubs.jpeg', suit: 'clubs'},
    {cardName: 'ace', cardValue: 11, img: '../img/acehearts.jpeg', suit: 'hearts'}, {cardName: 'two', cardValue: 2, img: '../img/twohearts.jpeg', suit: 'hearts'},
    {cardName: 'three', cardValue: 3, img: '../img/threehearts.jpeg', suit: 'hearts'}, {cardName: 'four', cardValue: 4, img: '../img/fourhearts.jpeg', suit: 'hearts'},
    {cardName: 'five', cardValue: 5, img: '../img/fivehearts.jpeg', suit: 'hearts'}, {cardName: 'six', cardValue: 6, img: '../img/sixhearts.jpeg', suit: 'hearts'},
    {cardName: 'seven', cardValue: 7, img: '../img/sevenhearts.jpeg', suit: 'hearts'}, {cardName: 'eight', cardValue: 8, img: '../img/eighthearts.jpeg', suit: 'hearts'},
    {cardName: 'nine', cardValue: 9, img: '../img/ninehearts.jpeg', suit: 'hearts'}, {cardName: 'ten', cardValue: 10, img: '../img/tenhearts.jpeg', suit: 'hearts'},
    {cardName: 'jack', cardValue: 10, img: '../img/jackhearts.jpeg', suit: 'hearts'}, {cardName: 'queen', cardValue: 10, img: '../img/queenhearts.jpeg', suit: 'hearts'},
    {cardName: 'king', cardValue: 10, img: '../img/kinghearts.jpeg', suit: 'hearts'}, {cardName: 'ace', cardValue: 11, img: '../img/acediamonds.jpeg', suit: 'diamonds'},
    {cardName: 'two', cardValue: 2, img: '../img/twodiamonds.jpeg', suit: 'diamonds'}, {cardName: 'three', cardValue: 3, img: '../img/threediamonds.jpeg', suit: 'diamonds'},
    {cardName: 'four', cardValue: 4, img: '../img/fourdiamonds.jpeg', suit: 'diamonds'}, {cardName: 'five', cardValue: 5, img: '../img/fivediamonds.jpeg', suit: 'diamonds'},
    {cardName: 'six', cardValue: 6, img: '../img/sixdiamonds.jpeg', suit: 'diamonds'}, {cardName: 'seven', cardValue: 7, img: '../img/sevendiamonds.jpeg', suit: 'diamonds'},
    {cardName: 'eight', cardValue: 8, img: '../img/eightdiamonds.jpeg', suit: 'diamonds'}, {cardName: 'nine', cardValue: 9, img: '../img/ninediamonds.jpeg', suit: 'diamonds'},
    {cardName: 'ten', cardValue: 10, img: '../img/tendiamonds.jpeg', suit: 'diamonds'}, {cardName: 'jack', cardValue: 10, img: '../img/jackdiamonds.jpeg', suit: 'diamonds'},
    {cardName: 'queen', cardValue: 10, img: '../img/queendiamonds.jpeg', suit: 'diamonds'}, {cardName: 'king', cardValue: 10, img: '../img/kingdiamonds.jpeg', suit: 'diamonds'}],
  newGame: function(){

    // set all stats to starting points
    gameStats.playersTurn = true;
    gameStats.cardsAreDealt = false;
    gameStats.playerHand = [];
    gameStats.playerScore = 0;
    gameStats.dealerHand = [];
    gameStats.dealerScore = 0;
    gameStats.currentBet = 0;
    gameStats.playerBankAmmount = 2000;

    //shuffleCards and input to the deck
    gameStats.cards = this.shuffleCards();
  },
  shuffleCards: function(){
    // console.log(gameStats.cards);
    var cards = this.cards;

    // set currentIndex to the last index +1
    var currentIndex = cards.length;
    //declare empty variables for temp value and a random index
    var temporaryValue;
    var randomIndex;

    // Loop through array backwards from card.length to 0
    while (0 !== currentIndex) {

      // pick a random index
      randomIndex = Math.floor(Math.random() * currentIndex);
      //move down an index in cards array
      currentIndex -= 1;

      // temp value is the current element
      temporaryValue = cards[currentIndex];
      //now set the current index to a random element at the random index
      cards[currentIndex] = cards[randomIndex];
      //set the element at the random index to the current element
      cards[randomIndex] = temporaryValue;
    }
    //set deck to shuffled cards
    return cards;
  },
  dealCard: function(){

    //take the last card off the top of the deck
    var card = this.cards.pop();
    // add card back to beginning of cards array
    this.cards.unshift(card);
    //add 1 to discards number
    gameStats.discards++

    //shuffle cards if gone through entire deck
    if(gameStats.discards === 52){
      this.cards = this.shuffleCards();
      gameStats.discards = 1;
    }

    //send card to player or dealer and create card on DOM
    if(gameStats.playersTurn){
      gameStats.playerHand.push(card);
      UI.createPlayerCard(card);
    } else {
      gameStats.dealerHand.push(card);
      UI.createDealerCard(card);
    }
  },
  discardHand: function(){
    //clear hands and the table DOM
    gameStats.playerHand = [];
    gameStats.dealerHand = [];
    UI.clearTable();
  },
  playerBet: function(){
    //add bet ammout to the current bet
    gameStats.currentBet += gameStats.betAmmount;

    //subtract bet ammount from player bank
    gameStats.playerBankAmmount -= gameStats.betAmmount;

    //if bank ammount goes below zero, dont allow the bet to be made
    if(gameStats.playerBankAmmount < 0){
      gameStats.playerBankAmmount += gameStats.betAmmount;
      gameStats.currentBet -= gameStats.betAmmount;
    }

  },
  doubleBet: function() {
    //add current bet back to player bank
    gameStats.playerBankAmmount += gameStats.currentBet;

    //double the current bet ammount
    gameStats.currentBet *= 2;

    //subtract current bet ammount from player bank
    gameStats.playerBankAmmount -= gameStats.currentBet;

    //if bank ammount goes below zero, dont allow the bet to be made
    if(gameStats.playerBankAmmount < 0){
      gameStats.playerBankAmmount += gameStats.currentBet;
      gameStats.currentBet /= 2;
      gameStats.playerBankAmmount -= gameStats.currentBet;
    }
  },
  playerWinnings: function(){
    gameStats.playerBankAmmount += gameStats.currentBet * 2;
  },
  dealerTurn: function(){
    //second check for blackJack
    var blackJack = this.checkForBlackJack(gameStats.dealerHand);

    if(blackJack){
      gameStats.cardsAreDealt = false;
      gameStats.playersTurn = true;
      UI.loseDisplay();
      gameStats.currentBet = 0;g
    }

    //loop through till dealer wins or loses or ties
    while(gameStats.cardsAreDealt){

      if(gameStats.dealerScore > 21) {

        //check if dealer busted
        gameStats.cardsAreDealt = false;
        this.playerWinnings();
        // UI.playerBankDisplay();
        UI.winDisplay();
        // gameStats.currentBet = 0;
        gameStats.playersTurn = true;
        // UI.playerBankDisplay();

      } else if(gameStats.dealerScore > 17 && gameStats.dealerScore < gameStats.playerScore) {

        //check if dealer score is greater than 17 but not larger than players score
        gameStats.cardsAreDealt = false;
        this.playerWinnings();
        UI.playerBankDisplay();
        UI.winDisplay();
        gameStats.playersTurn = true;
        // UI.playerBankDisplay();

      } else if (gameStats.dealerScore === gameStats.playerScore && gameStats.dealerScore > 11){

        //check if dealer score is the same as players
        gameStats.cardsAreDealt = false;
        UI.tieDisplay();
        gameStats.playerBankAmmount += gameStats.currentBet;
        gameStats.playersTurn = true;
        // UI.playerBankDisplay();

      } else if(gameStats.dealerScore > gameStats.playerScore){

        //check if dealer score is higher than players
        gameStats.cardsAreDealt = false;
        UI.loseDisplay();
        gameStats.playersTurn = true;

      } else {

        // var delayHit = setTimeout(function(){
          // deal card
          App.dealCard();
          App.computeHand(gameStats.dealerHand);
        // }, 800);

      }

    }

    UI.playerBankDisplay();
    gameStats.currentBet = 0;

    //check if player is out of money and announce Game Over
    App.outOfMoneyGameOver();

  },
  computeHand: function(hand) {
    var sum = 0;

    // add all car values up
    for(var i = 0; i < hand.length; i++){
      sum += hand[i].cardValue;
      // console.log(sum);
    }
    //check for an ace in the hand if sum is over 21 subtract 10
    for(var j = 0; j < hand.length; j++){
      if(sum > 21 && hand[j].cardName === 'ace'){
        sum -= 10;
      }
    }

    if(gameStats.playersTurn){
      gameStats.playerScore = sum;
    } else {
      gameStats.dealerScore = sum;
    }

  },
  checkForBlackJack: function(hand) {
    var blackJack = false;
    if(hand[0].cardName === "ace"){
      if(hand[1].cardName === "jack" || hand[1].cardName === "queen" || hand[1].cardName === "king"){
        blackJack = true;
      }
    }else if(hand[0].cardName === "jack" || hand[0].cardName === "queen" || hand[0].cardName === "king"){
      if(hand[1].cardName === "ace"){
        blackJack = true;
      }
    }
    return blackJack;
  },
  outOfMoneyGameOver: function() {
    if(gameStats.playerBankAmmount === 0){
      gameStats.playersTurn = false;
      gameStats.cardsAreDealt = true;
      alert('GAME OVER! PRESS START FOR A NEW GAME!');
    }
  }
};

var UI = {

  createPlayerCard: function(card){

    var $card = $('<div>').addClass('card');
    var img = card.img;
    $card.html('<img class="card" src="' + img + '">');

    //append to the DOM
    $('#player-hand').append($card);

  },
  createDealerCard: function(card) {

      var img;
      var children = document.getElementById('dealer-hand').children;

      //make the first card face down
      if(children.length === 0 ){
        img = '../img/cardback.jpg';
      } else {
        img = card.img;
      }

      //add the class and img html
      var $card = $('<div>').addClass('card');
      $card.html('<img class="card" src="' + img + '">');

      //append to the DOM
      $('#dealer-hand').append($card);

  },
  showDealerCard: function() {
    var children = document.getElementById('dealer-hand').children;
    var img = gameStats.dealerHand[0].img;

    //rotate card by adding a class
    children[0].innerHTML = '<img class="card begin-flip-card" src="../img/cardback.jpg">';

    var delay = setTimeout(function() {
      //fill ith the card image
      children[0].innerHTML = '<img class="card end-flip-card" src="' + img + '">';
    }, 400);

  },
  clearTable: function(){
    //set inner html of both hands to nothing
    $('#dealer-hand').html('');
    $('#player-hand').html('');
    $('#game-feedback').html('<span>PLACE YOUR BET, THEN PRESS DEAL</span>');
    this.postBet();
  },
  postBet: function(){
    $('#game-display').html('<span> YOUR CURRENT BET: ' + gameStats.currentBet + '</span>');
  },
  playerBankDisplay: function() {
    $('#bank-display').html('<span>$' + gameStats.playerBankAmmount + '</span>');
  },
  winDisplay: function(){
    $('#game-display').html('<span> YOU WON $' + gameStats.currentBet*2 + '!</span>');
  },
  loseDisplay: function(){
    $('#game-display').html('<span> YOU LOST... SORRY :(</span>');
  },
  tieDisplay: function(){
    $('#game-display').html('<span> YOU TIED, HERES YOUR MONEY BACK!</span>');
  },
  displayGameStatus: function(score) {
    var $gameFeedBack = $('#game-feedback');

    if(gameStats.playersTurn){
      if(score > 21){
        $gameFeedBack.html('<span>' + score + '! BUST!</span>');
      } else if(score === 21){
        $gameFeedBack.html('<span>YOUR SCORE IS: ' + score + 'YOU SHOULD STAY</span>');
      } else {
        $gameFeedBack.html('<span>YOUR SCORE IS: ' + score + ', HIT OR STAY</span>');
      }
    }else {
      if(score <= 21){
        $gameFeedBack.html('<span>DEALER SCORE IS: ' + score + '</span>');
      } else {
        $gameFeedBack.html('<span>' + score + '! BUST!</span>');
      }
    }
  }

};

var Events = {

  startGame: function() {

    //reset or initialize gameStats and DOM
    UI.clearTable();
    $('#game-display').html('<span>WELCOME TO BLACK JACK</span>');
    App.newGame();
    UI.playerBankDisplay();

  },
  deal: function() {
    if(!gameStats.cardsAreDealt){
      //clearTable and hands
      App.discardHand();

      //variables to alternate and check for clearInterval
      var animationClass =  'deal-card-player';
      var i = 0;

      // for(var i = 0; i < 4; i++){
      var dealInterval = setInterval(function(){
        if(i === 3){
          clearInterval(dealInterval);
        }

        //animation for dealing card
        $('#deal-card').addClass(animationClass);
        console.log(animationClass);


        var delayDeal = setTimeout(function() {
          //deal card
          App.dealCard();
          //clear class//clear delay
          $('#deal-card').removeClass(animationClass);

          if(gameStats.playersTurn){
            animationClass =  'deal-card-dealer';
            gameStats.playersTurn = false;
          } else {
            animationClass =  'deal-card-player';
            gameStats.playersTurn = true;
          }

          // update score and DISPLAY
          App.computeHand(gameStats.playerHand);
          UI.displayGameStatus(gameStats.playerScore);

          clearTimeout(delayDeal);

        }, 410);



        i++;

      }, 800);

      var delayBlackJackCheck = setTimeout(function(){

        var blackJack = App.checkForBlackJack(gameStats.playerHand);
        if (blackJack){
          //allow player to click deal for a new hand
          gameStats.cardsAreDealt = false;
          gameStats.playersTurn = true;
          this.playerWinnings();
          UI.playerBankDisplay();
          UI.winDisplay();
          gameStats.currentBet = 0;
        }
        clearTimeout(delayBlackJackCheck);
      }, 2600);


      //prevent user from pressing deal until cards need to be dealt again
      gameStats.cardsAreDealt = true;
    }
  },
  bet: function() {
    //must place bet before cards are dealt
    if(!gameStats.cardsAreDealt){
      // can only bet when it is players turn
      if(gameStats.playersTurn){
        App.playerBet();
        UI.postBet();
        UI.playerBankDisplay();
      }
    }
  },
  doubleDown: function(){
    //can only DD when its players turn
    if(gameStats.playersTurn && gameStats.cardsAreDealt){
      App.doubleBet();
      UI.postBet();
      UI.playerBankDisplay();
      Events.stay();
    }
  },
  hit: function() {
    // prevent a player from hitting uunless cards have been dealt and his turn
    if(gameStats.playersTurn && gameStats.cardsAreDealt){
      //player only allowed to hit up to 5 cards
      if(gameStats.playerHand.length < 5){

        $('#deal-card').addClass('deal-card-player');
        var delayHit = setTimeout(function(){
          // deal card
          App.dealCard();
          //compute the hand
          App.computeHand(gameStats.playerHand);
          UI.displayGameStatus(gameStats.playerScore);


          //check if hand busted
          if(gameStats.playerScore > 21){
            //display loseDisplay
            UI.loseDisplay();
            //turn cardsDealt to false to start a new hand
            gameStats.cardsAreDealt = false;
            gameStats.playersTurn = true;
            gameStats.currentBet = 0;

            //check if player is out of money and announce Game Over
            App.outOfMoneyGameOver();
          }

          //clear animation and timeout
          $('#deal-card').removeClass('deal-card-player');
          clearTimeout(delayHit);

        }, 400);



      } else {

        gameStats.playersTurn = false;
        gameStats.dealerHand[0].faceUp = true;
        UI.createDealerCard(gameStats.dealerHand)
        App.dealerTurn();

      }
    }
  },
  stay: function() {
    //can only stay if players turn and cards are dealt
    if(gameStats.playersTurn && gameStats.cardsAreDealt){
      gameStats.playersTurn = false;

      //flipping facedown card over for dealer
      UI.showDealerCard();

      var delayDealerTurn = setTimeout(function() {
          //call dealers turn
          App.computeHand(gameStats.dealerHand);
          App.dealerTurn();
      }, 1200);

    }
  }

};

$(function(){

  //document onload ready event handlers
  $('#start-button').on('click', Events.startGame);
  $('#deal').on('click', Events.deal);
  $('#hit').on('click', Events.hit);
  $('#stay').on('click', Events.stay);
  $('#bet').on('click', Events.bet);
  $('#dd').on('click', Events.doubleDown);


});




/******************************************************************************/
