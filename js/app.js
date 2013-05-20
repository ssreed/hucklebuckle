var userGuess = 0,
    randNum = 0,
    answer;

var randomGen = function() {
    randNum = Math.floor(100 * Math.random());
    userGuess = document.getElementById("guess").value;
    userGuess = parseInt(userGuess);
    console.log("val is " +  userGuess);
    console.log("rand is " +  randNum); 
};

