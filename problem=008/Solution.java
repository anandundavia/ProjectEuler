import java.util.Arrays;

final class Solution {

	// Ah this was pain :(
	private static final String ip = "73167176531330624919225119674426574742355349194934"
			+ "96983520312774506326239578318016984801869478851843"
			+ "85861560789112949495459501737958331952853208805511"
			+ "12540698747158523863050715693290963295227443043557"
			+ "66896648950445244523161731856403098711121722383113"
			+ "62229893423380308135336276614282806444486645238749"
			+ "30358907296290491560440772390713810515859307960866"
			+ "70172427121883998797908792274921901699720888093776"
			+ "65727333001053367881220235421809751254540594752243"
			+ "52584907711670556013604839586446706324415722155397"
			+ "53697817977846174064955149290862569321978468622482"
			+ "83972241375657056057490261407972968652414535100474"
			+ "82166370484403199890008895243450658541227588666881"
			+ "16427171479924442928230863465674813919123162824586"
			+ "17866458359124566529476545682848912883142607690042"
			+ "24219022671055626321111109370544217506941658960408"
			+ "07198403850962455444362981230987879927244284909188"
			+ "84580156166097919133875499200524063689912560717606"
			+ "05886116467109405077541002256983155200055935729725"
			+ "71636269561882670428252483600823257530420752963450";

	private static final char[] chars = ip.toCharArray();
	private static final int[] arr = toInteger(chars);

	private static final int[] toInteger(char[] chars) {
		final int[] arr = new int[chars.length];
		for (int i = 0; i < chars.length; i++) {
			arr[i] = chars[i] - '0';
		}
		return arr;
	}

	// A Sliding Window Solution!
	private static long solve(final int windowLength) {
		int start = 0, end = 0;
		long windowMultiplication = 1, maxWindowMultiplication = Long.MIN_VALUE;
		for (int i = 0; i < arr.length; i++) {
			// We need to 'reset' the window
			// Start from the next index
			// Because 0 at any position in the window would cause whole multiplication to
			// be 0
			if (arr[i] == 0) {
				start = i + 1;
				end = start;
				windowMultiplication = 1;
				continue;
			}
			// No more room to expand
			if (end + 1 > arr.length) {
				break;
			}
			// Include the current element in the window
			windowMultiplication *= (long) arr[end];
			// expand!
			end++;
			// Have we expanded a more than the window length?
			if (end - start > windowLength) {
				// yes we have, let's shrink the window length from the start
				windowMultiplication /= (long) arr[start]; // we can safely do this because arr[start] would never be 0!
				start++;
			}
			maxWindowMultiplication = Math.max(maxWindowMultiplication, windowMultiplication);
		}
		return maxWindowMultiplication;
	}

	public static void main(String[] args) throws Exception {
		System.out.println(solve(4));
		System.out.println(solve(13));
	}
}