/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]))' ./find-cirle-num
*/

const { asserteq } = require('../../../utils/asserteq');

const test = ({ findCircleNum }) => loop(1000000, () => {
  asserteq(2, findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
  asserteq(3, findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;
