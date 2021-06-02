// ****** CHALLENGES ********

/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let FB = 50;

if (FB % 3 === 0 && FB % 5 === 0){
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz')
} else {
    console.log('Your number is not divisible by 5 or 3');
}

//switch

let FB = 50;

switch(true){
    case(FB % 3 === 0 && FB % 5 === 0):
            console.log("Fizz Buzz");
            break;
        case (FB % 3 === 0):
        console.log("Fizz");
            break;
        case (FB % 5 === 0):
        console.log("Buzz");
            break;
        default:
            console.log('Your number is not divisible by 5 or 3')
}

//ternary
FB = 150

FB % 3 === 0 && FB % 5 === 0 ? console.log("Fizz Buzz") :
FB % 3 === 0 ? console.log("Fizz") :
FB % 5 === 0 ? console.log("Buzz") :
console.log("Your number is not divisible by 5 or 3"); 
//i did it myself! yay

