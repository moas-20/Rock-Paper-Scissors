# Rock Paper Scissors Game 🎮

A simple, interactive **Rock, Paper, Scissors** game built with **JavaScript**. This project was developed to practice core programming concepts like functions, loops, conditionals, and user input handling.

## 🚀 Features
* **Human vs. Computer:** Play against an automated computer opponent.
* **Randomized AI:** The computer makes random choices using `Math.random()`.
* **Case-Insensitive Input:** The game accepts any case (e.g., "Rock", "ROCK", "rock").
* **Score Tracking:** Tracks the score over 5 rounds and announces the final winner in the console.

## 🛠️ Logic Breakdown
* **`getComputerChoice()`**: Uses a random number generator to pick between Rock, Paper, or Scissors.
* **`getHumanChoice()`**: Prompts the user for input and formats it to lowercase for consistency.
* **`playRound()`**: Compares selections and determines the winner of a single round.
* **`playGame()`**: Runs a `for loop` to play 5 rounds, updating the selections and score in each iteration.

## 🕹️ How to Play
1. Clone this repository to your local machine.
2. Open `index.html` in your web browser.
3. Open the **Browser Console** (Press `F12` or `Right-click > Inspect > Console`).
4. Follow the prompts on the screen and check the console for results!

## 🧠 Lessons Learned
During this project, I improved my understanding of:
* How to properly structure a `switch` statement in JavaScript.
* Managing variable updates inside a `for` loop to ensure new inputs are captured each round.
* Handling user input and converting it to a standard format (lowercase).