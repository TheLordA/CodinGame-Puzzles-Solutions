import java.util.*;
import java.io.*;
import java.math.*;

class Player {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int lightX = in.nextInt(); // the X position of the light of power
        int lightY = in.nextInt(); // the Y position of the light of power
        int initialTx = in.nextInt(); // Thor's starting X position
        int initialTy = in.nextInt(); // Thor's starting Y position

        // game loop
        while (true) {

            String move = "";

            // Vertical movement.
            if (lightY > initialTy) {
                initialTy++;
                move += "S";
            } else if (lightY < initialTy) {
                initialTy--;
                move += "N";
            }

            // Horizontal movement.
            if (lightX > initialTx) {
                initialTx++;
                move += "E";
            } else if (lightX < initialTx) {
                initialTx--;
                move += "W";
            }

            // Output next move.
            System.out.println(move);

        }
    }
}