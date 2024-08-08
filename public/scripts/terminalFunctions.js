let messageQueue = [];
let isTyping = false;

function addToTerminal(message, speed = 50) {
    messageQueue.push({ text: message, speed: speed });
    if (!isTyping) {
        typeNextMessage();
    }
}

function typeNextMessage() {
    if (messageQueue.length === 0) {
        isTyping = false;
        return;
    }

    isTyping = true;
    const { text, speed } = messageQueue.shift();
    const terminal = document.getElementById('terminal');
    const messageElement = document.createElement('div');
    terminal.appendChild(messageElement);

    let i = 0;
    function typeChar() {
        if (i < text.length) {
            messageElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        } else {
            terminal.scrollTop = terminal.scrollHeight;
            typeNextMessage();
        }
    }
    typeChar();
}

function clearTerminal() {
    const terminal = document.getElementById('terminal');
    terminal.innerHTML = '';
    messageQueue = [];
}