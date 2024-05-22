function translateToBaybayin() {
    const filipinoText = document.getElementById('filipinoText').value;
    const baybayinText = translate(filipinoText);
    document.getElementById('baybayinText').textContent = baybayinText;
}

function translate(text) {
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
