let obj1={}
console.log(typeof obj1);

let obj2={

    "Name":"Mukesh",
    "Address":"Pune",
    "Number":9090909090,
    status:false

}
console.log(typeof obj2);
console.log(obj2);
console.log(obj2.Name);
console.log(obj2.Address);
console.log(obj2.Number);

console.log(obj2["Name"]);
console.log(obj2["Address"]);

console.log(obj2.salary);
obj2.salary=100;
obj2.Exp=1;

console.log(obj2);

delete obj2.salary;

console.log(obj2);

console.log("=========================================");

let obj3={

    "State":"MH",
    "Country":"India"

}
obj2.fullAddress=obj3;

console.log(obj2);

obj2.myFamily=["M1","M2"]
console.log(obj2);

console.log(obj2.fullAddress.Country);

console.log(obj2.myFamily[1]);

obj2.myFunction=function()
{
    console.log("Hello from function : ");
}
console.log(obj2);
obj2.myFunction()

let Sagar=obj2;

console.log(typeof Sagar) ;
console.log(Sagar) ;

delete Sagar.fullAddress;
console.log(Sagar) ;


console.log(obj2);

obj2.someRandomValue="Random";
console.log(Sagar);