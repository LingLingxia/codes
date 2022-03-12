public class Manager extends Employee{
    public Manager(String name) {
        super(name);
    }

    public String sayHi(){
        return "hi "+getName() + name;
    }
    public static void main(String[] args) {
       Manager m = new Manager("llx");

      Employee e = m;
      // Employee e = new Employee("llx");
       Size medium =  Enum.valueOf(Size.class,"MEDIUM");
        System.out.println( medium == Size.MEDIUM);
        System.out.println(Size.MEDIUM);
//       e.getName();
//       Manager m2 = (Manager) e;
     // System.out.println(m2.sayHi());

    }
}
