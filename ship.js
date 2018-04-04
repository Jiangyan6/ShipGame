var lacationl = 3;
var lacationl = 4;
var lacationl = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guss < 0 || guesses > 6) {
       alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3){
      alert = ("HIT!");
      hits == hits + 1;
    if (hits == 3) {
    isSunk == true;
    alert("You sank my battleship!");
    }
   } else {
     alert("MISS");
   }   
  }
}
var starts = "You took" + guesses + "guesses to sink the battleship," +
             "which means your shotting accuracy was " + (3/guesses);
alert(stats);
