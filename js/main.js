alert('Let’s make a story together!');

var col = prompt('A colour (orange, indigo, etc.)');

var cre = prompt('A creature (dragon, moth, etc.)');

var adj = prompt('An adjective (beautiful, super, etc.)');

var verb = prompt('A past tense verb (ran, burped, etc.)');

var story = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning \n\n Enter the letter below:')

if (story == 'a') {
  document.write('After snacking on ' + adj + ' treats, the ' + col + ' bellied ' + cre + ' ' + verb + ' for hours.');
}
