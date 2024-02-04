// ======== Avoid Duplication with prototype ======== //  

// Using the prototype chain

// const functionStore = {
// increment :function(){this.score++;},
// login: function(){console.log("You re loggedin")}
// };
// const user1 = {
//     name: "Phil",
//     score: 4
// };

// user1.name // name is a property of user1 object
// user1.increment // Error! increment is not!

// -----------------------------------------------------------

// Solution 2 in full

// function userCreator(name, score){
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     console.log(newUser)
//     return newUser;
// };

// const userFunctionStore = {
//     increment: function(){ this.score++;},
//     login: function(){console.log("You're loggedin");}
// };

// const user1 = userCreator("Phil", 4);
// const user2 = userCreator("Julia", 5);
// user1.increment();




// ======== Functions are Objects and function ======== // 

/* interlude - functions are both objects and function */

// function muliplyBy3(num){
//     return num*2;
// }

// muliplyBy3.stored = 5;
// console.log(muliplyBy3(3))

// console.log(muliplyBy3.stored)
// console.log(muliplyBy3.prototype)


/* --- We could use the fact that all function have a default property 
 on their object version, 'prototype', which is itself an object-to 
 replace our functionStore object */




// ======== new keyword & Share Function with prototype ======== //

/* --- Complete Solution 3 ---*/

//  function UserCreator(name, score){
//     this.name = name;
//     this.score = score;
//  }
//  UserCreator.prototype.increment = function(){
//     this.score++;
//  };
//  UserCreator.prototype.login = function(){
//     console.log("login");
//  };

//  const user1 = new UserCreator("Eva", 9);

//  console.log(user1)

//  console.log(user1.increment());




// ======== Review of new ======== // 

/* What if we want to organize our code inside one of our 
shared function - perhaps by defining a new inner
functiona */

function UserCreator(name, score) {
   this.name = name;
   this.score = score;
}
UserCreator.prototype.increment = function () {
   function add1() {
      this.score++;
   }
   // const add1 = function(){this.score !}
   add1();
};

UserCreator.prototype.login = function () {
   console.log("login");
};

const user1 = new UserCreator("Eva", 9);

console.log(user1)

console.log(user1.increment());