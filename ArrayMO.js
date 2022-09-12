let arr=[10,20,30,"ABC",true]
console.log(arr);
console.log(typeof arr);
console.log(arr[1]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr.length);

console.log(arr.length-1);

//Add 100 at last
arr.push(100);
console.log(arr);

//Add ABCDEF at start
arr.unshift("ABCDEF");
console.log(arr);

//Remove last element
arr.pop();
console.log(arr);

//Remove first element
arr.shift();
console.log(arr);

//Remove element from first index till second
arr.splice(1,2);
console.log(arr);

let arr1=[10,20,30,"ABC",true]
let arr2=[40,50,50,"DEF",false]

arr1.push(arr2);
console.log(arr1);

let obj1={

    "Name":"Sagar Khandagale",
    "Language":"JS"

}
arr1.push(obj1);
console.log(arr1);

console.log(arr1[6].Name);
console.log(arr1[6]["Name"]);

let arr3 =[40,50,50,"DEF",false]

for(let i=0;i<arr3.length;i++)
{
    console.log(arr3[i]);
}