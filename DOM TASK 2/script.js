// Slect elements
const rollBtn = document.getElementById('rollBtn')
const diceContainer = document.querySelector('.dice-container')

const scoreP1 = document.getElementById('scoreA')
const scoreP2 = document.getElementById('scoreB')

const player1 = document.getElementById('playerA')
const player2 = document.getElementById('playerB')


// game logic 

let scoreA = 0;
let scoreB = 0;
let currentPlayer = 'A';  // beacuse player A starts first


// one dice image cretae ki 
const diceImg = document.createElement('img');
diceContainer.appendChild(diceImg);

// button click event
rollBtn.addEventListener('click', () => {
    const diceNumber = Math.ceil(Math.random() * 6);
    diceImg.src = `images/dice${diceNumber}.png`; 

    // update score
    if (currentPlayer === 'A') {
        scoreA += diceNumber;
        scoreP1.innerText = scoreA;

        // switch player
        currentPlayer = 'B';
        player1.classList.remove('active');
        player2.classList.add('active');
    } else {
        scoreB += diceNumber;
        scoreP2.innerText = scoreB;

        // switch player
        currentPlayer = 'A';
        player2.classList.remove('active');
        player1.classList.add('active');
    }

})

