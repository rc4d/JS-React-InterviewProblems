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
console.log(x[y]); //{ name: 'Akki' }


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

/**
 * Folder Structure of React App
 * Read code https://github.com/covid19india/covid19india-react
 */
/**
 * https://codesandbox.io/s/cool-sky-ymebn8?file=/src/DigitalClock.js
 * Create a DigitalClock Component
 * 
 const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => clearInterval(interval);
  }, [time]);

  return <div className="digital-clock">{time}</div>;
};

export default DigitalClock;
 * 
 */

/**
 * Ways to traverse object
for(let {key, value} of obj){
    console.log(key, value);
}
 */
/**
 * How to set cookie
 * In this example, a function setCookie is defined, which takes three parameters: cname (cookie name), cvalue (cookie value), and exdays (number of days until the cookie expires). The function uses the JavaScript Date object to calculate the expiration date and time, which is then stored as a string in the expires variable. The cookie is then set by adding it to the document.cookie property, along with the expires information and a path of "/".
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // setCookie("username", "John Doe", 365);
  
  sampleObj = [
 
    {
     name: 'xyz',
     city: 'hyd',
        
     },
      {
     name: 'abc',
     city: 'Mexico',
        }
  ];
  
//   code to return all the object with name:'xyz'
/*
let filteredObj = sampleObj.filter(function(obj) {
    return obj.name === 'xyz';
  });
  Or using arrow function:
  let filteredObj = sampleObj.filter(obj => obj.name === 'xyz');

  */

/** Flux In React
 * Flux is a pattern for managing how data flows through a React application.
 *  */   

