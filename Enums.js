// giving friendly names to set of number 
// By Default, the enum starts with number 0 for the first name and then 
// just jump counts up that number for the next names
var CarColor;
(function (CarColor) {
    CarColor[CarColor["cherry red"] = 0] = "cherry red";
    CarColor[CarColor["diamond white"] = 1] = "diamond white";
    CarColor[CarColor["seagul blue"] = 2] = "seagul blue";
    CarColor[CarColor["NightBlack"] = 3] = "NightBlack";
    CarColor[CarColor["silver gray"] = 4] = "silver gray";
})(CarColor || (CarColor = {}));
var mycarColor;
mycarColor = CarColor.NightBlack;
mycarColor = CarColor["cherry red"];
console.log(mycarColor); // value vastadi
console.log(CarColor[mycarColor]); //name
