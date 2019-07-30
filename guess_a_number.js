var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    guess: 0,
    answer: 20,
    guessAnswer: "",
    winner: false
  },
  methods: {
    submitGuess: function() {
      if (parseInt(this.guess) > (parseInt(this.answer))) {
        console.log("Too High!");
        this.guessAnswer = "Too High!";
        this.winner = false;
      } else if (parseInt(this.guess) < parseInt(this.answer)) {
        console.log("Too Low!");
        this.guessAnswer = "Too Low!";
        this.winner = false;
      } else {
        console.log("Correct!");
        this.guessAnswer = "Correct!";
        this.winner = true;
      }
    }
  }
});
