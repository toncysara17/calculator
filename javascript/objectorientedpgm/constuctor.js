
class Employee{
    constructor(id,name,salary){              
        this.id=id;                         
        this.name=name;
        this.salary=salary;

    }
    printEmp(){
        console.log(this.id+this.name+this.salary);
    }
}
     obj=new Employee(100,"tona",25000);
     obj.printEmp()