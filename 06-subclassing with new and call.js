
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

// paidUser1.sayName() // "I'm Alyssa"1