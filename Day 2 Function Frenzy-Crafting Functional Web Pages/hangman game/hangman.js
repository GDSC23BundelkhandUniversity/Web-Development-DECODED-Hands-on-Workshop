const words = [
    "HTML",
    "CSS",
    "JavaScript",
    "Function",
    "Variable",
    "DOM",
    "API",
    "Framework",
    "Responsive",
    "Bootstrap",
    "Frontend",
    "Backend",
    "Database",
    "AJAX",
    "JSON",
    "Event",
    "Callback",
    "Debugging",
    "Git",
    "Repository",
    "Branch",
    "Merge",
    "PullRequest",
    "MergeConflict",
    "React",
    "Component",
    "State",
    "Props",
    "JSX",
    "VirtualDOM"
];

// const words = [
//     "Algorithm",
//     "Variable",
//     "Loop",
//     "Function",
//     "Debugging",
//     "Compiler",
//     "Syntax",
//     "Class",
//     "Object",
//     "Inheritance",
//     "Encapsulation",
//     "Polymorphism",
//     "Recursion",
//     "Boolean",
//     "Array",
//     "String",
//     "Integer",
//     "Float",
//     "Exception",
//     "Namespace",
//     "Framework",
//     "Library",
//     "Lambda",
//     "Tuple",
//     "API",
//     "Git",
//     "GitHub",
//     "Commit",
//     "Dependency",
//     "CodeReview"
// ];

// Rest of your Hangman game code remains the same...


let selectedWord = "";
let guessedWord = [];
let incorrectLetters = [];
let hangmanTries = 6;

const wordDisplay = document.getElementById("word-display");
const incorrectLettersDisplay = document.getElementById("incorrect-letters");
const messageDisplay = document.getElementById("message");
const newGameBtn = document.getElementById("new-game-btn");
const hangmanDrawing = document.getElementById("hangman-drawing");

newGameBtn.addEventListener("click", startNewGame);

function startNewGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    guessedWord = Array(selectedWord.length).fill("_");
    incorrectLetters = [];
    hangmanTries = 6;
    updateDisplay();

    hangmanDrawing.style.backgroundPositionY = "0px";

    messageDisplay.textContent = "";
}

function updateDisplay() {
    wordDisplay.textContent = guessedWord.join(" ");
    incorrectLettersDisplay.textContent = "Incorrect Letters: " + incorrectLetters.join(", ");

    if (guessedWord.join("") === selectedWord) {
        messageDisplay.textContent = "Congratulations! You guessed the word!";
    } else if (hangmanTries === 0) {
        messageDisplay.textContent = "Sorry, you ran out of tries. The word was: " + selectedWord;
    }
}

document.addEventListener("keydown", function(event) {
    if (hangmanTries > 0 && messageDisplay.textContent === "") {
        const guess = event.key.toUpperCase();

        if (/^[A-Z]$/.test(guess) && !guessedWord.includes(guess) && !incorrectLetters.includes(guess)) {
            if (selectedWord.includes(guess)) {
                for (let i = 0; i < selectedWord.length; i++) {
                    if (selectedWord[i] === guess) {
                        guessedWord[i] = guess;
                    }
                }
            } else {
                incorrectLetters.push(guess);
                hangmanTries--;

                // Update hangman drawing position
                hangmanDrawing.style.backgroundPositionY = `${-(6 - hangmanTries) * 200}px`;
            }

            updateDisplay();
        }
    }
});

startNewGame();
