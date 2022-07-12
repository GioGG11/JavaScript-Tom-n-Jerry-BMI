//Very Easy
function findMin(x, y) {
    if(x > y){
        return y;
    } else if (x===y){
        console.log("These are the same numbers, either is the minimum!")
    }
    else{
        return x;
    }
  }
  //Easy
  var studentsLFA = [
    ["Garcia", "Giovanni", 21],
    ["Zavala", "Maria", 40],
    ["Medina", "Gerardo", 49]
  ];
  console.log(studentsLFA[0][0])
  function studentLogIn(){
    console.log("Hey! " + studentsLFA[1][0] +" "+ studentsLFA[1][1] + " of age "+ studentsLFA[1][2] + ", glad to have you back!")
    alert("Hey! " + studentsLFA[1][0] +" "+ studentsLFA[1][1] + " of age "+ studentsLFA[1][2] + ", glad to have you back!")
  }
  //Medium
  var month;
  function monthDate(){
    let month = prompt("Please enter the month you are trying to find.");
if (month == 1){
    console.log("Jan");
    alert("Jan");
}
else if(month == 2){
    console.log("Feb");
    alert("Feb");
}
else if(month == 3){
    console.log("March");
    alert("march");
}
else if(month == 4){
    console.log("April");
    alert("April");
}
else if(month == 5){
    console.log("May");
    alert("May");
}
else if(month == 6){
    console.log("June");
    alert("June");
}
else if(month == 7){
    console.log("July");
    alert("July");
}
else if(month == 8){
    console.log("August");
    alert("August");
}
else if(month == 9){
    console.log("September");
    alert("September");
}
else if(month == 10){
    console.log("October");
    alert("October");
}
else if(month == 11){
    console.log("November");
    alert("November");
}
else if(month == 12){
    console.log("December");
    alert("December");
}
else{
    console.log("Error, please input date correctly you useless, useless human");
}
}
//HARD
var JerryHeight, JerryMass, TomHeight, TomMass;
var TomJerry;
function findBMI(){
    JerryHeight = 10;
    JerryMass = 45;
    TomHeight = 9;
    TomMass = 8;
    var TomBMI = TomMass / (TomHeight * TomHeight);
    var JerryBMI = JerryMass / (JerryHeight * JerryHeight);
    if (TomBMI>JerryBMI){
        TomJerry = true;
    }else {
        TomJerry = false;
    }
    if (TomJerry){
        alert("Is Tom's BMI higher than Jerry's? False");
        console.log("Is Tom's BMI higher than Jerry's? False");
    }else{
        alert("Is Tom's BMI higher than Jerry's? True");
        console.log("Is Tom's BMI higher than Jerry's? True");
    }
}
  