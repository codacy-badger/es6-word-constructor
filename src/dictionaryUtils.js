const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SEGMENTS = [...ALPHABET.split(''), 'other'];

/**
 * function that creates array of `Set`s for
 * alphabet to divide incomming words into sections.
 *
 * @returns {Object} Set[]
 */
exports.createInitialDictionary = function createInitialDictionary() {
  const result = {};
  for (let key in SEGMENTS) {
    result[key] = [];
  }
  console.log('😛 => ', SEGMENTS);
  return result;
};

/**
 *  Finds the key in dictionary segments for supplied word.
 *
 * @param {any} word
 * @returns {string}
 */
function selectDictionarySection(word) {
  const start = word[0].toUpperCase();
  return ALPHABET.indexOf(start) > -1 ? start : 'other';
}

/**
 *  Returns array of dictionry sections.
 *
 * @returns {string[]}
 */
exports.getDictionarySections = function getDictionarySections() {
  return SEGMENTS;
};

/**
 * adds words from provided data array to dictionary into respectful sections.
 *
 * @param {string[]} data incomping data array
 * @param {object} dictionary dictionary data structure
 */
exports.digestChunk = function digestChunk(data, dictionary) {
  data.forEach(word => {
    const section = selectDictionarySection(word);
    console.log('❤️');
    console.log(word);
    console.log(section);
    console.log(Object.keys(dictionary));
    dictionary[section].push(word.toLowerCase());
  });
};
