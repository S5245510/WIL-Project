function loadPuzzleContent() {
    return `
        <h3>Solve the Substitution Cipher</h3>
        <p>Decrypt the following message encrypted with a substitution cipher:</p>
        <p id="cipher-text">Uifsf jt b tfdsfu nfttbhf</p>
        <input type="text" id="decrypted-message" placeholder="Enter decrypted message">
        <button onclick="checkAnswer()">Submit</button>
        <p id="feedback"></p>
        <p id="hint"></p>
        <h4>Substitution Cipher Key:</h4>
        <div id="symbol-legend"></div>
    `;
}

const substitutionCipher = {
    "A": "B", "B": "C", "C": "D", "D": "E", "E": "F", "F": "G", "G": "H",
    "H": "I", "I": "J", "J": "K", "K": "L", "L": "M", "M": "N", "N": "O",
    "O": "P", "P": "Q", "Q": "R", "R": "S", "S": "T", "T": "U", "U": "V",
    "V": "W", "W": "X", "X": "Y", "Y": "Z", "Z": "A"
};

// Encrypted Message
const encryptedMessage = "Uifsf jt b tfdsfu nfttbhf";  // Example message
const cipherText = encryptedMessage.split('').map(char => substitutionCipher[char] || char).join('');

// Display the encrypted message
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cipher-text').textContent = cipherText;
    const legendContainer = document.getElementById('symbol-legend');
    let legendHtml = '';
    const symbols = Object.entries(substitutionCipher);

    symbols.forEach(([letter, symbol]) => {
        legendHtml += `<div class="legend-item">${symbol} : ${letter}</div>`;
    });
    legendContainer.innerHTML = legendHtml;
});

// Function to check if the decrypted message is correct
function checkAnswer() {
    const userAnswer = document.getElementById('decrypted-message').value.toUpperCase();
    const feedback = document.getElementById('feedback');
    const hint = document.getElementById('hint');

    if (userAnswer === "THERE IS A SECRET MESSAGE") {
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
        hint.textContent = `Hint: The message starts with "THERE".`;
    }
}
