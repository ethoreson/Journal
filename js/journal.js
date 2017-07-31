function Journal() {
}

Journal.prototype.numberOfWords(entry) {
  return entry.split(' ').length;
}

Journal.prototype.getVowels(entry) {
  var count = entry.match(/[aeiou]/gi);
  return count === null ? 0 : count.length;
}

Journal.prototype.getConsonants(entry) {
  var entry = entry.replace(/\s+/g, '');
  var countString = entry.split('').length;
  var count = (countString - getVowels(entry));
  return count;
}

exports.journalModule = Journal;
