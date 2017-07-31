var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#new-journal-entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Journal();
    var firstSentence = newEntry.getTeaser(body);
    var numberOfWords = newEntry.numberOfWords(body);
    var numberOfVowels = newEntry.getVowels(body);
    var numberOfConsonants = newEntry.getConsonants(body);
      $('#repost').append("<h2><li>" + title + "</li></h2>");
      $('#repost').append("<h3><li>" + firstSentence + "</li></h3>");
      $('#repost').append("<h4><li>" + body + "</li></h4>");
      $('#post').append("<li>Number of Words: " + numberOfWords + "</li>");
      $('#post').append("<li>Number of Vowels: " + numberOfVowels + "</li>");
      $('#post').append("<li>Number of Consonants: " + numberOfConsonants + "</li>");
  });
});
