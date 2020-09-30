const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
  var name = [];

  let str;

  for (i=0; i< team.length; i++) {
  if (typeof team[i] === 'string' && typeof team[i] !== 'object') {
  team[i] = team[i].toUpperCase();

   name[i] = (team[i].replace(/^\s/,'').trim())[0];

  

                name = name.sort();

   str = name.join('');

  

 

 }

}

if (typeof str === "string") {
return str;}

return false;

  

 };
