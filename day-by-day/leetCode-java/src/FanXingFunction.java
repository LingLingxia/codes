public class FanXingFunction{
    public static <T> T getMid(T...a){
        return a[a.length/2];
    }

    public static void main(String[] args) {
       int c =  FanXingFunction.getMid(1,2,3,4);
    }
}
