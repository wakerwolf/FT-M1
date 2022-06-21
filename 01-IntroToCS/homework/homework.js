'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var result =0;
  var position=0;

  for(var i =num.length-1; i>=0;i--){
    result+= num[i]*2**position;
    position++;

  }
  return result;

}

function DecimalABinario(num) {
  // tu codigo aca

  var result='';
 
  while (num > 0) {
      // storing remainder in binary array
      result = num % 2 + result;
      num = Math.floor(num / 2);
  }
  return result;


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}