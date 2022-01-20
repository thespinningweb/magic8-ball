$(document).ready(function() {
    var magic8Ball = {};
    
magic8Ball.listOfAnswers = ["Yes", "No", "I don't think so", "Naturally", "Absolutely", "No chance."];
    $("#answer").hide();
    
    magic8Ball.askQuestion = function(question) {
    
    var randomNumber = Math.random();
    
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    
    var answer = this.listOfAnswers[randomIndex];
    
        $("#answer").text( answer );
    console.log(question);
    console.log(answer);
};

magic8Ball.askQuestion("Am I beautiful"); 
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    
$("#answer").fadeIn(4000);
});

var onClick = function() {
    $("#answer").hide();
 
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
};  
   setTimeout(
       function() {
           var question = prompt("Ask a yes or no question");
           $("#8ball").effect( "shake" );  
           magic8Ball.askQuestion(question);  }, 500);