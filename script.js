function translateToBaybayin() {
    const filipinoText = document.getElementById('filipinoText').value;
    const baybayinText = translate(filipinoText);
    document.getElementById('baybayinText').textContent = baybayinText;
}

function translate(text) {
    const baybayinMap = {
        'a': 'ᜀ', 'e': 'ᜁ', 'i': 'ᜁ', 'o': 'ᜂ', 'u': 'ᜂ',
        'ka': 'ᜃ', 'ke': 'ᜃᜒ', 'ki': 'ᜃᜒ', 'ko': 'ᜃᜓ', 'ku': 'ᜃᜓ',
        'ga': 'ᜄ', 'ge': 'ᜄᜒ', 'gi': 'ᜄᜒ', 'go': 'ᜄᜓ', 'gu': 'ᜄᜓ',
        'nga': 'ᜅ', 'nge': 'ᜅᜒ', 'ngi': 'ᜅᜒ', 'ngo': 'ᜅᜓ', 'ngu': 'ᜅᜓ',
        'ta': 'ᜆ', 'te': 'ᜆᜒ', 'ti': 'ᜆᜒ', 'to': 'ᜆᜓ', 'tu': 'ᜆᜓ',
        'da': 'ᜇ', 'de': 'ᜇᜒ', 'di': 'ᜇᜒ', 'do': 'ᜇᜓ', 'du': 'ᜇᜓ',
        'ra': 'ᜇ', 're': 'ᜇᜒ', 'ri': 'ᜇᜒ', 'ro': 'ᜇᜓ', 'ru': 'ᜇᜓ',
        'na': 'ᜈ', 'ne': 'ᜈᜒ', 'ni': 'ᜈᜒ', 'no': 'ᜈᜓ', 'nu': 'ᜈᜓ',
        'pa': 'ᜉ', 'pe': 'ᜉᜒ', 'pi': 'ᜉᜒ', 'po': 'ᜉᜓ', 'pu': 'ᜉᜓ',
        'ba': 'ᜊ', 'be': 'ᜊᜒ', 'bi': 'ᜊᜒ', 'bo': 'ᜊᜓ', 'bu': 'ᜊᜓ',
        'ma': 'ᜋ', 'me': 'ᜋᜒ', 'mi': 'ᜋᜒ', 'mo': 'ᜋᜓ', 'mu': 'ᜋᜓ',
        'ya': 'ᜌ', 'ye': 'ᜌᜒ', 'yi': 'ᜌᜒ', 'yo': 'ᜌᜓ', 'yu': 'ᜌᜓ',
        'la': 'ᜎ', 'le': 'ᜎᜒ', 'li': 'ᜎᜒ', 'lo': 'ᜎᜓ', 'lu': 'ᜎᜓ',
        'wa': 'ᜏ', 'we': 'ᜏᜒ', 'wi': 'ᜏᜒ', 'wo': 'ᜏᜓ', 'wu': 'ᜏᜓ',
        'sa': 'ᜐ', 'se': 'ᜐᜒ', 'si': 'ᜐᜒ', 'so': 'ᜐᜓ', 'su': 'ᜐᜓ',
        'ha': 'ᜑ', 'he': 'ᜑᜒ', 'hi': 'ᜑᜒ', 'ho': 'ᜑᜓ', 'hu': 'ᜑᜓ',
        'k': 'ᜃ᜔', 'g': 'ᜄ᜔', 't': 'ᜆ᜔', 'd': 'ᜇ᜔', 'r': 'ᜇ᜔',
        'n': 'ᜈ᜔', 'p': 'ᜉ᜔', 'b': 'ᜊ᜔', 'm': 'ᜋ᜔', 'y': 'ᜌ᜔',
        'l': 'ᜎ᜔', 'w': 'ᜏ᜔', 's': 'ᜐ᜔', 'h': 'ᜑ᜔'
    };

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let translated = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        let nextChar = text[i + 1] ? text[i + 1].toLowerCase() : '';
        let nextNextChar = text[i + 2] ? text[i + 2].toLowerCase() : '';

        // Check for three-letter combinations first
        if (char + nextChar + nextNextChar in baybayinMap) {
            translated += baybayinMap[char + nextChar + nextNextChar];
            i += 2; // skip next two characters
        }
        // Check for two-letter combinations
        else if (char + nextChar in baybayinMap) {
            translated += baybayinMap[char + nextChar];
            i++; // skip next character
        }
        // Single character translation
        else {
            if (vowels.includes(char)) {
                translated += baybayinMap[char] || char;
            } else {
                let combined = char + 'a'; // assume default vowel 'a'
                translated += baybayinMap[combined] || char;

                // Check for final consonant (virama)
                if (nextChar && !vowels.includes(nextChar)) {
                    translated += '᜔'; // Add virama
                }
            }
        }
    }
    return translated;
}

// Example usage
document.getElementById('translateButton').addEventListener('click', translateToBaybayin);
