/* 
TERNARIES

5-expressionsAndOperators
    03-tenaries.js
*/

let x = -6;

x > 0 ? console.log('x is positive') : console.log('x is negative'); //shorter and more elegant than if/else statements

if (x > 0){
    console.log('x is positive');
    
} else {
    console.log('x is negative');
}


let greeting = 'salutations!';

if (greeting.length > 10){
    console.log('that is a long greeting!');
} else if (greeting.length == 10){
    console.log('your grreeting is exactly 10 characters!');
} else {
    console.log('what a normal greeting'); //too long! we can write this easier and shorter
}

greeting.length > 10 ? console.log('that is a long greeting!') :
greeting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what a normal greeting!');  //shorter, faster, and elegant