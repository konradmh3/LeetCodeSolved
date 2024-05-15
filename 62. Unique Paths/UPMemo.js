/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n, memo = {}) {
  if (memo[m + "," + n]) {
    return memo[m + "," + n];
  }
  if (m == 0 || n == 0) return 0;
  if (m == 1 && n == 1) return 1;
  memo[m + "," + n] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[m + "," + n];
};
