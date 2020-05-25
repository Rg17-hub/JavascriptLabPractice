/*Create class student which has instance member 
roll number, name, marks1,marks2,marks3, total, percentage. 
Write getter setter for roll number, name and marks1,marks2,marks3. 
Write a method to calculate total and  percentage. */

class student
{
    set studroll(rollNo)
    {
        this.rollNo=rollNo;
    }
    set studName(name)
    {
        this.name=name;
    }
    set studmark1(mark1)
    {
        this.mark1=mark1;
    }
    set studmark2(mark2)
    {
        this.mark2=mark2;
    }
    set studmark3(mark3)
    {
        this.mark3=mark3;
    }
    get studroll()
    {
        return this.rollNo;
    }
    get studName()
    {
        return this.name;
    }
    get studmark1()
    {
        return this.mark1;
    }
    get studmark2()
    {
        return this.mark2;
    }
    get studmark3()
    {
        return this.mark3;
    }

    percentage()
    {
        return (((this.mark1 + this.mark2 + this.mark3)/3) +"%");
    }
    
}

obj1= new student();
obj1.rollNo=1;
obj1.name="Girish";
obj1.mark1=98;
obj1.mark2=99;
obj1.mark3=80;
console.log("Percentage marks of Girish=" + obj1.percentage());

obj2= new student();
obj2.rollNo=2;
obj2.name="Purva";
obj2.mark1=88;
obj2.mark2=89;
obj2.mark3=70;
console.log("Percentage marks of Purva=" + obj2.percentage());