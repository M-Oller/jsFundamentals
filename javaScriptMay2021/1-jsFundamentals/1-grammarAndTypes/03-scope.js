/*
SCOPE

1-grammarAndTypes
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
    Global scope is anything that we write that is avaiable and ready from the get-go
        function has the job of running some block of code whenever we call that function
*/

//example 1
var x = 12; //global scope

function scope(){
    var x = 33;
    var y = 10;
    console.log(x);
}
scope(); //logs 33
console.log(y); //logs error y is not defined
console.log(x); //logs 12

//example 2
var x = 12;

function scope(){
    x = 33;
    console.log(x);
}

scope()
console.log(x);
//when run it logs - 33 33

//example 3
var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x);
    }
    scopeInner();
    console.log(x);
}
scope();
console.log(x);
//when run you get - 3 2 1  the code reads top to bottom


//example 4 contrasts with example 5:

var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x); //45
}
    console.log(x); //33
}

scope();
console.log(x); //12
//when run you get - 45 33 12


//example 5 contrasts with example 4
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 -> var doesn't obey 'block' scope
}

scope();
console.log(x); //12
//when run you get - 45 45 12

