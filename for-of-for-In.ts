var br: Array<number|string|boolean> = [12,14,17]
for ( var i in br){console.log(i)}

var cr:Array<number|string> = [11,24,14,'sdfsd']
for(var i in cr){console.log(i)} //indexes vastayi
for(var i in cr){console.log(cr[i])} //values vastayi
for(var j of cr){console.log(j)} // of use cheste kuda values vastayi,kani in use 
                                 // cheste console lo cr[i] ani icham 
                                 // kani of use cheste direct ga j loki value vastadi

// for..of can only be used in arrays
// enumerable property vunte we can use for..in and for..of 
// objects lo for..in use cheyali - for..in can iterate over keys and for..of can iterate over values