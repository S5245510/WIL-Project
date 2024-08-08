function showDetails(section) {
    console.log(`Loading details for: ${section}`);
    const details = document.getElementById('details');
    let script = document.createElement('script');
    
    switch(section) {
        case 'home':
            script.src = 'content/loadN1.js';
            break;
        case 'log':
            script.src = 'content/loadN2.js';
            break;
        case 'bin':
            script.src = 'content/loadN3.js';
            break;
        case 'sys':
            script.src = 'content/loadN4.js';
            break;
        default:
            console.error("Unknown section:", section);
            return;
    }

    script.onload = function() {
        console.log(`Content script for ${section} loaded`);
        switch(section) {
            case 'home':
                details.innerHTML = loadN1Content();
                break;
            case 'log':
                details.innerHTML = loadN2Content();
                break;
            case 'bin':
                details.innerHTML = loadN3Content();
                break;
            case 'sys':
                details.innerHTML = loadN4Content();
                break;
            default:
                console.error("Unknown section after loading:", section);
        }
    };

    script.onerror = function() {
        console.error(`Failed to load script for ${section}: ${script.src}`);
    };

    document.body.appendChild(script);
}

function loadPuzzle(level) {
    const puzzleContainer = document.getElementById('puzzle-container');
    puzzleContainer.innerHTML = '';

    const existingScript = document.getElementById('puzzle-script');
    if (existingScript) {
        existingScript.remove();
    }

    let script = document.createElement('script');
    script.id = 'puzzle-script';
    script.src = `scripts/puzzle${level}.js`;

    script.onload = function() {
        console.log(`Puzzle script for level ${level} loaded`);
        if (typeof loadPuzzleContent === 'function') {
            puzzleContainer.innerHTML = loadPuzzleContent();
        } else {
            console.error(`loadPuzzleContent is not defined for level ${level}`);
        }
    };

    script.onerror = function() {
        console.error(`Failed to load puzzle script for level ${level}: ${script.src}`);
    };

    document.body.appendChild(script);
}

function showBlocksByLevel(level) {
    const home = document.getElementById('home');
    const log = document.getElementById('log');
    const bin = document.getElementById('bin');
    const sys = document.getElementById('sys');
    home.style.display = 'none';
    log.style.display = 'none';
    bin.style.display = 'none';
    sys.style.display = 'none';

    if (level >= 1) home.style.display = 'block';
    if (level >= 2) log.style.display = 'block';
    if (level >= 3) bin.style.display = 'block';
    if (level >= 4) sys.style.display = 'block';
}