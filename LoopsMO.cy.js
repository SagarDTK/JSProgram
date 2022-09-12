/*
for(let x=0;x<=100;x=x+2)
{
    console.log("Value is : ",x);
}
*/
/*
let y=0;
for(;y<=20;)
{
    console.log("Value is : ",y);
    y++;
}
*/

let arr=[10,20,30,"ABC",true]
/*
for(let x=0;x<arr.length;x++)
{
    console.log("Array Value : ",arr[x]);
}

arr.forEach(element =>
    {
        console.log('Using for each : ',element);
    })

*/

//for of return value
for(let myarrValues of arr)
{
    console.log("Using for of : ",myarrValues);
}

//for in return index
for(let myarrValues in arr)
{
    console.log("Using for in : ",myarrValues);
}


/*
let fname="Sagar Khandagale";
for(x of fname)
{
    console.log(x);
}
*/

let myObj={
    "Name":"ABC",
    marks:100,
    status:true
}

//If you use for in with object it will return you the key
for(let x in myObj)
{
    console.log(x);
    console.log(myObj[x])

}

let sum=5;

//break will break out of while loop
while(sum<=15)
{
    console.log("Sum value : ",sum);
    
    if(sum==10)
    {
        break;
    }
    sum++;
}

//continue will break out of loop only once
for(let x=0;x<10;x++)
{
    if(x===4)
    {
    continue;
    }
    console.log(x);
}
let z=150;

do
{
    console.log("Value is : ",z);    
    z++;
}while(z<10)
