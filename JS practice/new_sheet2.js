function totalSum(arr) {
  let sum = 0;

  arr.forEach(num => {
    sum = sum + num;
  });
  
  return sum;
}

function squareArray(arr) {
  return arr.map(num => num * num);
}

function greaterThan50(arr){
  return arr.filter(num => num > 50);
}

function isStrictEqual(a, b) {
  return a === b;
}

function addElement(arr, element){   // array mutable hota hai and push method se array me element add kar sakte hai
  arr.push(element);
  return arr;
}

function removeElement(arr, element){
  return arr.slice(0, arr.length -1);    // slice method se array me se last element remove kar sakte hai
}

function sortNumbers(arr){
  return arr.sort((a, b) => a - b);  // sort method se array me numbers ko ascending order me sort kar sakte hai
}

function sortStrings(arr){
  return arr.sort();             // sort method se array me strings ko alphabetical order me sort kar sakte hai
}

function reverseArray(arr){
  let result = [];

  for(let i = arr.length - 1; i >= 0; i--){
    result.push(arr[i]);
  }
  return result;
}



function mergeArrays(a, b){
  return a.concat(b);   // concat method se do array ko merge kar sakte hai
}

function mergeUnique(a, b){
  return [...new Set(a.concat(b))];   // Set object se duplicate values ko remove kar sakte hai
}

function findValue(arr, value){
  for (let item of arr) {
    if (item === value) {
      return true;  // value found in array
    }
  }
  return false; // value not found in array
}


// includes method se bhi array me value ko check kar sakte hai
function findValueUsingIncludes(arr, value){
  return arr.includes(value);
}

function stringStartsWithA(arr){
  return arr.filter(str => str.startsWith("A"));  // filter method se array me se strings ko filter kar sakte hai jo "A" se start hote hai
}

function firstGreaterThan100(arr){
  return arr.find(num => num > 100);  // find method se array me se pehla element ko find kar sakte hai jo 100 se bada ho
}

function getKeys(obj){
  let keys = [];
  for(let key in obj){
    keys.push(key);  // for...in loop se object ke keys ko get kar sakte hai
  }
  return keys;
}

// Object.keys() method se bhi object ke keys ko get kar sakte hai
function getKeysUsingObjectKeys(obj){
  return Object.keys(obj);
}

function addProperty(obj, key, value){
  return{
    ...obj,   // spread operator se object ke existing properties ko copy kar sakte hai
    [key]: value  // computed property name se new property ko add kar sakte hai
  };
}

function objPropertyUpdate(obj , key, value){
  obj[key] = value;  // object ke property ko update kar sakte hai
  return obj;
}

function hasKey(obj, key){
  return key in obj;  // in operator se check kar sakte hai ki object me specified key exist karti hai ya nahi
}

function objectToArray(obj){
  return Object.entries(obj);  // object.entries se object ke key value pairs ko array me conver kar skte hai 
}

//{ a: 1, b: 2 }
// [["a",1], ["b",2]]


// map - change each element of array and return new array
// filter - choose some elements from an array and return new array
// reduce - combine all elements of an array and return a single value 
// foreach - repeat a functaion for each element of an array does not return anything mean it returns undefined
// find - first matching element of an array and return that element, if no match found return undefined
// sort - arrange the elements of an array in a specific oreder and retun the sorted array but it mutates the original array and ist disadvantage is that it does not work well with numbers because it converts them to strings and sorts them lexicographically, so we need to provide a compare function to sort numbers correctly
// thats why we use sort((a,b) => a - b) for ascending order and sort((a,b) => b - a) for descending order
// slice - return a shallow copy of a portaion of an array into a new array oject selected from start to end (end not included) where start and end 
// are index of items in that array, original array will not be modified
// concat - merge two or more arrays and return a new array, original arrays will not be modified syntax: arr1.concat(arr2, arr3, ...)
// push - add one or more elements to the end of an array and return the new length of the array, it mutates the original array syntax: arr.push(element1, element2, ...)
// pop - remove the last element from an array and return that element, it mutates the original array  syntax: arr.pop()
// unshift - add one or more elements to the beginning of an array and return the new length of the array, it mutates the original array syntax: arr.unshift(element1, element2, ...)
// shift - remove the first element from an array and return that element, it mutates the original array
// spread - copy the element of array or object and crete a new array and object syntx for array: [...arr] for object: {...obj} it is used to create a new array or object with the same elements or properties as the original one, it is also used to merge two or more arrays or objects into a new one
// array - mutable hota hai, matlab hum array ke elements ko change kar sakte hai, add kar sakte hai, remove kar sakte hai, sort kar sakte hai etc.
// object - mutable hota hai, matlab hum object ke properties ko change kar sakte hai, add kar sakte hai, remove kar sakte hai etc.
// object key - values ke pair hota hai, jisme key ek string hoti hai aur value kisi bhi type ki ho sakti hai, object ke keys unique hote hai, matlab ek object me same key do bar nahi ho sakti hai, agar hum same key do bar use karte hai to last value overwrite ho jati hai