const pug = require('pug');

const prewrittenQueries = {
  'clear': '',
  'Senators\' Spouses': `SELECT ?res WHERE  {
  ?src ?rel <http://dbpedia.org/class/yago/Senator110578471> .
  ?src <http://dbpedia.org/property/spouse> ?res .
}`,
};

console.log(pug.renderFile('layout.pug', { prewrittenQueries }));
