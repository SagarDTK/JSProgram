class Employee
{
    setEmployeeDetails(name,id,phoneNo)
    {
        this.name=name;
        this.id=id;
        this.phoneNo=phoneNo;
    }

    getEmpName()
    {
        return this.name;
    }
    getEmpID()
    {
        return this.id;
    }
    getEmpPhoneNo()
    {
        return this.phoneNo;
    }

}

let emp=new Employee();

emp.setEmployeeDetails('ABC',101,9555889898);
console.log(emp.getEmpName());
console.log(emp.getEmpID());
console.log(emp.getEmpPhoneNo());