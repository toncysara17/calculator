class Parent{
    m1(){
        console.log("one plus");
    }
}
class SubChild extends Parent{
    m2(){
        console.log("inside m2");
    }

}
class Child extends SubChild{
    m3(){
        console.log("m3");
    }
}
var ch=new Child()
ch.m3();
ch.m2();
ch.m1();