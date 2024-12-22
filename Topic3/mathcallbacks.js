// Ders record Paractice
// const arr = [2,3,84,5,6];
// const maxNum = Math.min (...arr);
// console.log(maxNum);

// const a = 2;
// const res = Math.sqrt(a);
// console.log(res);

// const a = ["Nara","Vaqa","Lamz","Kamw"]
// const res1= Math.random ()*(a.length-1);
// const res2=Math.floor (res1);
// console.log( `${res1} `);
// console.log(res2);
// console.log(`${a[res2]}`);

// const comp=["w","f","e"];
// const random = Math.floor (Math.random()*comp.length);
// const compChoose = comp [random];
// const userChoose = prompt ("Enter your pokemon Kapital Word")


// if (userChoose=="w" && compChoose =="f"){
   
//     showMes("Your Win!");

// }else if (userChoose=="f" && compChoose =="e"){
//     showMes("Your Win!");

// }else if (userChoose=="e" && compChoose =="w"){
//     showMes("Your Win!");

// }else if (userChoose==compChoose){
//     showMes("Draw!");

// }else {
//     showMes("Lose!"); 
// }

// function showMes (title){
//     console.log("--------------");
//     console.log(title);
//     console.log("CompChoose",compChoose);
//     console.log("UserChoose", userChoose);
// // console.log("--------");
// // }

// const a=20;
// var show = function () {
//     console.log("show code!")  
// }; function A(num, digerFunksiya) {
//     console.log("A prosesing...")
//     digerFunksiya()
// }

// A(a,show);


// 18 .11. 2024 
// Task 1

// function countVowels(str) {
//     let vowels = "aeiou";
//     let count = 0;
//     for (let i=0;i<str.length;i++) {
//         let el = str[i]
//         if (vowels.includes(el))
//             count++
//     }return count;
// }console.log(countVowels("javascript"));


// Task 2
// function printEvens(num) {
//     for (let i=1; i<=10;i++){
//      if (i%2 == 0 ){
//             console.log(i,"Cutdur")  
//         }
//     }  
// }
// printEvens(10);

// Task 3 
// function sumDigits(num) {
//    let str= num.toString()
//    let sum=0
//    for (let i=0;i<str.length;i++){
//     sum+=parseInt(str[i])
//    }return sum
// }
// console.log(sumDigits(123));

// // Task 4
// function multiplicationTable(num) {
//     for (let i=1;i<=10;i++){
//         console.log(`${num}*${i}=${num*i}`)       
//     }  
// }multiplicationTable(3);

// Task 5 
// function fizzBuzz (num) {
//     for (let i=1;i<=num; i++){     
//         if (i%3===0 && i%5===0) {
//            console.log("FizzBuzz");
           
            
//         }else if (i%3 ===0) {
// console.log("Fizz");

//         }else if (i%5===0){
//             console.log("Buzz")     
//         }else {
//             console.log(i);
//         }
//     }
// }fizzBuzz(45)


// 21.11.2024 tasks
// Task 1 

// function performOperation (number, callback) {
// callback (number)
// }function printNum (num) {
//     console.log (`This number is: ${num}`);
// }

// performOperation (10, printNum);


// Task 2
// function transformArray (arr, callback) {
// callback(arr)
// }function doubleArray(arrays) {
//     console.log(arrays.map (arr=>arr*2));
// }
// transformArray ([1,2,3],doubleArray);

// // Task 3
// function filterArray (arr,callback) {
//    return arr.filter (callback)
// } function containArr(numbers) {
//     return numbers %2 ===0;
// }
// console.log(filterArray([1,2,3,4,5,6],containArr));

//task

// const companies = [
//     {name:'Whelp' , category:'Development' , start:2002 , end:2021},
//     {name:'ByQr' , category:'Finance' , start:1998 , end:2023},
//     {name:'Marandi' , category:'Design' , start:2012 , end:2022},
//     {name:'Kapital' , category:'Technology' , start:1992 , end:2015},
//     {name:'Pasha' , category:'Retail' , start:1999 , end:2005},
//     {name:'Rabite' , category:'Finance' , start:2006 , end:2009},
//     {name:'Irshad' , category:'Development' , start:2004 , end:2021},
//     {name:'AzGranata' , category:'Design' , start:1993 , end:2011},
//     {name:'AzerSun' , category:'Development' , start:1997 , end:2001},
//     {name:'Veyseloglu' , category:'Design' , start:1988 , end:2018},
// ]

// for (el of companies) {
//     console.log(el.name);   
// };
// companies.forEach(el => {
//     console.log(el.name);   
// });
// companies.map (el=> {
//     console.log(el.name);  
// });
// let result = companies.map (el=> {
//      let years = `${el.name} is ${el.end - el.start} years old`;

//     return years
// })
// console.log(result);

// let result = companies.filter (el => {
//     return el.category === "Development"
// })
// console.log(result);


// task 4 
// let numbers = [3, 8, 2, 10, 5];
// let maxNumber = Math.max (...numbers) ;
// console.log(maxNumber);

// Task 5 
// let numbers = [15, 7, 9, 2, 12];
// let minNumber = Math.min (...numbers);
// console.log(minNumber);

// Task 6 
// let num = 8.9;
// let floored = Math.floor (num);
// console.log(floored);

// Task 7 
// let num = 4.1;
// let ceiled = Math.ceil (num);
// console.log(ceiled);

// // Task 8 
// let num = 6.4;
// let rounded = Math.round (num);
// console.log(rounded);

// Task 9 
// let num = -20;
// let absoluteValue = Math.abs (num);
// console.log(absoluteValue);

// Task 10 
// let num = 64;
// let sqrtValue = Math.sqrt (num);
// console.log(sqrtValue);

// Task 11
// let base = 5;
// let exponent = 2;
// let power = Math.pow(base, exponent);
// console.log(power);

// Task 12
// let randomNumber = Math.random ();
// console.log(randomNumber);

// Task 12
// let num = 15.987;
// let truncated = Math.trunc(num);
// console.log(truncated);

// function multipleArray (arr, callback) {
// return arr.map(function (el){ 
//     return callback (el)
// })
// }
// function squareArray (arrays) {
//   return arrays*arrays ;
// }
// console.log (multipleArray ([1,2,3], squareArray));

// function calculate (a,b,callback) {
// return callback (a,b)
// }function add (c,d) {
//    let result = c+d;
//    console.log("Netice:", result);
//    return result
// }
// calculate(10,20, add)

//codewarse practise
// function finalGrade (exam, projects) {
//     if (exam>90 && projects>10){
//       return 100
//   }else if(exam >75 && projects>=5) {
//   return 90
//   }else if (exam >50 && projects>=2) {
//   return 75
//   }else {
//     return 0
//   }
    
//   }
//  console.log (finalGrade (75,6)) 

// function animals(heads, legs){

//     let cows = (legs - 2 * heads) / 2;
//     let chickens = heads - cows;

//      if (chickens < 0 || cows < 0 || legs % 2 !== 0) {
//         return "No solutions";
//     } else {
//         return [chickens, cows];
//     }
//   }