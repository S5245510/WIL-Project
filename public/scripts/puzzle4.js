function loadPuzzleContent() {
    const leftContainer = document.querySelector('.left-container');
    leftContainer.innerHTML = `
        <h2>Target System</h2>
        <p>IP: 76.72.149.148</p>
        <div id="ports-display">
            <p>Scan system to reveal open ports</p>
        </div>
    `;

    return `
        <h3>Hacking Challenge</h3>
        <p>Your task: Identify vulnerabilities and gain system access.</p>
        <p>Use 'scan.exe' to check for open ports.</p>
        <div id="terminal-output"></div>
        <input type="text" id="terminal-input" class="terminal-input" autofocus>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = terminalInput.value.trim();
            terminalInput.value = '';
            processCommand(command);
        }
    });

    function addToTerminal(text) {
        terminalOutput.innerHTML += `<p>${text}</p>`;
    }

    function processCommand(command) {
        if (command.toLowerCase() === 'scan.exe') {
            performScan();
        } else if (command.toLowerCase() === 'invadetool.exe') {
            attemptInvasion();
        } else {
            addToTerminal('Unknown command. Try "scan.exe" or "invadetool.exe".');
        }
    }

    function performScan() {
        addToTerminal('Scanning target system...');
        setTimeout(() => {
            const portsDisplay = document.getElementById('ports-display');
            portsDisplay.innerHTML = `
                <p>Open ports:</p>
                <ul>
                    <li>Port 80 - HTTP WebServer</li>
                    <li>Port 25 - SMTP MailServer</li>
                    <li>Port 21 - FTP Server (Outdated version detected)</li>
                    <li>Port 22 - SSH</li>
                </ul>
                <p>Vulnerability detected on Port 21. Use "invadetool.exe" to exploit.</p>
            `;
            addToTerminal('Scan complete. Vulnerability detected on Port 21.');
        }, 2000);
    }

    function attemptInvasion() {
        addToTerminal('Attempting to exploit vulnerability on Port 21...');
        setTimeout(() => {
            addToTerminal('Access gained! You now control the target system.');
            // Update left container to show "hacked" status
            const leftContainer = document.querySelector('.left-container');
            leftContainer.innerHTML += '<p style="color: red;">System Compromised</p>';
        }, 3000);
    }
});