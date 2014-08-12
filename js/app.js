$(document).ready(function(){

	var userName = prompt("Please enter your FIRST NAME.");
	console.log(userName);



function greeting () {

	if (userName != null) {
	$("#hot-cold-scale h2").text("Hi, " + userName + "! Make your guess below.");
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
			$("#hot-cold-scale").hide();
			$("#win-message").addClass('show');
		}

		else if(hotOrcold >= 51 && hotOrcold <=60) {
			$("#hot-cold-scale h2").text("Brrrrrrrrr!");
			$(".thermometer").attr('src', 'graphthermometer-brrr.png');

		}

		else if(hotOrcold >= 41 && hotOrcold <=50) {
			$("#hot-cold-scale h2").text("Cold!");
			$(".thermometer").attr('src', 'graphthermometer-cold.png');
		}

		else if(hotOrcold >= 31 && hotOrcold <=40) {
			$("#hot-cold-scale h2").text("Kinda chilly.");
			$(".thermometer").attr('src', 'graphthermometer-chilly.png');

		}

		else if(hotOrcold >= 26 && hotOrcold <=30) {
			$("#hot-cold-scale h2").text("Meh. Lukewarm.");
			$(".thermometer").attr('src', 'graphthermometer-lukewarm.png');

		}

		else if(hotOrcold >= 21 && hotOrcold <=25) {
			$("#hot-cold-scale h2").text("Warm!");
			$(".thermometer").attr('src', 'graphthermometer-warm.png');

		}

		else if(hotOrcold >= 11 && hotOrcold <=20) {
			$("#hot-cold-scale h2").text("Warmer!");
			$(".thermometer").attr('src', 'graphthermometer-warmer.png');

		}

		else if(hotOrcold >= 6 && hotOrcold <=10) {
			$("#hot-cold-scale h2").text("Smokin!");
			$(".thermometer").attr('src', 'graphthermometer-smokin.png');

		}

		else if(hotOrcold >= 1 && hotOrcold <=5) {
			$("#hot-cold-scale h2").text("On FIRE!");
			$(".thermometer").attr('src', 'graphthermometer-fire.png');

		}

		else {
			$("#hot-cold-scale h2").text("Freezing!");
			$(".thermometer").attr('src', 'graphthermometer-freezing.png');

		}
	};

	var guessCount = 0;
	var countTotal = function(){
  		guessCount += 1;
   		$('#count').text(guessCount);
  	};

	$("#guessButton").on("click", function(event){
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
		$("#hot-cold-scale").show();
		$("#win-message").removeClass('show');		
		$("#hot-cold-scale h2").text("New game! Make your guess, " + userName + "!");
		$(".thermometer").attr('src', 'graphthermometer.png');

		$('#count').text(guessCount);
		$('#userGuess').focus();


	});

	$("#win-message").on("click", ".playagain", function(event) {
			event.preventDefault();

		$("#guessList").empty();
		secretNumber();
		var guessCount = 0;
		$("#hot-cold-scale").show();
		$("#win-message").removeClass('show');						
		$("#hot-cold-scale h2").text("New game! Make your guess, " + userName + "!");
		$(".thermometer").attr('src', 'graphthermometer.png');
		$('#userGuess').focus();

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