/* 
COMPARISON OPERATORS

5-expressionAndOperators
    02-comparisonOperators.js
*/

//equality comparison operator
console.log('3' == 3); //true
console.log(4 == 4); //true
console.log(3 == '4'); //false (the types are different and the values are different)

//strict equality comparison operator
console.log(3 === 3); //true (left and right are the same value and same type)
console.log('3' === 3); //false

//not equal comparison operator
console.log('3' != 4); //true
console.log('3' != 3); //false

//strict not equal comparison operator
console.log('3' !== 3); //true
console.log(3 !== 3); //false (same value and same type)

//greater than
console.log(3 > 2); //true
console.log(2 > 3); //false

//less than
console.log(2 < 3); //true
console.log(3 < 2); //false

//greater than or equal to
console.log( 3 >= 2); //true
console.log(3 >= 3); //true

//less than or equal to
console.log(2 <= 3); //true
console.log(3 <= 2); //false

//And (both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0);  //true (both expressions are true)
console.log(2<1 && 3>0); //false (only one expression is true so it returns as false)

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0); //true (one is true)
console.log(2<1 || 3<0); //false (neither one is true)

let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //false (with complex types, you aren't comparing the actual value, you are comparing is it the exact same thing.)

console.log(obj == obj); //true

let arr = [1,2,3,4];
console.log(arr == [1,2, 3, 4]); //false
console.log(arr == arr); //true