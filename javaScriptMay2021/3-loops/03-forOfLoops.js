/*
FOR OF LOOPS
*/

//of requires that your 'thing' you're looping through be iterable--that means it needs to be numbered

let student = {name: 'Peter', isAwesome: true, degree: 'javascript'. week: 1};

for (item of student){
    console.log(item); 
} //will not run because there is no numeric representation.

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow'); 
} // when you run it it says - tabby says meow british shorthair says meow burmese says meow maine coon says meow rag doll says meow