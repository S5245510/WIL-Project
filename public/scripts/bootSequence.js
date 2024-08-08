function startBootSequence() {
    clearTerminal();

    const messages = [
        'Initializing Griffith University Network...',
        'Welcome XXXXX',
        'Here is the Cyber Security Bootcamp',
        'WARNING: Unauthorized access detected!',
        'WARNING: Unauthorized access detected!',
        'WARNING: Unauthorized access detected!',
        'Malware installing',
        'WARNING: Functions restricted',
        'WARNING: System locked!',
        'AI Security System activated. Prove your skills to escape!'
    ];

    let delay = 0;
    messages.forEach((msg, index) => {
        setTimeout(() => addToTerminal(msg), delay);
        delay += (index < 3 ? 2000 : 1000);
    });
}