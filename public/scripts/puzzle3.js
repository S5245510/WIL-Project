function loadPuzzleContent() {
    return `
        <h3>3Analyze Email Content to Identify Phishing Attempts</h3>
        <p>Examine the email content below and identify potential phishing indicators:</p>
        <div class="email-content">
            <h4>From: Banggood.com <newsletter@deals.banggood.com></h4>
            <h4>Subject: Best Price Ever>>Hottest Radiation Tester $37.99!</h4>
            <img src="path_to_uploaded_image/Screenshot 2024-08-08 062352.png" alt="Email Screenshot">
            <textarea id="phishing-analysis" placeholder="Enter your analysis here..."></textarea>
            <button onclick="submitAnalysis()">Submit</button>
        </div>
        <p id="feedback"></p>
        <p id="hint"></p>
    `;
}

// Function to check the user's analysis
function submitAnalysis() {
    const userAnalysis = document.getElementById('phishing-analysis').value.toLowerCase();
    const feedback = document.getElementById('feedback');
    const hint = document.getElementById('hint');

    const phishingIndicators = [
        "newsletter@deals.banggood.com",
        "Best Price Ever",
        "Hottest Radiation Tester $37.99",
        "Unsolicited email",
        "Suspicious links",
        "Urgency",
        "Grammar errors",
        "Personal information request"
    ];

    let correct = phishingIndicators.every(indicator => userAnalysis.includes(indicator.toLowerCase()));

    if (correct) {
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
        hint.textContent = `Hint: Look for signs of phishing such as suspicious sender email, urgency, and unusual links.`;
    }
}
