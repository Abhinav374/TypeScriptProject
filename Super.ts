class Parent{

num:number =10;
 constructor()
 {
    console.log("This is the Parent class constructor..")
 }

 display()
 {
    console.log("this is diplay() method from parent class..")
 }
}

class Child extends Parent{

num:number=20;// overridden
constructor()
{
    super();
    console.log("This is child class constructor")
}
show()
{
    console.log(this.num)
    console.log("This is show method from child class")
}
  display()
  {
    console.log("This is display() method from child class")
    super.display();//this will invoke parent class method
  }

}
let c1=new Child();
c1.show()
c1.display()