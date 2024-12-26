
// const numbers = [1, 2, 3, 4, 5];
// let [first,second, ...rest] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(rest);   // Output: [3, 4, 5];

// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "blue"
//   };
  
//   let {make,model,year} =car  ;
//   // Use destructuring to extract properties
//   // Write your code here
  
//   console.log(make);   // Output: Toyota
//   console.log(model);  // Output: Camry
//   console.log(year);   // Output: 2020
//   console.log(car);


// Add a method greet to all instances of the Person constructor using prototypes, so that calling person1.greet() will output a greeting message.

// const person = {
//     name: "Sema",
//     greet: function () {
//        console.log(this.name + " Hello");
        
//     },
// }
// person.greet ();

// function person (name) {

// this.name = name
    
// }
// person.prototype.greet = function() {
//     console.log("hello "+ this.name);   
// }
//   let person1 = new person ("sema");
//   console.log(person1.greet());
//   let person2 = new person ("nermin");
//   console.log(person2.greet());
  
// const user = {
//     name: "Tom",
//     age: 25
//   };
  
//   let {name:fullName,age, country="unknown"}=user
//   // Use destructuring with default values
//   // Write your code here
  
//    // Output: Tom
//   console.log(age);    // Output: 25
//   console.log(country); // Output: Unknown
//   console.log(fullName);
  
// const data = {
//     errors: [
//       {
//         status: "403",
//         source: { pointer: "/data/attributes/secretPowers" },
//         detail: "Editing secret powers is not authorized on Sundays."
//       },
//       {
//         status: "422",
//         source: { pointer: "/data/attributes/volume" },
//         detail: "Volume does not, in fact, go to 11."
//       },
//       {
//         status: "500",
//         source: { pointer: "/data/attributes/reputation" },
//         title: "The backend responded with an error",
//         detail: "Reputation service not responding after three requests."
//       },
//       {
//         status: "403",
//         source: { pointer: "/data/attributes/secretPowers" },
//         detail: "Duplicate error with the same pointer and status."
//       },
//       {
//         status: "999",
//         source: { pointer: "/data/attributes/invalid" },
//         detail: "This is an invalid status error."
//       }
//     ]
//   };  
  
//   let result = Object.entries(data.errors)
//   let arr = [];
//   for (el of result) {
//     let el1 = el[0];
//     let el2 = el[1];
  
//     let obj = {
//         id:el1,
//         ...el2,

//     } 
//     arr.push(obj)
//     console.log(obj);
    
//   }
//   arr.map (el=>{
//     // return el.status==500?console.log("error",el):"";
//     return el.source.pointer.includes ("secretPowers") ?console.log(el.source.pointer.replace ("secretPower", "Baku")):"";
//   })

//   let res2 = arr.reduce((total,el) => {
//   return total + Number(el.status)
//   },0
// )
 
// console.log(res2);

  // output {id: '403', status: '403', source: {…}, detail: 'Duplicate error with the same pointer and status.'}

//   var Ball = function(ballType) {
    
//     if (ballType==="super"){
//         return this.ballType="super"
//     }else {
//         return this.ballType="regular"
//     }
//     };

// let ball1 = new Ball();
// let ball2 = new Ball("super");
// console.log(ball2);

// class ball {
//     constructor(name){this.name=name}
//     ball(balltype){
//     }
// }
