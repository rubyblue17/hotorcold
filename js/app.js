$(document).ready(function(){

	var userName = prompt("Please enter your FIRST NAME.");
	console.log(userName);



function greeting () {

	if (userName != null) {
	$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" +  "Hi, " + userName + "! Make your guess below." + "</h2></div>");
	}
	else {
		alert("You forgot to enter your name! Please enter your name."); 
		location.reload();
	}
};

greeting();

	var secretNumber = function() {

			randomNumber = Math.floor(Math.random() * 100-1) + 1;
				console.log(randomNumber);
				return randomNumber;
	};

	secretNumber();


	function runGame() { 

		var guessNumber = $("#userGuess").val();
			console.log(guessNumber);	

		randomNumber;

		var hotOrcold = (Math.abs(guessNumber - randomNumber));
			console.log(hotOrcold);


		if(hotOrcold === 0) {
			$("#hot-cold-scale").replaceWith("<h2 id='feedback'>" + 
				"You WON!" + "<br>" + "Do you want to play again?" + "<br><br>" + "<a class='playagain' style='display:inline-block;' href='#'>" + "YES" + "</a>" + " | " + "<a class='discontinue' href='goodbye.html'>" + "NO" + "</a>" + "</h2>");
		}

		else if(hotOrcold >= 51 && hotOrcold <=60) {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "Brrrrrrrrr!" + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-brrr.png' width='50px' alt='hot'></div>");

		}

		else if(hotOrcold >= 41 && hotOrcold <=50) {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "Cold!" + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-cold.png' width='50px' alt='hot'></div>");
		}

		else if(hotOrcold >= 31 && hotOrcold <=40) {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "Kinda chilly." + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-chilly.png' width='50px' alt='hot'></div>");

		}

		else if(hotOrcold >= 26 && hotOrcold <=30) {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "Meh. Lukewarm." + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-lukewarm.png' width='50px' alt='hot'></div>");

		}

		else if(hotOrcold >= 21 && hotOrcold <=25) {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "Warm!" + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-warm.png' width='50px' alt='hot'></div>");

		}

		else if(hotOrcold >= 11 && hotOrcold <=20) {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "Warmer!" + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-warmer.png' width='50px' alt='hot'></div>");

		}

		else if(hotOrcold >= 6 && hotOrcold <=10) {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "Smokin!" + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-smokin.png' width='50px' alt='hot'></div>");

		}

		else if(hotOrcold >= 1 && hotOrcold <=5) {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "On FIRE!" + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-fire.png' width='50px' alt='hot'></div>");

		}

		else {
			$("#hot-cold-scale").replaceWith("<div id='hot-cold-scale'><h2>" + "Freezing!" + "</h2></div>");
			$("#thermometer").replaceWith("<div id='thermometer'><img src='graphthermometer-freezing.png' width='50px' alt='hot'></div>");

		}
	};

	var guessCount = 0;
	var countTotal = function(){
  		guessCount += 1;
   		$('#count').replaceWith("<span id='count'>" + guessCount + "</span>");
  	};

	$("#guessButton").on("click", function(){
	event.preventDefault();
		var guessNumber = $("#userGuess").val();
			if(guessNumber >=1 && guessNumber <=100 && guessNumber % 1 === 0 ) {
				$("#guessList").prepend("<li>" + guessNumber + "</li>");
				runGame();
				countTotal();
			} else {
			alert("Not a valid number, try again!")
			}
			$("#userGuess").val(" ");
		
	}); 


	$(".new").on("click", function() {

		$("#guessList").empty();
		secretNumber();
		var guessCount = 0;
		$("#hot-cold-scale").replaceWith("<h2 id='feedback'>" + "New game! Make your guess, " + userName + "!" + "</h2>");
		$('#count').replaceWith("<span id='count'>" + 0 + "</span>");

	});

	$(".playagain").on("click", function() {

		$("#guessList").empty();
		secretNumber();
		var guessCount = 0;
		$("#hot-cold-scale").replaceWith("<h2 id='feedback'>" + "New game! Make your guess, " + userName + "!" + "</h2>");
		$('#count').replaceWith("<span id='count'>" + 0 + "</span>");

	}) ;	




	/*--- Display information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});