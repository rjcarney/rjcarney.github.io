const suits = ['heart', 'diamond', 'spade', 'club'];
const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var deck = newDeck();

function newDeck() {
    return shuffleDeck(buildDeck(suits, values));
}

function resetDeck() {
    deck = newDeck();
}

function dealCard(deck, location, show) {
    var card = deck.pop();
    location.append(createCard(card.suit, card.value, show));
    return card;
}

function buildDeck(suits, values) {
    let deck = []

    suits.forEach(suit => {
        values.forEach(value => {
            deck.push({ suit: suit, value: value });
        });
    });

    return deck;
}

function shuffleDeck(deck){
    for(let i = 0; i < deck.length; i++){
        let swapped = Math.floor(Math.random() * deck.length);
        var temp = deck[i];
        deck[i] = deck[swapped];
        deck[swapped] = temp;
    }
     return deck;
}

function createCard(suit, value, show) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', suit + value);
    card.setAttribute('data-suit', suit);
    card.setAttribute('data-value', value);

    card.append(createFront(value));
    card.append(createBack());

    if(show) card.classList.add('show');

    return card;
}

function createFront(value) {
    var front = document.createElement('div');
    front.classList.add('front');

    front.append(createPipGrid(value));

    front.append(createCornerNumber('top', value));
    front.append(createCornerNumber('bottom', value));
    return front;
}

function createPipGrid(value){
    var pipGrid = document.createElement('div');
    pipGrid.classList.add('pip-grid');

    const valueAsNumber = parseInt(value);
    if(isNaN(valueAsNumber)){
        pipGrid.append(createPip());
    } else {
        for(let i = 0; i < valueAsNumber; i++){
            pipGrid.append(createPip());
        }
    }

    return pipGrid
}

function createPip(){
    var pip = document.createElement('div');
    pip.classList.add('pip');
    return pip;
}

function createCornerNumber(position, value){
    var corner = document.createElement('div');
    corner.classList.add('corner-number');
    corner.textContent = value;
    corner.classList.add(position);
    return corner;
}

function createBack(){
    var back = document.createElement('div');
    back.classList.add('back');
    return back;
}
