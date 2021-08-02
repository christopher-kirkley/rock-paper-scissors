var score = {
    'player' : 0,
    'computer' : 0,
    'tie': 0
}

let choices = ['ROCK', 'PAPER', 'SCISSORS'];

const toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


const computerPlay = () => {
	return choices[(Math.floor(Math.random() * 3))];
}


const renderResults = (str) => {
    console.log(str);
}


const playRound = (playerSelection, computerSelection) => {
	var playerSelection = playerSelection.toUpperCase();
	var computerSelection = computerSelection.toUpperCase();

    // if tie
	if (playerSelection == computerSelection) {
		renderResults(`You tie! ${toTitleCase(playerSelection)} is the same as ${toTitleCase(computerSelection)}`)
        score['tie'] ++
	}

    // if computer wins
	if (
        (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') ||
        (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') ||
        (computerSelection == 'PAPER' && playerSelection == 'ROCK'))
    {
		renderResults(`You lose! ${toTitleCase(computerSelection)} beats ${toTitleCase(playerSelection)}`)
        score['computer'] ++
    }   

    // if player wins
    if (
        (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK'))
    {
		renderResults(`You win! ${toTitleCase(playerSelection)} beats ${toTitleCase(computerSelection)}`)
        score['player'] ++
    }   
}


const game = () => {
	var playerSelection = '';

	while (!choices.includes(playerSelection)) {
		var playerSelection = prompt("What's your choice?");
        if (!playerSelection) {
            console.log('Type something for the love of god!');
        } else {
            playerSelection = playerSelection.toUpperCase();
        }
	}

    for (let i = 0; i < 5; i++) {
        var res = playRound(playerSelection, computerPlay());
    }
    console.log(score);
}

game();
