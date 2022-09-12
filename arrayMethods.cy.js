let fruits=['Apple','Banana','Grapes'];
console.log(fruits);

//Remove last element in Array 
fruits.pop();
console.log(fruits);

//Remove first element in array
fruits.shift();
console.log(fruits);

//Add element at end of array
fruits.push('Cherry');
console.log(fruits);

//Add element at start of array
fruits.unshift('peach');
console.log(fruits);

//delete first element of an array
delete fruits[1];
console.log(fruits);

//add first element of an array
fruits[1]='Strawberry';
console.log(fruits)

//start removinf from first inex till second
fruits.splice(1,2);
console.log(fruits);

//Add 2 element 'Orange' & 'Cheery' and remove 0 element
fruits.splice(2,0,'Orange','Cherry');
console.log(fruits);

let citrusFruits=fruits.slice(0,2);
//console.log(fruits);
console.log(citrusFruits);

let evenNumbers=[2,4,6];
let oddNumbers=[1,3,5];
let primeNumbers=[2,3,5];

let no=evenNumbers.concat(oddNumbers,primeNumbers);
console.log(no);
