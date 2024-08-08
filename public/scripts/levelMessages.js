const levelMessages = {
    1: [
        "Welcome to Level 1: The Entry Gate",
        "Your first task is to decrypt a simple message using a Pigpen cipher.",
        "Type 'help' for available commands or 'start' to begin the challenge."
    ],
    2: [
        "Level 2: The Firewall",
        "You've made it past the first challenge, but now face a more complex security system.",
        "This level requires you to disable a firewall by solving a series of substitution ciphers.",
        "Type 'help' for available commands or 'start' to begin the challenge."
    ],
    3: [
        "Level 3: The Data Vault",
        "You've reached a high-security data vault.",
        "To proceed, you must crack a Vigenère cipher and retrieve the access code.",
        "Type 'help' for available commands or 'start' to begin the challenge."
    ],
    4: [
        "Level 4: The Malware Maze",
        "You now tracked the attacker IP address.",
        "Scan the attacker IP address and find out the vulnerable network ports.",
        "Type 'help' for available commands."
    ],
    5: [
        "Final Level: The Quantum Quandary",
        "You've reached the core of the AI Security System.",
        "Your final challenge involves quantum cryptography and Shor's algorithm.",
        "Type 'help' for available commands or 'start' to begin the final challenge."
    ]
};

function getLevelMessages(level) {
    return levelMessages[level] || ["Invalid level. Please try again."];
}