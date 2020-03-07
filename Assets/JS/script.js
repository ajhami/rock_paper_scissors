var battleAttacks = ["r", "p", "s"];
var battleDictionary = {"r" : "rock", "p" : "paper", "s" : "scissors"}
var wins = 0;
ties = 0; 
var loses = 0;

while(userAttack !== null) {
    var userAttack = prompt("Let's play Rock, Paper, Scissors!\n" +
                            "Select 'r' for Rock\n" +
                            "Select 'p' for Paper\n" +
                            "Select 's' for Scissors\n\n" +
                            "Click 'cancel' to exit the game");

    if(userAttack === null) {
        alert("Thanks for playing.\n" +
      "Battle Summary:\nWins = " + wins +
      "\nLosses = " + loses + 
      "\nTies = " + ties +
      "\nGoodbye!")
    }

    else if(battleAttacks.includes(userAttack.toLowerCase())) {

        userAttack = userAttack.toLowerCase();
        console.log("userAttack = " + userAttack);
        var randNum =  Math.floor(Math.random() * 3);
        console.log("randNum = " +randNum);
        var computerAttack = battleAttacks[randNum];
        console.log("computerAttack = " + computerAttack);

        // Winning Results
        if((userAttack === "r" && computerAttack === "s") ||
            (userAttack === "p" && computerAttack === "r") || 
            (userAttack === "s" && computerAttack === "p")) {
            alert("You chose " + battleDictionary[userAttack] + " and the computer chose " + battleDictionary[computerAttack] + "\nYou Win!");
            wins++;
        }

        // Losing Results
        else if((userAttack === "r" && computerAttack === "p") ||
                (userAttack === "p" && computerAttack === "s") || 
                (userAttack === "s" && computerAttack === "r")) {
            alert("You chose " + battleDictionary[userAttack] + " and the computer chose " + battleDictionary[computerAttack] + "\nYou Lose...");
            loses++;
        }

        // Tie Results
        else {
            alert("You chose " + battleDictionary[userAttack] + " and the computer chose " + battleDictionary[computerAttack] + "\nIt's a draw!");
            ties++;
        }
    }

    else {
        alert("Invalid command.\nTry again!")
    }
}