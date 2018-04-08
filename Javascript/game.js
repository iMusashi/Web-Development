var value = prompt("Please guess a number");

var secretNumber = "7";

if(value === secretNumber ){
    alert("You guessed it");
}
else if(value == secretNumber)
{
    alert("Nice try, please enter the correct format");
    location.reload(true);
    
}
else if(value < secretNumber)
{
    alert("Too low. Please try again.");
    location.reload(true);
}
else{
    alert("Too high. Please try again.");   
    location.reload(true);
}