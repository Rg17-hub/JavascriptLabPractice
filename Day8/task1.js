/*• Create class Employee which has instance member id, name , salary, net salary. 
Also Write getter setter for each instance member. Write calculate net salary function 
whose job is to calculate net salary after deduction of 10 % TDS. 
Create 2 objects of the class and call method.*/
class Employee
{
    set empid(id)
    {
        this.id=id;
    }
    set empname(name)
    {
        this.name=name;
    }
    set empsalary(salary)
    {
        this.salary=salary;
    }
    get empid()
    {
        return this.id;
    }
    get empname()
    {
        return this.name;
    }
    get empsalary()
    {
        return this.salary;
    }

    calculateNetSalary()
    {
        return this.salary * 0.9;
    }
}

var obj1= new Employee();
obj1.id= 1;
obj1.name="Girish";
obj1.salary=60000;
console.log(obj1.calculateNetSalary());

var obj2= new Employee();
obj2.id=2;
obj2.name="Purva";
obj2.salary=70000;
console.log(obj2.calculateNetSalary());
