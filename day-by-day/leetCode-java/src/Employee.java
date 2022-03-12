public class Employee {
    protected String name;

    @Override public boolean equals(Object other){
        return true;
    }
    public Employee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
