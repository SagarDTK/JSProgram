
var browsername="FF";

if(browsername.includes("Firefox")||browsername.includes("FF"))
{
    console.log("Firefox started : ")
}
else if(browsername.includes("Chrome"))
{
    console.log("Chrome started : ");
}
else if(browsername.includes("Edge"))
{
    console.log("Edge started : ");
}
else 
{
    console.log("No browser started : ");
}


let day=new Date().getDay();

console.log(day);

switch(day)
{
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Satyrday");
        break;
    default:
        console.log("Default :");
        break;

}