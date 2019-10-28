function playGame() {
	var startingBet = parseInt(document.forms["gameForm"]["input"].value, 10);

	var result = rollDice();

	var moneyRemaining = startingBet;
	var totalRolls = 0;
	var highestAmountWon = startingBet;
	var highestAmountRollCount = 1;

	console.log("result is: " + result)

	if (moneyRemaining > 0)
	{
		if (result == 7)
		{
			moneyRemaining = moneyRemaining + 4;
		}
		else
		{
			moneyRemaining = moneyRemaining - 1;
		}
	}

	console.log("money remaining: " + moneyRemaining);

	return moneyRemaining;

}

function rollDice() {
	var dice1 = Math.floor(Math.random() * 6) + 1;
	var dice2 = Math.floor(Math.random() * 6) + 1;

	return dice1 + dice2;
}

/*
function output() {
	   document.getElementById("numberLabel").innerText = "test";
}
*/