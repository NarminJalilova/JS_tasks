// let names = "Global";
// function printName() {
// let names = "Local";
// console.log(names);
//  }
//  console.log(names);
// printName();

// Task 2
// let inputArray = [1, 2, 3, 4, 5, 6];

// function filterEvenNumbers (arr) {
// return arr.filter((el) => el % 2 === 0);
// } 

// let result = filterEvenNumbers(inputArray);
// console.log(result);

// Task 3 
// let inputArray = [1, 2, 3, 4, 5, 6];

// function filterOddNumbers (arr) {
// return arr.filter((el) => el % 2 !== 0);
// } 

// let result = filterOddNumbers(inputArray);
// console.log(result);

// Task 4 
// let inputArray = [1, 2, 2, 3, 4, 4, 5];
// function removeDuplicates(arr) {
//     return arr.filter((el, index) => arr.indexOf(el) === index);  
// }
// let result = removeDuplicates(inputArray);
// console.log(result);

// Oz practicelerim


// adder(x) funksiyası bir funksiya qaytarsın.
// Bu funksiya çağırıldığında verilən ədədləri x ilə toplasın.
// Məsələn:

// javascript
// Copy code
// const addFive = adder(5);
// addFive(10); // 15
// addFive(20); // 25
// function Adder (x) {
// function B (y) {
//     return x+y
// }
// return B 
// }
// let result = Adder (10);
// console.log(result (5));



// function multiplication (a) {
// return function B (c) {
//  return a*c
// }
// }
// let result = multiplication (6);
// console.log(result (5));



// Funksiya daxilində parolu saxla.
// Yalnız düzgün parol daxil edildikdə, saxlanmış məlumatı qaytarsın. const passwordSystem = createPassword("secret123");

// passwordSystem("wrong"); // "Səhv parol!"
// passwordSystem("secret123"); // "Məlumat: Xoş gəlmisiniz!"

// function createPassword (str1) {
//     function passwordSystem (str2) {
//         return str1===str2?"Xoş gəlmisiniz!":"Səhv parol!"
//     }
//    return passwordSystem  
// }
// let result = createPassword ("narmin95")
// console.log(result("narmin95"));


// Bir calculator funksiyası yarat:

// Bu funksiya iki funksiya qaytarsın: add və subtract.
// Hər ikisi eyni lokal dəyişən üzərində işləsin. const calc = calculator(10); // Başlanğıc dəyər: 10
// calc.add(5); // 15
// calc.subtract(3); // 12


// function calculater (value) {

// let obyekt =
// {add:function A (number) {
// return number+value
// },
// substract: function B (number) {
//     return number-value
// }
// }
// return obyekt
// }
// let result = calculater(20)
// console.log(result.add (60));
// console.log(result.substract (50));

// Bir tərtib funksiyası (composition function) yaz:

// compose adlı funksiya iki funksiyanı qəbul etsin və onları closure ilə birləşdirsin. function double(x) {
//   return x * 2;
// }
// function square(x) {
//   return x * x;
// }
// const composedFunction = compose(double, square);
// composedFunction(3); // 36 (Çünki: square(3) -> 9, sonra double(9) -> 18)
// qzh-fgxm-txg




// function compos (x,y) {

// return function process (a) {
//     return y(x(a))
// }
// }
// function double (a) {
//     return a * 2;
// }
// function square(a) {
//  return a * a;
// }
// let result = compos(double,square);
// console.log(result(3));

// codewarse
// function plural (n) {
//     if (n==1) {
//         return false
//     }else {
//         return true
//     }
//     }
//     let res = plural (110);
//     console.log(res);

// function any(arr, fun){
//     for (let i=0; i<arr.length; i++) {
//         if (fun(arr[i])) {
//             return true
//         }
       
//     }
//     return false
//   }

// let array = [1,4,5,6];
// let res = any (array, function A(number) {
//     return number>5
// })
// console.log(res);
// function evil(n) {
//     let evils = [3, 5, 6, 9, 10, 12, 15, 17, 18, 20];
//    let odious = [ 1, 2, 4, 7, 8, 11, 13, 14, 16, 19];

//  if (evils.includes(n)){
//     return  "It's Evil!"
//  }else if (odious.includes(n)){
//     return "It's Odious!"
//  }else {
//     return "It's neither Evil nor Odious!"
//   }
// }
// let res= evil(29)
// console.log(res);
