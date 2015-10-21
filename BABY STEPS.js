var total = 0;
//as first 2 (0 and 1) is 'node' and path to your directory, actual argument pass after the 3rd element.
process.argv.slice(2).forEach(function(val,index,array) {
  total = total + Number(val);

})
console.log(total);


































//Official solution
//var result = 0;
//for(var i = 2; i<process.argv.length;i++)
//  result += Number(process.argv[i]);
//console.log(result);