// const date =new Date ("1995-5-3")
// console.log(date);

// const mil = 1735201454175;
// const date =new Date(mil);
// console.log(date);
// const date = new Date();
// const a = date.getSeconds()
// console.log(a);

// function showClock () {
//     const date = new Date ();
//     const hour = date.getHours().toString().padStart("2","0");
//     const min = date.getMinutes().toString().padStart ("2","0");
//     const result =  `${hour}:${min}`;
//     console.log(result);
    
// }
// showClock ();

// const date =new Date();
// date.setFullYear (2022)
// console.log(date);

// Tasks 
// Get the Current Date
// Create a Date object and return the current date (day of the month).

// const date = new Date ();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getDay());

// 
// function countDays () {
//     const userInp = prompt ("Enter your data please (YYYY-MM-DD):");
//     const userDate = new Date(userInp);
//     isNaN (userDate)?alert("Please enter correct information!!"):alert("Data is correct!");
//     let currentDate = new Date();
//     let differences = currentDate - userDate;

//     let result = Math.floor(differences / (1000 * 60 * 60 * 24)) + " differences";
//     return result
//   }
//   let result = countDays();
// //   console.log(result);

// function countDifference() {
//     const userInput1 = prompt("FIRST DATE (YYYY-MM-DD):");
//     const userInput2 = prompt("SECOND DATE (YYYY-MM-DD):");
//     const date1 = new Date(userInput1);
//     const date2 = new Date(userInput2);
//     if (isNaN(date1) || isNaN(date2)) {
//         console.log("INCORRECT DATE");
//         return;
//     }
//     const timeDifference = date2 - date1;
//     const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     console.log(`DIFFERENCE IS ${Math.abs(dayDifference)} DAYS`);
//     return Math.abs(dayDifference);
// }
// countDifference();


// function calculateTime () {

//     const userInput1 = prompt("Enter the first time (HH:MM:SS):");
//     const userInput2 = prompt("Enter the second time (HH:MM:SS):");
//     const time1 = new Date(`2022-01-01T${userInput1}`);
//     const time2 = new Date(`2022-01-01T${userInput2}`);
//     if (isNaN(time1) || isNaN(time2)) {
//         alert("INCORRECT TIME");
//         return;
//     }
//     const timeDifference = time2 - time1;
//     const hours = Math.floor(timeDifference / (1000 * 60 * 60));
//     const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
//     const seconds = Math.floor(timeDifference / 1000) % 60;
//     console.log(`DIFFERENCE: ${hours} hours, ${minutes} minutes, and ${seconds} seconds`);
//     return `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;   
// }

// console.log(calculateTime());



// function calculateAge () {

//     const userInput = prompt("Enter your birthdate (YYYY-MM-DD):");
//     const birthDate = new Date(userInput);
//     if (isNaN(birthDate)) {
//         alert("INCORRECT DATE");
//         return;
//     }
//     const currentDate = new Date();
//     const age = currentDate.getFullYear() - birthDate.getFullYear();
//     if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     console.log(`AGE: ${age} years`);
//     return `${age} years`;

// }
// console.log(calculateAge());
