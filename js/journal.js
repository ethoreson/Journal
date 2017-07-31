function Journal() {
}

Journal.prototype.numberOfWords = function(entry) {
  return entry.split(' ').length;
};

Journal.prototype.getVowels = function(entry) {
  var count = entry.match(/[aeiou]/gi);
  return count === null ? 0 : count.length;
};

Journal.prototype.getConsonants = function(entry) {
  var entryone = entry.replace(/\s+/g, '');
  var entrytwo = entryone.replace(/[^a-zA-Z]/gi, '');
  var countString = entrytwo.split('').length;
  var count = (countString - this.getVowels(entry));
  return count;
};

Journal.prototype.getTeaser = function(entry) {
  var firstSentence = entry.match((.*?)\.);
  return firstSentence;
}

exports.journalModule = Journal;
