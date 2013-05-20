var userGuess = 0,
    randNum = 0,
    answer;

var randomGen = function() {
    randNum = Math.floor(100 * Math.random());
    userGuess = document.getElementById("guess").value;
    userGuess = parseInt(userGuess);
    console.log("val is " +  userGuess);
    console.log("rand is " +  randNum);
    init();
};

var init = function() {
    console.log("in init: " + randNum);
    answer = document.getElementById('answer');
    answer.innerHTML = "Your guess was " + userGuess;
    console.log(typeof userGuess + " and " + typeof randNum);
    console.log(userGuess === randNum);
    while(userGuess !== randNum)
    {   
        if(userGuess === randNum)
        {
            alert('Nice!'); 
        }
        else
        {
            userGuess = null;
            return;
        }
        console.log('here');
    }
    console.log('VAL IS : ' + userGuess);
};