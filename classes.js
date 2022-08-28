/*
class Employee
{
    setDetails(name,id)
    {
        this.name=name;
        this.id=id;
    }
}
let emp=new Employee();
emp.setDetails('John',101);
console.log(emp.name);
console.log(emp.id);
*/
class Employee
{
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
    }
}
let emp1=new Employee('ABC',101);
let emp2=new Employee('DEF',102);

console.log(emp1.name);
console.log(emp1.id);
console.log(emp2.name);
console.log(emp2.id);
