function sayHello()
{
    console.log("Hello JS : ");
}

console.log(sayHello());

function showName(fname,lname) 
{
    return fname+lname;    
}

console.log(showName('ABC','DEF'));

console.log(typeof showName);

let myfunc=function f1()
{
    console.log("I am in f1");
}

let result=myfunc();
console.log(result);
console.log(typeof myfunc);


let myFuncNew=function(n1,n2,n3)
{
    console.log("I am in f2");
    return n1+n2+n3;
}
console.log(myFuncNew(10,20,30));

let myObj={
    
    "Name":"Sagars",
    f3:function()
    {
        console.log("Inside object : ");
    }
}

myObj.f3();

let arr=[
            12,"ABC",f1=function()
            {
                console.log("Inside array : ");
            }
]

//arr[2]() or below code
let y=arr[2]();



// let z=function ()
// {
//     console.log("Hello JS Again : ");
// }
// z();

// let z=()  =>
// {
//     console.log("Hello JS Again : ");
// }
// z();

let z=(x1,x2)  =>
{
    console.log("Hello JS Again : ");
    return x1+x2;
}
console.log(z(15,25));

let myAddress=() => console.log("PUNE");

myAddress();

let myNewAddress=(house,street) => 
{
    console.log('${house} ${street} Pune');
}

myNewAddress("ABC123","DEF456")


