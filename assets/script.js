var quizTimer
function countDown{
    quizTimer = setInterval(function(){
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft + " seconds remaining";
        if(timeLeft <= 0){
            clearInterval(quizTimer);
            document.getElementById("timeLeft").innerHTML = "Time's up!";
        }
    }, 1000);

    
}
console.log(quizTimer)