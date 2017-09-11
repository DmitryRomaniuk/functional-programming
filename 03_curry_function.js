const R = require('ramda');

function curry(fn) {
    let arity = fn.length;
    args = arguments
    return function f1(...args) {
        if (args.length >= arity) {
            return fn(...args);
        } else {
            return function f2(...args2) {
                argsSave = args.concat(args2)
                return f1(...argsSave);
            }
        }
    }
}

const add = (a, b, c) => a + b + c

const addSum = curry(add);
const addOne = addSum(1);
const addtwo = addOne(2);
const addfour = addtwo(4);
console.log(addfour);
// console.log(addSum(1, 2))
console.log(addSum(1, 2, 3))
console.log(addSum(1, 2)(3))
console.log(addSum(1)(2)(3))