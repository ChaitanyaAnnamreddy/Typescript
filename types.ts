var ob1 = {
    firstname:'chaitu',  //paina 'ob1' ki type em ivakapotey danki ichina value batti adi tiskuntadi
    lastname:'annamreddy'  
    
};

// ob1 = {
//     location:'Hyd', //Object literal may only specify known properties, 
//                     //and 'location' does not exist in type '{ firstname: string; lastname: string; }
// }                              //type em ivakapotey we can't add any other properties into object

ob1 = {
    lastname:'gubbala',
    firstname:'praveen' // order of properties marchukovachu danne duck typing antam - 
}

var ar:(number|string)[];
ar = [123,32,45,'chaitu']
console.log(ar[3]) 

var ar1:number[] = [];

ar1[0] = 234
console.log(ar1)

var a2:number = 23;
var b2:string = '44';
console.log(a2>b2)  //Operator '>' cannot be applied to types 'number' and 'string' 

var c1:number;
c1 = Number(b2) 

var item1 = <any>{ id:1,name:'item 1'};
item1 = {id:2}


