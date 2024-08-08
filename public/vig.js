const plaintext = "ATTACKATDAWN";
const key = "LEMONLEMONLE";
let currentStep = 0;

function createVigenereSquare() {
    const square = document.querySelector('.vigenere-square');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Create header row
    square.appendChild(createCell(''));
    for (let letter of alphabet) {
        square.appendChild(createCell(letter));
    }

    // Create rows
    for (let i = 0; i < 26; i++) {
        square.appendChild(createCell(alphabet[i]));
        for (let j = 0; j < 26; j++) {
            square.appendChild(createCell(alphabet[(i + j) % 26]));
        }
    }
}

function createCell(content) {
    const cell = document.createElement('div');
    cell.textContent = content;
    return cell;
}

function highlightStep(step) {
    clearHighlights();
    if (step >= plaintext.length) return;

    const p = plaintext[step].charCodeAt(0) - 65;
    const k = key[step].charCodeAt(0) - 65;
    const c = (p + k) % 26;

    // Highlight row
    for (let i = 1; i <= 26; i++) {
        document.querySelector(`.vigenere-square div:nth-child(${27 * (k + 1) + i})`).classList.add('highlight');
    }

    // Highlight column
    for (let i = 0; i <= 26; i++) {
        document.querySelector(`.vigenere-square div:nth-child(${27 * i + p + 1})`).classList.add('highlight');
    }

    // Highlight intersection
    document.querySelector(`.vigenere-square div:nth-child(${27 * (k + 1) + p + 1})`).style.backgroundColor = 'orange';

    // Update ciphertext
    const ciphertext = document.getElementById('ciphertext');
    ciphertext.textContent = String.fromCharCode(65 + c) + ciphertext.textContent;
}

function clearHighlights() {
    document.querySelectorAll('.vigenere-square div').forEach(cell => {
        cell.classList.remove('highlight');
        cell.style.backgroundColor = '';
    });
}

document.getElementById('next').addEventListener('click', () => {
    if (currentStep < plaintext.length) {
        highlightStep(currentStep);
        currentStep++;
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        highlightStep(currentStep - 1);
        const ciphertext = document.getElementById('ciphertext');
        ciphertext.textContent = ciphertext.textContent.slice(1);
    }
});

document.getElementById('reset').addEventListener('click', () => {
    currentStep = 0;
    clearHighlights();
    document.getElementById('ciphertext').textContent = '';
});

createVigenereSquare();