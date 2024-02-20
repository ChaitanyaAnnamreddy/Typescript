// giving friendly names to set of number 
// By Default, the enum starts with number 0 for the first name and then 
// just jump counts up that number for the next names

enum CarColor {
    'cherry red',
    'diamond white',
    'seagul blue',
    'NightBlack',
    'silver gray'
}

var mycarColor:CarColor;

// mycarColor=CarColor.NightBlack; //name lo space lekapotey . use cheyali
mycarColor=CarColor["cherry red"]; //name lo space vunte [] lo ivali 

console.log(mycarColor) // value vastadi - output - 0
console.log(CarColor[mycarColor]) //name vastadi - output - cherry red