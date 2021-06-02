/*
FOR IN LOOPS
 */

//THEY EACH DEPEND ON SOMETHING BEING TRUE FOR THE OBJECT THEY'RE TRYING TO WORK THRU

//in does not require that the thing you loop through be numbered

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item); // when you run it you get - name, awesome, degree, week when you run it
    console.log(student[item]); // when you run it you get - name Peter awesome true degree javascript week 1
} 

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat); //when you run it you get - 0 1 2 3 4 (cat represents the number of the values [] items in brackets)
    console.log(catArray[cat]); //when you run it you get - 0 tabby 1 british shorthair 2 burmese 3 maine coon 4 rag doll
}

//let's write a for-in loop that capitalizes the first letter of a name

let instructor = 'pAuL';
let capName; 

for (n in instructor){
    if (n == 0){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}

console.log(capName); //when you run it - it fixes pAuL to Paul