//polymorphism
// method overloading--------------------same method name different no of pparameters
// method overriding--------------------same method name same no of parameters


//method overloading

class OperationAdd{
    add(){
    console.log("no arg method");
    }

add(num1){
    console.log("single arg method");
}
add(num1,num2){
    console.log("inside two arg method");
}
}

var obj=new OperationAdd()
obj.add(10)