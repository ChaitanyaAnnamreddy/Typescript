var ob1 = {
    firstname: 'chaitu', //paina 'ob1' ki type em ivakapotey danki ichina value batti adi tiskuntadi
    lastname: 'annamreddy'
};
ob1 = {
    location: 'Hyd', //Object literal may only specify known properties, 
    //and 'location' does not exist in type '{ firstname: string; lastname: string; }
}; //type em ivakapotey we can't add any other properties into object
ob1 = {
    lastname: 'gubbala',
    firstname: 'praveen' // order of properties marchukovachu danne duck typing antam - 
};
var ar;
ar = [123, 32, 45, 'chaitu'];
console.log(ar[3]);
var ar1 = [];
ar1[0] = 234;
console.log(ar1);
