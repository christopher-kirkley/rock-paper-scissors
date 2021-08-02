var round = 0;

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
    results = document.querySelector('#results');
    results.innerText = `Round ${round + 1}: ${str}`;

    const playerValue = document.querySelector('#playerValue');
    const computerValue = document.querySelector('#computerValue');
    const tieValue = document.querySelector('#tieValue');

    playerValue.innerText = score['player'];
    computerValue.innerText = score['computer'];
    tieValue.innerText = score['tie'];

}

const renderWinner = () => {
    const playerTotal = score['player'];
    const computerTotal = score['computer'];

    winner = document.querySelector('#winner');

    if (playerTotal > computerTotal) {
        winner.innerText =  'You have defeated Skynet.';
    }

    else if (computerTotal > playerTotal) {
        winner.innerText =  'Machine wins. Dark days for humankind.';
    } else {
        winner.innerText =  'A TIE! Meet again on the fields of Vahalla.';
    }


}


const playRound = (playerSelection, computerSelection) => {
	var playerSelection = playerSelection.toUpperCase();
	var computerSelection = computerSelection.toUpperCase();

    if (round < 5) {

        // if tie
        if (playerSelection == computerSelection) {
            score['tie'] ++
            renderResults(`You tie! ${toTitleCase(playerSelection)} is the same as ${toTitleCase(computerSelection)}`)
        }

        // if computer wins
        if (
            (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') ||
            (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') ||
            (computerSelection == 'PAPER' && playerSelection == 'ROCK'))
        {
            score['computer'] ++
            renderResults(`You lose! ${toTitleCase(computerSelection)} beats ${toTitleCase(playerSelection)}`)
        }   

        // if player wins
        if (
            (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
            (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
            (playerSelection == 'PAPER' && computerSelection == 'ROCK'))
        {
            score['player'] ++
            renderResults(`You win! ${toTitleCase(playerSelection)} beats ${toTitleCase(computerSelection)}`)
        }   

        round ++;

    }

    if (round == 5) {
        renderWinner()
    }

}

const renderBoard = () => {
    // cache DOM
    const main = document.querySelector('#main');

    var div = document.createElement('div');
    div.classList.add('selection');
    const rockBtn = document.createElement('button');
    rockBtn.innerText = 'Rock';
    rockBtn.value = 'rock';
    div.appendChild(rockBtn);
    main.appendChild(div);

    var div = document.createElement('div');
    div.classList.add('selection');
    const paperBtn = document.createElement('button');
    paperBtn.innerText = 'Paper';
    paperBtn.value = 'paper';
    div.appendChild(paperBtn);
    main.appendChild(div);

    var div = document.createElement('div');
    div.classList.add('selection');
    const scissorsBtn = document.createElement('button');
    scissorsBtn.innerText = 'Scissors';
    scissorsBtn.value = 'scissors';
    div.appendChild(scissorsBtn);
    main.appendChild(div);

    var div = document.createElement('div');
    div.id = 'results';
    main.appendChild(div);

    var div = document.createElement('div');
    div.classList.add('selection');
    div.id = 'score';
    const playerScore = document.createElement('div')
    playerScore.id = 'playerScore';
    playerScore.append(document.createElement('p').innerHTML = 'Player: ')
    const playerValue = document.createElement('span');
    playerValue.id = 'playerValue';
    playerScore.append(playerValue);
    div.append(playerScore)

    const computerScore = document.createElement('div')
    computerScore.id = 'computerScore';
    computerScore.append(document.createElement('p').innerHTML = 'Computer: ');
    const computerValue = document.createElement('span');
    computerValue.id = 'computerValue';
    computerScore.append(computerValue);
    div.append(computerScore);

    const tieScore = document.createElement('div')
    tieScore.append(document.createElement('p').innerHTML = 'Tie: ')
    const tieValue = document.createElement('span');
    tieValue.id = 'tieValue';
    tieScore.append(tieValue);
    tieScore.id = 'tieScore';
    div.append(tieScore)
    main.appendChild(div);

    var div = document.createElement('div');
    div.id = 'winner';
    main.appendChild(div);

}

const game = () => {
	var playerSelection = '';

    renderBoard();

    const buttons = document.querySelectorAll('button');

    buttons.forEach((btn) => btn.addEventListener('click', (e) => playRound(e.currentTarget.value, computerPlay())))



}


game();



