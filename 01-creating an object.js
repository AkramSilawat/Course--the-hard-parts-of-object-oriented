// ======== Creating an Object ======== //

// Object - store functions with their associated data!

// const user1 = {
//     name: "Phil",
//     score: 4,
//     increment: function() {
//         user1.score++;
//     }
// };
// user1.increment();

// This is the principle of encapsulation.

// Let's keep creating our objects




// ======== Object dot  Notations ======== // 

// Creating user2 user 'dot notation' 

// const user2 = {};

// user2.name = "Julia";
// user2.score = 5;
// user2.increment = function(){
//     user2.score++;
// }

// Our code is getting repetitive, we're breaking our DRY principle
// And suppose we have milions of users!
// What could we do?



// ======== Object Create ========= //

// Creating user3 using Object.create

// const user3 = Object.create(null);
// user3.name = "Julia";
// user3.score = 5;
// user3.increment = function(){
//     user3.score++;
// }

// Our code is getting repetitive, we're breaking our DRY principle
// And suppose we have milions of users!
// What could we do?



//  ======== Creating Objects with functions ======== //

// solution 1. Generate objects using a function

function userCreator(name, score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    }
    return newUser;
}
const user1 = userCreator("Phil", 4);
const user2 = userCreator("Julia", 5);
user1.increment(); 
