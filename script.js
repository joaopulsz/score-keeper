/*
    Refactor:
    - Use const when applicable
    - Improve variable names so they make more sense.
    - Create a function to determine the winner
    - Said function should accept p1 or p2 required arguments
*/

const appContainer = document.querySelector('#container');

//declaration of each player's score
const playerOneScore = document.querySelector('#one-score');
const playerTwoScore = document.querySelector('#two-score');

let points1 = 0; //playerOnePoints
let points2 = 0; //playerTwoPoints

playerOneScore.innerText = points1;
playerTwoScore.innerText = points2;

//variables that represent each players scoring buttons
const pointPlayerOne = document.querySelector('#one-btn');
const pointPlayerTwo = document.querySelector('#two-btn');

//variable that represents the match's max score
let finish = '';

let maxScore = document.querySelector('#max-points');
maxScore.addEventListener('change', function () {
    finish = parseInt(maxScore.value);
})


//event for increasing player 1 score count
pointPlayerOne.addEventListener('click', function () {
    if (finish !== '') {
        points1 += 1;
        playerOneScore.innerText = points1;
    }

    if (points1 === finish) {
        const victory1 = document.createElement('p');
        victory1.innerText = 'CONGRATULATIONS PLAYER 1!';
        appContainer.appendChild(victory1);

        pointPlayerOne.disabled = true;
        pointPlayerTwo.disabled = true;
    }
})

//event for increasing player 2 score count
pointPlayerTwo.addEventListener('click', function () {
    if (finish !== '') {
        points2 += 1;
        playerTwoScore.innerText = points2;
    }

    if (points2 === finish) {
        const victory2 = document.createElement('p');
        victory2.innerText = 'CONGRATULATIONS PLAYER 2!';
        appContainer.appendChild(victory2);

        pointPlayerOne.disabled = true;
        pointPlayerTwo.disabled = true;
    }
})



// on reset do the following
// enable buttons
// remove game winner message

const resetGameBtn = document.querySelector('#reset');
reset.addEventListener('click', function () {
    points1 = 0;
    points2 = 0;

    playerOneScore.innerText = points1;
    playerTwoScore.innerText = points2;

    maxScore.value = '';
    finish = '';

    pointPlayerOne.disabled = false;
    pointPlayerTwo.disabled = false;
});



