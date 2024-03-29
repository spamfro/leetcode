// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

const maximalSquare = (matrix) => {
  const m = matrix.length, n = matrix[0].length, k = Math.min(m, n);
  const iter = (x, y, s) =>
    s === 1 ? matrix[y][x] === '1' :
    dp(x, y, s - 1) && dp(x + 1, y, s - 1) && dp(x, y + 1, s - 1) && dp(x + 1, y + 1, s - 1);
  const dp = memoize(map(m, k), iter);
  for (let s = k; s >= 1; --s) {
    for (let y = 0; y <= m - s; ++y) {
      for (let x = 0; x <= n - s; ++x) {
        if (dp(x, y, s)) return s * s;
      }
    }
  }
  return 0;
};

const memoize = (a, f) => (x, y, s) => a.get(x, y, s) ?? a.set(x, y, s, f(x, y, s));
const map = (m, k) => {
  const a = new Map();
  return {
    get: (x, y, s) => a.get((x * m * k) + (y * k) + s),
    set: (x, y, s, v) => (a.set((x * m * k) + (y * k) + s, v), v)
  }
};

const { asserteq } = require('../../utils/asserteq');

asserteq(90000, maximalSquare(require('./m-300x300.json')));
asserteq(36, maximalSquare(require('./m-200x200.json')));
asserteq(100, maximalSquare(require('./m-100x100.json')));
asserteq(4, maximalSquare([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]));
asserteq(1, maximalSquare([['0', '1'], ['1', '0']]));
asserteq(0, maximalSquare([['0']]));
