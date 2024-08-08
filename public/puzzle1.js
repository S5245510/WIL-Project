

// Encrypted Message
const encryptedMessage = "HELLO";  // Example message
const cipherText = encryptedMessage.split('').map(char => pigpenCipher[char] || char).join('');

// Function to load the puzzle into the puzzle container
function loadPuzzleContent() {
    // Pigpen Cipher Mapping (with clear and distinct symbols)
const pigpenCipher = {
    "A": "✪", "B": "✩", "C": "✮", "D": "✯", "E": "✵", "F": "✷", "G": "✻",
    "H": "✽", "I": "✼", "J": "✿", "K": "❀", "L": "❁", "M": "❃", "N": "❋",
    "O": "❈", "P": "❉", "Q": "❊", "R": "❋", "S": "✱", "T": "✲", "U": "✳",
    "V": "✴", "W": "✵", "X": "✶", "Y": "✷", "Z": "✸"
};
    return `
        <div>
            <h2>Pigpen Cipher Puzzle</h2>
            <div id="cipher-text">${cipherText}</div>
            <div id="symbol-legend"></div>
            <input type="text" id="decrypted-message" placeholder="Enter decrypted message">
            <button onclick="checkAnswer()">Submit</button>
            <div id="feedback"></div>
            <div id="hint"></div>
        </div>
        <style>
            #cipher-text {
                font-size: 24px;
                margin-bottom: 20px;
            }
            #symbol-legend {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 20px;
            }
            .legend-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
            .legend-item {
                display: flex;
                align-items: center;
                margin-right: 20px;
            }
            .legend-item span {
                margin-left: 5px;
            }
        </style>
    `;
}

// Function to initialize the puzzle after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    const puzzleContainer = document.getElementById('puzzle-container');
    puzzleContainer.innerHTML = loadPuzzleContent();

    // Populate the symbol legend in three horizontal rows
    const legendContainer = document.getElementById('symbol-legend');
    let legendHtml = '';
    const symbols = Object.entries(pigpenCipher);
    const rows = 3; // Number of rows
    const symbolsPerRow = Math.ceil(symbols.length / rows); // Calculate symbols per row

    for (let row = 0; row < rows; row++) {
        legendHtml += '<div class="legend-row">';
        for (let col = row * symbolsPerRow; col < (row + 1) * symbolsPerRow && col < symbols.length; col++) {
            const [letter, symbol] = symbols[col];
            legendHtml += `<div class="legend-item">${symbol} : ${letter}</div>`;
        }
        legendHtml += '</div>';
    }
    legendContainer.innerHTML = legendHtml;
});

// Function to check if the decrypted message is correct
function checkAnswer() {
    const userAnswer = document.getElementById('decrypted-message').value.toUpperCase();
    const feedback = document.getElementById('feedback');
    const hint = document.getElementById('hint');

    if (userAnswer === encryptedMessage) {
        feedback.textContent = 'Correct! Well done.';
        feedback.style.color = 'green';
        hint.textContent = ''; // Clear hint if answer is correct

        // Redirect to the new quiz page after 2 seconds
        setTimeout(() => {
            window.location.href = 'cybersecurity_quiz.html'; // Ensure this file exists and the path is correct
        }, 2000);
    } else {
        feedback.textContent = 'Try again!';
        feedback.style.color = 'red';
        // Provide a hint (e.g., show the first letter of the decrypted message)
        hint.textContent = `Hint: The message starts with "${encryptedMessage.charAt(0)}".`;
    }
}
