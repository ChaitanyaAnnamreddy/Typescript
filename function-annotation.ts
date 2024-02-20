//ex-1
function add(a:any,b:any):any{
    return a+b
}

var res:number;
var res1:string;

res = add(12,23);
res1 = add('praveen ','gubbala')
console.log(res)
console.log(res1)  
//ex -2
function calculateTax(amount:number,format:boolean):(string|number){
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

// var mytax:number = calculateTax(200,false) as number // true iste string format lo vastundi - false iste number vastundi
var mytax:number = <number>calculateTax(200,false) // another syntax
var mytax1:string = calculateTax(200,true) as string 
//var mytax1:string = <string>calculateTax(200,true) 
console.log(mytax.toFixed(2))
console.log(mytax1.charAt(0))


//ex-3
var el = document.getElementById('id1') 
var val = el.value //error vastundi - why -> oka input element vundi dantlo nunchi value tiskovali 
                   //   anukunte .value method use cheyochu manam

var el1 = document.getElementById('id1') as HTMLInputElement
var val = el1.value; //ipudu error ravatledu