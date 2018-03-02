var app = new Vue ({
  el: '#app',
  data: {
    rpsString: '',
    isRock: false,
    isPaper: false,
    isScissors: false,
    compChoice: 0,
    compChoiceString: '',
    playerScore: 0,
    compScore: 0,
    result: '',
    error: '',
  },
  methods: {
    rock: function() {
      this.rpsString = 'Rock';
      this.isRock = true;
      this.isPaper = false;
      this.isScissors = false;
      this.error = '';
    },
    paper: function() {
      this.rpsString = 'Paper';
      this.isRock = false;
      this.isPaper = true;
      this.isScissors = false;
      this.error = '';
    },
    scissors: function() {
      this.rpsString = 'Scissors';
      this.isRock = false;
      this.isPaper = false;
      this.isScissors = true;
      this.error = '';
    },
    reset: function() {
      this.rpsString = '';
      this.isRock = false;
      this.isPaper = false;
      this.isScissors = false;
      this.compChoice = -1;
      this.compChoiceString = '';
      this.playerScore = 0;
      this.compScore = 0;
      this.result = '';
      this.error = '';
    },
    runGame: function () {
      this.compChoice = Math.floor(Math.random() * 3);
      if (this.isRock === false && this.isPaper === false && this.isScissors === false)
        this.error = 'Please pick rock, paper, or scissors!';
      else {
      if (this.compChoice === 0) {
        this.compChoiceString = 'Rock';
        if (this.isScissors === true) {
          this.result = 'You lose!';
          this.compScore++;
        }
        else if (this.isPaper === true) {
          this.result = 'You win!';
          this.playerScore++;
        }
        else {
          this.result = 'Tie!';
          this.compScore++;
          this.playerScore++;
        }
      }
      else if (this.compChoice === 1) {
        this.compChoiceString = 'Paper';
        if (this.isRock === true) {
          this.result = 'You lose!';
          this.compScore++;
        }
        else if (this.isScissors === true) {
          this.result = 'You win!';
          this.playerScore++;
        }
        else {
          this.result = 'Tie!';
          this.compScore++;
          this.playerScore++;
        }
      }
      else if (this.compChoice === 2) {
        this.compChoiceString = 'Scissors';
        if (this.isPaper === true) {
          this.result = 'You lose!';
          this.compScore++;
        }
        else if (this.isRock === true) {
          this.result = 'You win!';
          this.playerScore++;
        }
        else {
          this.result = 'Tie!';
          this.compScore++;
          this.playerScore++;
        }
      }
      console.log(this.compChoice);
      this.compChoice = -1;
    }
    }
  }
});
