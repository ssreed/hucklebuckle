(function(app, undefined){
  //private variables
  var userGuess;
  var randNum;
  var answer;

  //private function
  randomGen = function(){
    randNum = Math.floor(100 * Math.random());
    return randNum;
  },

  //public
  app.init = function(){

    var randomNum = randomGen();

    userGuess = document.getElementById("guess").value;
    userGuess = parseInt(userGuess);

    console.log("User guess: " + userGuess);
    console.log("Random val: " + randNum);

    answer = document.getElementById('answer');
    answer.innerHTML = "Your guess was " + userGuess;


    var randomNumtoStr = " " + randomNum;
    while(userGuess !== randomNum)
    {

      if(userGuess < randomNum) {
        userGuess = Number(prompt('Your guess is too low'));
      } else {
        userGuess = Number(prompt('your guess is too high'));
      }
    }

    alert('good job!');

  }

})(window.app = window.namespace || {});

console.log(app);