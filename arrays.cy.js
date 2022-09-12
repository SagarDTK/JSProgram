let numbers=[1,2,3,4,5];
console.log(numbers);

let fruits=['Apple','Orange','Grapes'];
console.log(fruits);

let cars=new Array('Ford', 'Toyota', 'Suzuki');
console.log(cars); 
 

console.log(cars[1]);

cars[1]='Honda';
console.log(cars);

fruits.push('cherry');
console.log(fruits);
console.log(fruits.length);

let x;
for(x in fruits)
{
    console.log(fruits[x]);
}
for(x of fruits)
{
    console.log(x);
}

console.log("cars");