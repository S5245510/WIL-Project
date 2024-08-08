function loadPuzzleContent() {
    const pigpenCipher = {
        "A": "✪", "B": "✩", "C": "✮", "D": "✯", "E": "✵", "F": "✷", "G": "✻",
        "H": "✽", "I": "✼", "J": "✿", "K": "❀", "L": "❁", "M": "❃", "N": "❋",
        "O": "❈", "P": "❉", "Q": "❊", "R": "❋", "S": "✱", "T": "✲", "U": "✳",
        "V": "✴", "W": "✵", "X": "✶", "Y": "✷", "Z": "✸"
    };

    const encryptedMessage = "HELLO";
    const cipherText = encryptedMessage.split('').map(char => pigpenCipher[char] || char).join('');

    return `
        <div class="puzzle-wrapper">
            <h2 class="puzzle-title">Decode the Message</h2>
            <div class="cipher-text">${cipherText}</div>
            <div class="symbol-legend">
                <p>Here is the symbol reference:</p>
                <div class="legend-grid">
                    ${Object.entries(pigpenCipher).map(([letter, symbol], index) => `
                        <div class="legend-item" style="grid-column: span 1; grid-row: ${Math.floor(index / 9) + 1}">
                            ${symbol} : ${letter}
                        </div>
                    `).join('')}
                </div>

            </div>
            <input type="text" id="decrypted-message" placeholder="Enter decrypted message" class="puzzle-input">
            <button onclick="checkAnswer()" class="puzzle-button">Submit</button>
            <div id="feedback" class="puzzle-feedback"></div>
            <div id="hint" class="puzzle-hint"></div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    const puzzleContainer = document.getElementById('puzzle-container');
    puzzleContainer.innerHTML = loadPuzzleContent();
});

function checkAnswer() {
    const userAnswer = document.getElementById('decrypted-message').value.toUpperCase();
    const feedback = document.getElementById('feedback');
    const hint = document.getElementById('hint');

    if (userAnswer === "HELLO") {
        feedback.textContent = 'Correct! Well done.';
        feedback.style.color = 'green';
        hint.textContent = '';

        setTimeout(() => {
            window.location.href = 'cybersecurity_quiz.html';
        }, 2000);
    } else {
        feedback.textContent = 'Try again!';
        feedback.style.color = 'red';
        hint.textContent = `Hint: The message starts with "H".`;
    }
}
