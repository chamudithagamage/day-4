function multiply(num1,num2){
    return num1*num2;
}

function sum(num1,num2){
    return num1 + num2;
}
function substract(num1,num2){
    return num1-num2;
}
function division(num1,num2){
    return num1/num2;
}

//define variables
let x = 5;
let y = 34;
let calculator = {
    multiply: multiply(x,y),
    sum: sum(x,y),
    substract: substract(x,y),
    division: division(x,y)

};

console.log("Basic mathematic functions ", calculator);