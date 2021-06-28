import java.util.*;
import java.math.*;

class Solution {

    private static double distance(double longA, double latA, double longB, double latB) {
        double x = (longB - longA) * Math.cos((latA + latB) / 2);
        double y = latB - latA;
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
    }

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        Double lon = new Double(in.next().replace(',', '.'));
        Double lat = new Double(in.next().replace(',', '.'));
        int N = in.nextInt();
        in.nextLine();

        // simple min search amongst defibrillators
        double min = Double.POSITIVE_INFINITY;
        String res = "";
        Double d;
        for (int i = 0; i < N; i++) {
            String[] defib = in.nextLine().replace(',', '.').split(";");
            d = distance(lon, lat, new Double(defib[4]), new Double(defib[5]));
            if (d < min) {
                min = d;
                res = defib[1];
            }
        }
        System.out.println(res);
    }
}