function playGame() {
	var startingBet = parseInt(document.forms["gameForm"]["input"].value, 10);

	var moneyRemaining = startingBet;
	var totalRolls = 0;
	var highestAmountWon = startingBet;
	var highestAmountRollCount = 1;

	while (moneyRemaining > 0)
	{
		var result = rollDice();
		totalRolls = totalRolls + 1;

		if (result == 7)
		{
			moneyRemaining = moneyRemaining + 4;
		}
		else
		{
			moneyRemaining = moneyRemaining - 1;
		}

		if (highestAmountWon < moneyRemaining)
		{
			highestAmountWon = moneyRemaining;
			highestAmountRollCount = totalRolls;
		}

	}

	document.getElementById("startingBetIndex").innerText = startingBet;
	document.getElementById("totalRollsIndex").innerText = totalRolls;
	document.getElementById("highestAmountWonIndex").innerText = highestAmountWon;
	document.getElementById("rollCountAtHighestIndex").innerText = highestAmountRollCount;

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