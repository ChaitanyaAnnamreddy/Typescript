//ex-1
function add(a, b) {
    return a + b;
}
var res;
var res1;
res = add(12, 23);
res1 = add('praveen ', 'gubbala');
console.log(res);
console.log(res1);
//ex -2
function calculateTax(amount, format) {
    var calcAmount = amount * 1.2;
    return format ? "$".concat(calcAmount.toFixed(2)) : calcAmount;
}
var mytax = calculateTax(200, false); // true iste string format lo vastundi - false iste number vastundi
var mytax1 = calculateTax(200, true);
console.log(mytax.toFixed(2));
console.log(mytax1.charAt(0));
