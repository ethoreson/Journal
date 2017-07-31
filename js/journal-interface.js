var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#new-journal-entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Journal();
    var numberOfWords = newEntry.numberOfWords(body);
    var numberOfVowels = newEntry.getVowels(body);
    var numberOfConsonants = newEntry.getConsonants(body);
      $('#post').append("<li>Number of Words: " + numberOfWords + "</li>");
      $('#post').append("<li>Number of Vowels: " + numberOfVowels + "</li>");
      $('#post').append("<li>Number of Consonants: " + numberOfConsonants + "</li>");
  });
});
