function outerFunction(){
    let outerVariable = 'I am an outer variable';

    function innerFunction(){
        console.log(outerVariable); //inner function can access outer variable
    }

    return innerFunction;
}

let myClosure = outerFunction(); //returns the inner function
myClosure();