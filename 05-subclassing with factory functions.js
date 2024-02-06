// ======== Create object with Factory Function ======== //

// -- Subclassing in Solution 2 

// function userCreator(name, score) {
//     const newUser = Object.create(userFunctions);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// }

// userFunctions = {
//     sayName: function () {
//         console.log("Im" + this.name)
//     },
//     increment: function () {
//         this.score++;
//     }
// }

// const user1 = userCreator("Phill", 3);
// user1.sayName(); // "I an Phil"


// -----------------------------------------------
// -- Subclassing in Solution 2 
  

// function paidUserCreator(paidName, paidScore, accountBalance) {
//     const newPaidUser = userCreator(paidName, paidScore);
//     Object.setPrototypeOf(newPaidUser, paidUserFunction);
//     newPaidUser.accountBalance = accountBalance;
//     return newPaidUser;
// }

// const paidUserFunction = {
//     increaseBalance: function () {
//         this.accountBalance++
//     }
// };

// Object.setPrototypeOf(paidUserFunctions, userFunctions)

// const paidUser1 = paidUserCreator("Alie", 2, 34);

// paidUser1.increaseBalance();

// paidUser1.sayName(); // I'n Alyssa'




// ========== Subclass Review ========== //

// --- Subclassing in Solution 3

// function userCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }

// userCreator.prototype.sayName = function(){
//     console.log("I'm " + this.name);
// }
// userCreator.prototype.increment = function(){
//     this.score++;
// }
// const user1 = new userCreator("Phil", 5);
// const user2 = new userCreator("Tir ", 4);

// user1.sayName(); // "I'm Phil"


// -----------------------------------------------
// --- Subclassing in Solution 3


// function paidUserCreator(paidName, paidScore, accountBalance) {
//     userCreator.call(this.paidName,paidScore);
//     this.accountBalance = accountBalance;
// }
// paidUserCreator.prototype = Object.create(userCreator.prototype);

// paidUserCreator.prototype.increaseBalance = function(){
//     this.accountBalance++;
// };

// const paidUser1 = new paidUserCreator("Alyssa", 8, 25);

// paidUser1.increaseBalance()

// paidUser1.sayName() // "I'm Alyssa"




// ========== Call and Apply ========== //

/* interlude - We have another way of running a function that
   allow us to control the assignment of this */

// const obj = {
//     num: 3,
//     increment: function(){this.num++}
// };

// const otherObj = {
//     num: 10
// };
// obj.increment(); // obj.num now 4

// obj.increment.call(otherObj); // otherObj.num now 11

// obj.increment.apply(otherObj)
