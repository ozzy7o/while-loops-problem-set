console.log("Print all numbers between -10 and 19");

var num = -10;
while (num <= 19){
    console.log(num);
    num += 1;
}

console.log("Print all even numbers between 10 and 40");

var num = 10;
while (num <= 40){
    console.log(num);
    num += 2;
}

console.log("Print all odd numbers between 300 and 333");

var num = 301;
while (num <= 333){
    console.log(num);
    num += 2;
}

console.log ("Print all numbers divisble by 5 and 3 between 5 and 50");

var num = 5;
while (num <= 50){
    if(num % 5 === 0 && num % 3 === 0){
       console.log(num);
       }
num+=1;
}