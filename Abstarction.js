function Employee(name,age,baseSalary)
{
    this.name=name;
    this.age=age;
    this.baseSalary=baseSalary;
    this.monthlyBonus=1000;

    this.calculateFinalSalary=function()
    {
        let finalSalary=baseSalary+monthlyBonus;
        console.log('Final salary is : '+finalSalary);
    }

    this.getEmpDetails=function()
    {
        console.log('Name : '+this.name+' | Age : '+this.age);
        this.calculateFinalSalary();
    }
}

let emp1=new Employee('John',30,20000);
emp1.getEmpDetails();


