let fname="My name is Sagar Khandagale"

console.log(fname.length);

console.log(fname[1]);

console.log(fname.includes("name"))

console.log(fname.includes("Name"))

console.log(fname.startsWith("My"));

console.log(fname.endsWith("Khandagale"));

console.log(fname.split(" "));

let arr=fname.split(" ");

console.log(arr[4]);

console.log(fname.toUpperCase());

console.log(fname.toLowerCase());

console.log(fname.trim());

console.log(fname.replace("Khandagale","Khandagle"))

console.log(fname);

let finalMsg="Total price is 100 USD";
let value=finalMsg.split(" ")[3];

console.log(typeof value);
let price=parseInt(value);

console.log(typeof price);
console.log(price);

if(price==100)
{
    console.log("PASS");
}
else
{
    console.log("FAIL");
}

let Msg="Final amount is \t2000 \n\'RS\' ";
console.log(Msg);

let newMsg='Final amount is 2000 RS'
console.log(newMsg);