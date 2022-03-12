
import javafx.util.Pair;

import java.util.*;

class MyQueue {
    public static void main(String[] args) {
//      System.out.println(Math.floorMod(10,7));
//
//               long a = 10;
//       long b = 7;
//
//       long[]  l= new long[]{a,b};
//       System.out.println(Arrays.toString(l));

        MyQueue myQueue = new MyQueue();
        TreeMap<String,Integer> map = new TreeMap<>();
        map.put("5",1);
        map.put("1",3);
        map.put("3",5);
        map.put("1",2);
        map.put("1",1);
        System.out.println(map.toString());
    }



}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */