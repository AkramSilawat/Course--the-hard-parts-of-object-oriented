// ======== Objects default__proto__ ======== //

/* JavaScript users this proto links to give objects, functions
   and arrys a bunch of bonus functionality.All objects by 
   default have__proto__  */

const obj = {
    num: 3
}
console.log(obj.num);
console.log(obj.hasOwnProperty(num)); // Where's this method?

console.log(Object.prototype); // {hasOwnPrototype: Function}





// ======== Function.prototype and Array.prototype ======== //

/* -- Arrays and functions are also objects so they get access to
   all the functions in Object.prototype but also more goodies  */

function multiplyBy2(num) {
    return num * 2;
}

multiplyBy2.toString(); // Where iS this method ?

Function.prototype // {toString : FUNCTION. call : FUNCTION. bind : FUNCTION }

multiplyBy2.hasOwnProperty("score"); // where's this function? 

Function.prototype.__proto__ // Object.prototype { hasOwnProperty: FUNCTION }
