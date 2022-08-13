'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var pos = 0;
var suma = 0;
for (var i = num.length-1; i >= 0; i--) {
  suma += Math.pow(2,pos) * Number(num[i]);
  pos++;
}
return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
if (num > 0) {
return DecimalABinario (parseInt(num / 2)) + (num % 2) 
};
return '';
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}