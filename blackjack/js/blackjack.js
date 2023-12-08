const dealerSum = document.getElementById('dealer-sum');
const dealerCards = document.getElementById('dealer-cards');

const playerSum = document.getElementById('player-sum');
const playerCards = document.getElementById('player-cards');

const hitBtn = document.getElementById('hit');
const stayBtn = document.getElementById('stay');

const modal = document.getElementById('modal');

window.onload = function() {
    startGame();
}

function startGame() {
    resetDeck();
    hit(dealerCards, dealerSum, false);
    hit(playerCards, playerSum, true);
    hit(dealerCards, dealerSum, true);
    hit(playerCards, playerSum, true);
}

function hit(hand, tracker, show) {
    let card = dealCard(deck, hand, show);
    trackScore(hand.children, tracker);
    return card;
}

function stay() {
    var playerSumInt = parseInt(playerSum.innerText);

    dealerCards.firstChild.classList.add('show');
    trackScore(dealerCards.children, dealerSum);
    
    while(parseInt(dealerSum.innerText) < 17){
        hit(dealerCards, dealerSum, true);
    }
    var dealerSumInt = parseInt(dealerSum.innerText);

    if(dealerSumInt > 21){ openModal('win') }
    else if(dealerSumInt > playerSumInt) { openModal('lose') }
    else if(dealerSumInt == playerSumInt) { openModal('tie') }
    else if(dealerSumInt < playerSumInt) { openModal('win') }
}

function trackScore(cards, tracker) {
    var score = 0;
    var aceCount = 0;

    for(i = 0; i < cards.length; i++) {
        if(cards[i].classList.contains('show')){
            if(cards[i].getAttribute('data-value') === 'A') aceCount++;
            score += getCardValue(cards[i]);
            if(score > 21 && aceCount > 0){
                score -= 10;
                aceCount--;
            }
        }
    }

    tracker.textContent = score
    if(tracker === playerSum){
        if(score > 21) {
            hitBtn.disabled = true;
            stayBtn.disabled = true;
            openModal('bust');
        } else if(score == 21){
            openModal('win');
        }
    }
}

function getCardValue(card) {
    let value = card.getAttribute('data-value');

    const valueAsNumber = parseInt(value);
    if(isNaN(valueAsNumber)){
        if(value === 'A')
            return 11;
        else
            return 10;
    } else {
        return valueAsNumber;
    }
}

function openModal(outcome){
    modal.classList.toggle('hidden');
    var results = document.getElementById('results');
    switch(outcome){
        case 'bust':
            results.append(createModalHeader('You Busted!'));
            break;
        case 'win':
            results.append(createModalHeader('You Win!'));
            break;
        case 'lose':
            results.append(createModalHeader('You Lost!'));
            break;
        case 'tie':
            results.append(createModalHeader('You Tied!'));
            break;
    }
    results.append(createScoreResult());
    results.append(createBtn('New Game', (e) => {
        var cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.remove();
        });

        dealerSum.textContent = '0';
        playerSum.textContent = '0';

        newDeck();

        var resultsContent = document.querySelectorAll('#results>*');
        resultsContent.forEach(child => {
            child.remove();
        });

        hitBtn.disabled = false;
        stayBtn.disabled = false;

        modal.classList.toggle('hidden');
        startGame();
    }));
}

function newGame() {
    
}

function createModalHeader(text) {
    var modalHeader = document.createElement('h3');
    modalHeader.classList.add('modelHeader');
    modalHeader.textContent = text;
    return modalHeader;
}

function createScoreResult() {
    var scoreResult = document.createElement('p');
    scoreResult.setAttribute('id', 'score-results');
    scoreResult.classList.add('score-results');

    scoreResult.append(createLabeledScore(true));
    scoreResult.append(createLabeledScore(false));

    return scoreResult;
}

function createLabeledScore(isPlayer){
    var labeledScore = document.createElement('span');
    labeledScore.classList.add('labeled-score');

    if(isPlayer){
        labeledScore.append(createLabel('Player: '));
        labeledScore.append(createScore(playerSum));
    } else { 
        labeledScore.append(createLabel('Dealer: '));
        labeledScore.append(createScore(dealerSum));
    }

    return labeledScore;
}

function createScore(tracker) {
    var score = document.createElement('span');
    score.classList.add('score');
    score.textContent = tracker.innerText;
    return score;
}

function createLabel(text) {
    var label = document.createElement('span');
    label.classList.add('label');
    label.textContent = text;
    return label;
}

function createBtn(text, onClick) {
    var btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', onClick);
    return btn;
}