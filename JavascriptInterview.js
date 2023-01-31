// 1. Expand arr
const arr = ["5","3",["9",2,1,["4",[6,7,8]]]];

function expandArray(arr) {
    let expandedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (Array.isArray(element)) {
            // expandedArr = expandedArr.concat(expandArray(element));
            expandedArr = [...expandedArr, ...expandArray(element)];
        } else {
            expandedArr.push(element);
        }
    }
    return expandedArr;
}

const expandedArr = expandArray(arr);
console.log(expandedArr); // Output: ["5", "3", "9", 2, 1, "4", 6, 7, 8]

/*
* 2 :  write a code to execute  the following function
*  sum(4)(2)(4)(2)(1)(5)()());
*/
function sum(x){
    return function(y){
        if(y){
            return sum(x+y);
        }else{
            return function() {
                return x;
            }
        }
    }
}

/*
* Output of program
*/

let x= {}, 
y = {name:"Ronny"},
z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x[y]);


// Sort by object key

let arrObj = [ 
    {"name": "Robin"},
    {"class": "Grad"},
    {"dummy": "hello"}
];
/*
Output should be 
[   {"class": "Grad"},
    {"dummy": "hello"}
    {"name": "Robin"}
]

*/

arrObj.sort(function(a, b) {
    let nameA = a.name || '';
    let nameB = b.name || '';
    return nameA.localeCompare(nameB);
});

console.log(arrObj);

/**
 * Prototype in Javascript
 * Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
 *  */ 
