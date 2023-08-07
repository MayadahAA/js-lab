let number = 3
if (number % 2 != 0) {
    console.log('odd');
}
else{
    console.log('even');
}
// output
// odd

let grade = 88

if (grade >= 90 && grade <= 100) {
    console.log('A');
    
}else if (grade <= 89 && grade >= 80) {
    console.log('B');
    
}else if (grade <= 79 && grade >= 70 ) {
    console.log('C');
    
}else if (grade <= 69 && grade >= 60) {
    console.log('D');
    
}else if (grade <= 59) {
    console.log("F");
}
else {
    console.log('not expect');
}
// output
// B


// ## Fizz Buzz:

let numb1 = 390

if(numb1 % 3 == 0 && numb1 % 5 == 0){
    console.log('fizzbuzz')
}else if (numb1 % 5 == 0){
    console.log('buzz')
}else if (numb1 % 3 == 0) {
    console.log('fizz');  
}else{
    console.log(numb1)
}
// output
// fizzbuzz


let prime = 23
let i =2
if (prime % i == 0) {
    console.log('not');
}else{
    console.log('prime');
}
// output
// prime

let sums = 0
for (let i = 1; i <= 10; i++) {
    sums += i
    console.log(sums);    
}
// console.log(sums);

// for (let i = 5; i >= 0; i--) {
//     for(let j = i; j > 3; j--){
//         console.log(j, i);
// }

// output
// 1
// 3
// 6
// 10
// 15
// 21
// 28
// 36
// 45
// 55



// // using for loop calculate the square number between 1 and 10.

let sum = 0

for (let i = 1; i <= 10; i++) {
    sum+=1;
    let result = Math.pow(sum, 2)
    console.log(result);
}
// output
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81
// 100

// // using any loop print odd number between 1 and 20.
let num = 0
for (let i = 1; i < 20; i++) {     
    
    num++;   

    if(num % 2 != 0) {    
        console.log(num);
    }              
}
// output
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19


let numb = 0
for (let i = 1; i < 25; i++) {     
    numb++;   
    if(numb % 2 == 0) {    
        console.log(numb);
    }              
}
// output
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// 22
// 24


// using loop print the following.
let nums = 8
let str = ''

for (let i = 1; i <= nums; i++) {
    for (let j = 1;j <= i;j++){    
str += j
str += ' '
    }
str += '\n'
}    
console.log(str);

// output
// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8


const numbe = 10
let x = 0, y = 1
let z

for (let i = 1; i <= numbe; i++) {
    console.log(x);
    z = x + y;
    x = y;
    y = z;
}

// output
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34