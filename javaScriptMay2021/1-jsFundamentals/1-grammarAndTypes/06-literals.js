/*
LITERALS
1-grammarAndTypes
    06-literals.js
 */

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//                  0         1          2            3          4
console.log(weekDays.toString());
console.log(weekDays[3]); //Thursday

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}
console.log(soup.c); //beef and barley

//array and object literals can hold primitive and 'complex' types (arrays, objects, functions)

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
//                   number, boolean, string, array,   object,      function (anonymous)
//                     0      1      2           3        4              5
console.log(complexArrLiteral[5]); //[Function (anonymous)]
console.log(complexArrLiteral[3]); //[ 1, 2, 3 ]

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr:[1,2,3], obj: {key: 'test'}, function(){return 'yes'}};
console.log(complexObjLiteral.function);
console.log(complexObjLiteral.arr);
