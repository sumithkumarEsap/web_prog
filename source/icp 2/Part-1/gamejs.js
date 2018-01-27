

var userChoice = prompt("Please enter your choice?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

document.write("<p>Computer:" + " " + computerChoice + "</p>");

var compare = function(choice1,choice2) {
    if (choice1 == choice2) {
        return "It's a tie!";
    }
    if (choice1 == "rock") {
        if (choice2 == "scissors") {
            // rock wins
            return "win!";
        } else {
            // paper wins
            return "lose! Try again.";
        }
    }
    if (choice1 == "paper") {
        if (choice2 == "rock") {
            // paper wins
            return "win!";
        } else {
            // scissors wins
            return "lose! Try again.";
        }
    }
    if (choice1 == "scissors") {
        if (choice2 == "rock") {
            // rock wins
            return "lose! Try again.";
        } else {
            // scissors wins
            return "win!";
        }
    }
};


if (! userChoice) {

    document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
} else {
    // Display user choice
    document.write("<p> User:" + " " + userChoice + "</p>");
}
// Run the compare function
var results = compare(userChoice,computerChoice);
// Display results
document.write("-------------------------------------------------<br>" + results);
