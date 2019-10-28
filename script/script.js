function playGame() {

	var inputValue = document.forms["gameForm"]["input"].value;

	var startingBet = parseInt(inputValue, 10);
	
    // Check input value

    if (inputValue == "")
    {
		document.getElementById("validationMessageIndex").innerText = "Please enter your bet.";

		return null;
    }
    else if (startingBet < 1)
    {
		document.getElementById("validationMessageIndex").innerText = "Please enter a number greater than 0.";

		return null;
    }

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

// Bootstrap Validation
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

