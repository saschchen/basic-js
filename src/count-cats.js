const CustomError = require("../extensions/custom-error");

module.exports = 	function countCats(backyard) {
  var count=0;
  
  for (var j = 0; j < backyard.length; j++) {
    
    for (var i = 0; i<backyard[j].length; i++) {
      if (backyard[j][i] === '^^') {
      count++;
      }   
      
             
  }
}
return Number(count);
}