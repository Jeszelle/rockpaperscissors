console.log("rock, paper, scissors") // om te checken als onze js in de console werkt

let playerPoints = 0; // user score begint op 0
let computerPoints = 0; // computer score begint 0
const playerPointsSpan = document.querySelector("#userscore"); // zoekt het element in de HTML met het id "userscore" en slaat het op in de variabele playerPointsSpan
const computerPointsSpan = document.querySelector("#computerscore"); // zoekt het element in de HTML met het id "computerscore" en slaat het op in de variabele computerPointsSpan
const scoreBoardDiv = document.querySelector(".scoreboard"); // zoekt het element in de HTML met de class "scoreboard" en slaat het op in de variabele scoreBoardDiv
const resultP = document.querySelector(".result > p"); // zoekt het eerste p-element binnen het element met de class "result" en slaat het op in de variabele resultParagraph
const rockDiv = document.querySelector("#rock"); // zoekt het element in de HTML met het id "rock" en slaat het op in de variabele rockDiv
const paperDiv = document.querySelector("#paper"); // zoekt het element in de HTML met het id "paper" en slaat het op in de variabele paperDiv
const scissorsDiv = document.querySelector("#scissors"); // zoekt het element in de HTML met het id "scissors" en slaat het op in de variabele scissorsDiv
// ik heb ervoor gekozen om deze const allemaal samen te zetten zodat het overzichtelijk is en om makkelijk terug kijken

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
function getRandomNumber(max) { // functie om een willekeurig getal te krijgen
    return Math.floor(Math.random() * max); // willekeurig een getal tussen 0 en max-1
}

function getComputerChoice() { // functie om een willekeurige keuze voor de computer te krijgen
    const choices = ['rock', 'paper', 'scissors']; // een lijst met mogelijke keuzes voor de computer: 'rock', 'paper', 'scissors'
    const randomNumber = getRandomNumber(3); // krijgt een willekeurig getal tussen 0 en 2
    return choices[randomNumber]; // geeft de keuze van de computer terug op basis van het willekeurig gekozen getal
}

function toWord(choice){ // functie om een letter om te zetten naar het bijbehorende woord
    if (choice === "rock") return "Rock"; // als de keuze gelijk is aan "rock", return "Rock"
    if (choice === "paper") return "Paper"; // als de keuze gelijk is aan "paper", return "Paper"
    return "Scissors"; // als geen van bovenstaande voorwaarden waar is, return "Scissors"
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML 
function win(playerChoice, computerChoice) { // functie om de gebruiker te laten winnen en de score en de tekst bij te werken
    playerPoints++; // verhoogt de score met +1
    playerPointsSpan.innerHTML = playerPoints; // update de gebruikersscore in de HTML
    computerPointsSpan.innerHTML = computerPoints; // update de computerscore in de HTML
    resultP.innerHTML = toWord(playerChoice) + " beats " + toWord(computerChoice) + ". You win!"; // voegt het winnende bericht toe aan de resultaten array
}

function lose(playerChoice, computerChoice) { 
    computerPoints++; 
    playerPointsSpan.innerHTML = playerPoints; // update de gebruikersscore in de HTML
    computerPointsSpan.innerHTML = computerPoints; // update de computerscore in de HTML
    resultP.innerHTML = toWord(playerChoice) + " loses to " + toWord(computerChoice) + ". You lost..."; // voegt het verliezende bericht toe aan de resultaten array
}

function draw(playerChoice, computerChoice) { 
    playerPointsSpan.innerHTML = playerPoints; // update de gebruikersscore in de HTML
    computerPointsSpan.innerHTML = computerPoints; // update de computerscore in de HTML
    resultP.innerHTML = toWord(playerChoice) + " is equal to " + toWord(computerChoice) + ". It's a draw."; // voegt het gelijkspel bericht toe aan de resultaten array
}

// https://www.youtube.com/watch?v=PkZNo7MFNFg hier legt de meneer de switch statement uit, dit heb ik gevolgd
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch 
function playGame(playerChoice){ // functie om het spel te spelen op basis van de keuze van de gebruiker
    const computerChoice = getComputerChoice(); // krijgt de keuze van de computer
    switch (playerChoice + computerChoice){ // combineert de keuzes van de gebruiker en de computer voor vergelijking
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            // gebruiker wint met deze combinaties
            win(playerChoice, computerChoice); // roept win functie aan met de keuzes van gebruiker en computer
            break; // stopt de switch statement zodat het niet door loopt naar de volgende case
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(playerChoice, computerChoice); 
            break; 
        default:
            draw(playerChoice, computerChoice); // bij gelijkspel is het een default en wint niemand
            break;
    }
}

function initialize() {
    rockDiv.addEventListener('click', function() {
    playGame("rock"); // speelt het spel wanneer op rock wordt geklikt

    })

    paperDiv.addEventListener('click', function() {
    playGame("paper"); // speelt het spel wanneer op paper wordt geklikt
    })

    scissorsDiv.addEventListener('click', function() { 
    playGame("scissors"); // speelt het spel wanneer op scissors wordt geklikt
    })
}


initialize(); // roept de initialize functie aan om het spel te starten