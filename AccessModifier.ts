class Person{

public name:string;
protected age:number;
private ssn:number;

constructor(name:string,age:number,ssn:number)
{
this.name=name;
this.age=age;
this.ssn=ssn;
}
displayinfo()
{
    console.log("name:",this.name)
    console.log("age:",this.age)
    console.log("ssn:",this.ssn)
}
}
class Employee extends Person{
    private employeeID:number;
    constructor(name:string,age:number,ssn:number,employeeID:number){
        super(name,age,ssn)
        this.employeeID=employeeID;
    }
showEmployeeDetails()
{
    console.log("name:",this.name)
    console.log("age:",this.age)
    //console.log("ssn:",this.ssn)
    console.log(this.employeeID)
}
}

 let emp=new Employee("John",20,92309,121);

 emp.showEmployeeDetails();
 emp.displayinfo();