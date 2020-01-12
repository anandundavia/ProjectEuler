import java.io.File;
import java.io.BufferedReader;
import java.io.FileReader;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

final class Solution {

	private static long solve(String file) throws Exception {
		final File inputFile = new File(file);
		final BufferedReader br = new BufferedReader(new FileReader(inputFile));
		final String[] names = br.readLine().split(",");
		br.close();
		Arrays.sort(names);
		long totalScore = 0;
		for (int i = 0; i < names.length; i++) {
			final String aName = names[i];
			final char[] chars = aName.toCharArray();
			long score = 0;
			for (int j = 1; j < chars.length - 1; j++) {
				score += (chars[j] - 'A') + 1;
			}
			score *= (i + 1);
			totalScore += score;
		}
		return totalScore;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve("./p022_names.txt"));
	}
}

// If this solution helped you, please star the repo!