function calcBMI(){
var height = document.getElementById("height").value;
var weight = document.getElementById("weight").value;

var bmiFormula = weight/((height/100)*(height/100));
var bmi = Math.round(bmiFormula);

document.getElementById("result").innerHTML = bmi;
}