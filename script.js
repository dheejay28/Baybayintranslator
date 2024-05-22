function translate() {
    const direction = document.getElementById('translationDirection').value;
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    if (direction === 'filipinoToBaybayin') {
        outputText = translateToBaybayin(inputText);
    } else if (direction === 'baybayinToFilipino') {
        outputText = translateToFilipino(inputText);
    }

    document.getElementById('outputText').textContent = outputText;
}

function translateToBaybayin(text) {
    const baybayinMap = {
        'a': 'ᜀ', 'b': 'ᜊ', 'k': 'ᜃ', 'd': 'ᜇ', 'e': 'ᜁ', 'g': 'ᜄ', 'h': 'ᜑ',
        'i': 'ᜂ', 'l': 'ᜎ', 'm': 'ᜋ', 'n': 'ᜈ', 'ng': 'ᜅ', 'o': 'ᜂ', 'p': 'ᜉ',
        'r': 'ᜇ', 's': 'ᜐ', 't': 'ᜆ', 'u': 'ᜂ', 'w': 'ᜏ', 'y': 'ᜌ'
    };

    let translated = '';
    for (let char of text.toLowerCase()) {
        translated += baybayinMap[char] || char;
    }
    return translated;
}

function translateToFilipino(text) {
    const filipinoMap = {
        'ᜀ': 'a', 'ᜊ': 'b', 'ᜃ': 'k', 'ᜇ': 'd', 'ᜁ': 'e', 'ᜄ': 'g', 'ᜑ': 'h',
        'ᜂ': 'i', 'ᜎ': 'l', 'ᜋ': 'm', 'ᜈ': 'n', 'ᜅ': 'ng', 'ᜉ': 'p',
        'ᜐ': 's', 'ᜆ': 't', 'ᜏ': 'w', 'ᜌ': 'y'
    };

    let translated = '';
    for (let char of text) {
        translated += filipinoMap[char] || char;
    }
    return translated;
}

function reverseDirection() {
    const directionSelect = document.getElementById('translationDirection');
    directionSelect.value = directionSelect.value === 'filipinoToBaybayin' ? 'baybayinToFilipino' : 'filipinoToBaybayin';
}
