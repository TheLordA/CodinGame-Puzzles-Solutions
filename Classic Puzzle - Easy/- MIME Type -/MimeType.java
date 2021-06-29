import java.util.*;

class Solution {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        int nbAssociations = in.nextInt();
        int nbFiles = in.nextInt();
        in.nextLine();

        // assoc associates to each file extension the corresponding MIME type
        Map assoc = new HashMap();
        for (int i = 0; i < nbAssociations; i++) {
            assoc.put(in.next().toLowerCase(), in.next());
            in.nextLine();
        }

        for (int i = 0; i < nbFiles; i++) {
            // isolates the extension, which is the part after the last .
            String fileName = in.nextLine().toLowerCase();
            int pos = fileName.lastIndexOf('.');
            String extension = (pos == -1) ? "" : fileName.substring(pos + 1, fileName.length());
            // prints the corresponding MIME type, or UNKNOWN
            System.out.println((String) (assoc.getOrDefault(extension, "UNKNOWN")));
        }
    }
}