// ======== this keyword Scoping issues ======== //

/* What if we want to organize our code inside one of our 
shared function - perhaps by defining a new inner
functiona */

// function UserCreator(name, score) {
//    this.name = name;
//    this.score = score;
// }
// UserCreator.prototype.increment = function () {
//    function add1() {
//       this.score++;
//    }
//    // const add1 = function(){this.score !}
//    add1();
// };

// UserCreator.prototype.login = function () {
//    console.log("login");
// };

// const user1 = new UserCreator("Eva", 9);
// user1.increment()

// console.log(user1)


// ---------------------------------------------------------------
// ======== Solving Scope with Arror Function ======= //

/*  We need to introduce arrow functions - which bind this
    lexically */


// function UserCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function () {
//     const add1 = () => { this.score++ }
//     add1()
// };ncrement());
// console.log(user1);

// UserCreator.prototype.login = function () {
//     console.log("login");
// };

// const user1 = new UserCreator("Eva", 9)

// console.log(user1.increment());
// console.log(user1);




// ======== ES6 class keyword ======== //

/*    We need to introduce arrow functions - which bind this
    lexically */

// ----The class 'Syntactic Sugar'
// ----Solution 3 in full 

// function UserCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function () {
//     const add1 = () => { this.score++ }
//     add1()
// };

// UserCreator.prototype.login = function () {
//     console.log("login");
// };

// const user1 = new UserCreator("Eva", 9)

// console.log(user1.increment());
// console.log(user1);


// ---------------------------------------------------------

// ----The class 'Syntactic Sugar'

// ----Solution 4 in full 

// class UserCreator {
//     constructor(name, scope) {
//         this.name = name;
//         this.scope = scope;
//     }
//     increment() {
//         this.scope++;
//     }
//     login() {
//         console.log("login");
//     }
// }
// const user1 = new UserCreator("Eva", 9); // Output 11
// user1.increment();

// console.log(user1.increment());
// console.log(user1);





// ======== Racap of the class keyword ======== //

// === Benefits:
// - Emerging as a new standard
// - Feels more like style of other languages (e.g. Python)

// === Problems
// - 99% of developers have no idea how it works and theregore fail interviews


const obj = {
    num: 3
}
console.log(obj.num);
console.log(obj.hasOwnProperty(num)); // Where's this method?

console.log(Object.prototype); // {hasOwnPrototype: Function}



/* -- With Object.create we override the default__proto__reference to 
      Object.prototype and replace with functionStore */

/* -- But funtionStore is an object so it has a __proto__reference to
      Object.prototype.we just intercede in the chain */