(function(app){
  //private variables
  var userGuess;
  var randNum;
  var answer;
  var randomNum;

  //private function
  randomGen = function(){
    randNum = Math.floor(100 * Math.random());
    return randNum;
  },

  app.reset = function(){
      document.getElementById("guess").value = "";
      document.getElementById("answer").innerHTML = "";
      randomNum = randomGen();
      console.log("random reset: " + randomNum);
  },

  app.submit = function(){

    userGuess = document.getElementById("guess").value;
    userGuess = parseInt(userGuess);

    console.log("User guess: " + userGuess);
    console.log("Random val: " + randNum);

    while(userGuess !== randomNum)
    {

      if(userGuess < randomNum) {
        //userGuess = Number(prompt('Your guess is too low'));
        //alert('too low');
        document.getElementById('answer').innerHTML = "Too low " + userGuess;
        return false;

      } else {
        //userGuess = Number(prompt('your guess is too high'));
        //alert('too high');
        document.getElementById('answer').innerHTML = "Too high " + userGuess;
        return false;
      }
    }

    alert('good job!');

  },

  //public
  app.init = function(){

    randomNum = randomGen();
    console.log("random: " + randomNum);



    //answer = document.getElementById('answer');
    //answer.innerHTML = "Your guess was " + userGuess;


    //var randomNumtoStr = " " + randomNum;

  }

})(window.app = window.namespace || {});

console.log(app);