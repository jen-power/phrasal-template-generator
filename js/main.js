alert('Let’s make a story together!');

var col = prompt('A colour (orange, indigo, etc.)');

var cre = prompt('A creature (dragon, moth, etc.)');

var adj = prompt('An adjective (beautiful, super, etc.)');

var verb = prompt('A past tense verb (ran, burped, etc.)');

var story = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning \n\n Enter the letter below:')

if (story == 'a' || 'A') {
  document.write('After snacking on ' + adj + ' treats, the ' + col + ' bellied ' + cre + ' ' + verb + ' for hours.');
}

if (story == 'b' || 'B') {
  document.write('Amelia ' + verb + ' through the ' + adj + ' ' + col + ' nebula escaping the space ' + cre + '.');
}

if (story == 'c' || 'C') {
  document.write('Jackson chose his ' + adj + ', ' + col + ' ' + cre + ' card and ' + verb + ' it to the table knowing he won.');
}
