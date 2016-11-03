const pug = require('pug');

const prewrittenQueries = {
  'clear': '',
  'Senators 2': `SELECT ?res WHERE  {
  ?src ?rel <http://dbpedia.org/class/yago/Senator110578471> .
  ?src <http://dbpedia.org/property/spouse> ?res .
}`,
  'Senators 1': `SELECT ?src WHERE  {
  ?src ?rel <http://dbpedia.org/class/yago/Senator110578471> .
  ?src ?rel <http://dbpedia.org/class/yago/WikicatPresidentsOfTheUnitedStates> .
}`,
  'NBA': `SELECT * WHERE {
    ?player <http://dbpedia.org/property/league> <http://dbpedia.org/resource/National_Basketball_Association>
  }`
};

console.log(pug.renderFile('layout.pug', { prewrittenQueries }));
