// class..........blueprint,design pattern,template
// object



class Employee{
    setEmp(id,name,salary){              
        this.id=id;                         
        this.name=name;
        this.salary=salary
    }
    printEmp(){
        console.log(this.id+this.name+this.salary);
    }
}
    var  obj=new Employee();
     obj.setEmp(100,"tona",25000)
     //console.log(obj.id);
    // console.log(obj.name);
     //console.log(obj.salary);
     obj.printEmp()

     //instance variable-----------this.id,this.sal,this.name
     // we can access the instance variable inside class by using this outside class ref name
     // = means initializing
     //initializing instance variable constructor
