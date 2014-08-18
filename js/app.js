$(document).ready(function(){

	var userName = prompt("Please enter your FIRST NAME.");
	console.log(userName);



	function secretNumber () {

			randomNumber = Math.floor(Math.random() * 99) + 1;
				console.log(randomNumber);
				return randomNumber;

	};

function resetGame () {
	if (userName != null) {		
		$("#guessList").empty();
		secretNumber();
		guessCount = 0;
		hotOrcold = null;
		guessNumber = null;
		$(".hint").show();
		$(".hint").text("");
		$("#hot-cold-scale").show();
		$("#hot-cold-scale h2").text("Hi, " + userName + "! Make your guess below.");
		$("#win-message").removeClass('show');		
		$(".thermometer").attr('src', 'graphthermometer.png');
		$("#guessButton").removeAttr('disabled', 'disabled')
		$('#userGuess').focus();
		$('#count').text(guessCount);
	}
	else {
		alert("You forgot to enter your name! Please enter your name."); 
		location.reload();		
	}

};
	resetGame();

  	function hint(a, b, c) {

  		var hintB = Math.abs(a-b);
  		var hintC = Math.abs(a-c);

  		if(hintC > hintB) {
  			$(".hint").text("Hotter than last guess");
  		} else if (hintB > hintC) {
  			$(".hint").text("Colder than last guess");
  		} else if (hintB === hintC){
  			$(".hint").text("Same as last guess");  			
  		} 

  	};




	function feedback(a) { 



		if(a === 0) {
			$("#hot-cold-scale").hide();
			$("#guessButton").attr('disabled', 'disabled')
			$("#win-message").addClass('show');
			$(".hint").hide();

		}

		else if(a >= 51 && a <=60) {
			$("#hot-cold-scale h2").text("Brrrrrrrrr!");
			$(".thermometer").attr('src', 'graphthermometer-brrr.png');

		}

		else if(a >= 41 && a <=50) {
			$("#hot-cold-scale h2").text("Cold!");
			$(".thermometer").attr('src', 'graphthermometer-cold.png');
		}

		else if(a >= 31 && a <=40) {
			$("#hot-cold-scale h2").text("Kinda chilly.");
			$(".thermometer").attr('src', 'graphthermometer-chilly.png');

		}

		else if(a >= 26 && a <=30) {
			$("#hot-cold-scale h2").text("Meh. Lukewarm.");
			$(".thermometer").attr('src', 'graphthermometer-lukewarm.png');

		}

		else if(a >= 21 && a <=25) {
			$("#hot-cold-scale h2").text("Warm!");
			$(".thermometer").attr('src', 'graphthermometer-warm.png');

		}

		else if(a >= 11 && a <=20) {
			$("#hot-cold-scale h2").text("Warmer!");
			$(".thermometer").attr('src', 'graphthermometer-warmer.png');

		}

		else if(a >= 6 && a <=10) {
			$("#hot-cold-scale h2").text("Smokin!");
			$(".thermometer").attr('src', 'graphthermometer-smokin.png');

		}

		else if(a >= 1 && a <=5) {
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
			console.log(guessNumber);	

		var compareHotOrcold = hotOrcold;
			console.log(compareHotOrcold);

	hotOrcold = (Math.abs(randomNumber - guessNumber));
			console.log(hotOrcold);


			if(guessNumber >=1 && guessNumber <=100 && guessNumber % 1 === 0 ) {
					if (guessCount < 1) {
						$("#guessList").prepend("<li>" + guessNumber + "</li>");
						feedback(hotOrcold);
						countTotal();
					}
					else {
						$("#guessList").prepend("<li>" + guessNumber + "</li>");
						hint(randomNumber, compareHotOrcold, hotOrcold);
						feedback(hotOrcold);
						countTotal();
					}


			} else {
			alert("Not a valid number, try again!")
			}
			$("#userGuess").val(" ");
		 
	}); 


function newGameMessage () {
	$("#hot-cold-scale h2").text("New game! Make your guess, " + userName + "!");

};


	$(".new").on("click", function() {
		resetGame();
		newGameMessage();

	});

	$("#win-message").on("click", ".playagain", function(event) {
		event.preventDefault();
		resetGame();
		newGameMessage();

	}) ;	




	/*--- Display information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").toggle("slide", {direction: "up"}, 400);

  	});

  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
    	$(".overlay").toggle("slide", {direction: "down"}, 400);
  	});

});