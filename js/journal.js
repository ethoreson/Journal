function Journal() {
}

Journal.prototype.numberOfWords = function(entry) {
  return entry.split(' ').length;
}

Journal.prototype.getVowels = function(entry) {
  var count = entry.match(/[aeiou]/gi);
  return count === null ? 0 : count.length;
}

Journal.prototype.getConsonants = function(entry) {
  var entry = entry.replace(/\s+/g, '');
  var entry = entry.replace(/[^a-zA-Z]/gi, '')
  var countString = entry.split('').length;
  var count = (countString - this.getVowels(entry));
  return count;
}

exports.journalModule = Journal;
