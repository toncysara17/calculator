// method overriding--------------------same method name same no of parameters


class Parent{

phone(){
    console.log("note7");
}
}
class Child extends Parent{
    phone(){
        console.log("iphone 12");
    }

}

var ch=new Child()
ch.phone()