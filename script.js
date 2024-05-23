function translateToBaybayin() {
    const filipinoText = document.getElementById('filipinoText').value;
    const baybayinText = translate(filipinoText);
    document.getElementById('baybayinText').textContent = baybayinText;
}

function translate(text) {
    const baybayinMap = {
        'a': 'ᜀ', 'e': 'ᜁ', 'i': 'ᜁ', 'o': 'ᜂ', 'u': 'ᜂ',
        'ka': 'ᜃ', 'ke': 'ᜃᜁ', 'ki': 'ᜃᜁ', 'ko': 'ᜃᜂ', 'ku': 'ᜃᜂ',
        'ga': 'ᜄ', 'ge': 'ᜄᜁ', 'gi': 'ᜄᜁ', 'go': 'ᜄᜂ', 'gu': 'ᜄᜂ',
        'nga': 'ᜅ', 'nge': 'ᜅᜁ', 'ngi': 'ᜅᜁ', 'ngo': 'ᜅᜂ', 'ngu': 'ᜅᜂ',
        'ta': 'ᜆ', 'te': 'ᜆᜁ', 'ti': 'ᜆᜁ', 'to': 'ᜆᜂ', 'tu': 'ᜆᜂ',
        'da': 'ᜇ', 'de': 'ᜇᜁ', 'di': 'ᜇᜁ', 'do': 'ᜇᜂ', 'du': 'ᜇᜂ',
        'ra': 'ᜇ', 're': 'ᜇᜁ', 'ri': 'ᜇᜁ', 'ro': 'ᜇᜂ', 'ru': 'ᜇᜂ',
        'na': 'ᜈ', 'ne': 'ᜈᜁ', 'ni': 'ᜈᜁ', 'no': 'ᜈᜂ', 'nu': 'ᜈᜂ',
        'pa': 'ᜉ', 'pe': 'ᜉᜁ', 'pi': 'ᜉᜁ', 'po': 'ᜉᜂ', 'pu': 'ᜉᜂ',
        'ba': 'ᜊ', 'be': 'ᜊᜁ', 'bi': 'ᜊᜁ', 'bo': 'ᜊᜂ', 'bu': 'ᜊᜂ',
        'ma': 'ᜋ', 'me': 'ᜋᜁ', 'mi': 'ᜋᜁ', 'mo': 'ᜋᜂ', 'mu': 'ᜋᜂ',
        'ya': 'ᜌ', 'ye': 'ᜌᜁ', 'yi': 'ᜌᜁ', 'yo': 'ᜌᜂ', 'yu': 'ᜌᜂ',
        'la': 'ᜎ', 'le': 'ᜎᜁ', 'li': 'ᜎᜁ', 'lo': 'ᜎᜂ', 'lu': 'ᜎᜂ',
        'wa': 'ᜏ', 'we': 'ᜏᜁ', 'wi': 'ᜏᜁ', 'wo': 'ᜏᜂ', 'wu': 'ᜏᜂ',
        'sa': 'ᜐ', 'se': 'ᜐᜁ', 'si': 'ᜐᜁ', 'so': 'ᜐᜂ', 'su': 'ᜐᜂ',
        'ha': 'ᜑ', 'he': 'ᜑᜁ', 'hi': 'ᜑᜁ', 'ho': 'ᜑᜂ', 'hu': 'ᜑᜂ',
        'k': 'ᜃ᜴', 'g': 'ᜄ᜴', 't': 'ᜆ᜴', 'd': 'ᜇ᜴', 'r': 'ᜇ᜴',
        'n': 'ᜈ᜴', 'p': 'ᜉ᜴', 'b': 'ᜊ᜴', 'm': 'ᜋ᜴', 'y': 'ᜌ᜴',
        'l': 'ᜎ᜴', 'w': 'ᜏ᜴', 's': 'ᜐ᜴', 'h': 'ᜑ᜴'
    };

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let translated = '';
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        let nextChar = text[i + 1] ? text[i + 1].toLowerCase() : '';
        
        if (vowels.includes(char) || (char + nextChar in baybayinMap)) {
            if (char + nextChar in baybayinMap) {
                translated += baybayinMap[char + nextChar];
                i++; // skip next character
            } else {
                translated += baybayinMap[char] || char;
            }
        } else {
            let combined = char + 'a'; // assume default vowel 'a'
            if (combined in baybayinMap) {
                translated += baybayinMap[combined];
            } else {
                translated += baybayinMap[char] || char;
            }
        }
    }
    return translated;
}

// Example usage
document.getElementById('translateButton').addEventListener('click', translateToBaybayin);
