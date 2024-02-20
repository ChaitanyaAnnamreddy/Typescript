var br = [12, 14, 17];
for (var i in br) {
    console.log(i);
}
var cr = [11, 24, 14, 'sdfsd'];
for (var i in cr) {
    console.log(i);
} //indexes vastayi
for (var i in cr) {
    console.log(cr[i]);
} //values vastayi
for (var _i = 0, cr_1 = cr; _i < cr_1.length; _i++) {
    var j = cr_1[_i];
    console.log(j);
}
