const pipe = (...fns) => fns.reduce((g, f) => x => f(g(x)));
const filter = fn => xs => xs.filter(fn);
const map = fn => xs => xs.map(fn);
const not = fn => x => !fn(x);
// const tap = fn => x => { fn(x); return x };
// const log = console.log.bind(console);
const id = x => x;

const max = fn => xs => xs.reduce((acc, x) => acc < fn(x) ? fn(x) : acc, 0);

const length = ({ length }) => length;

const isubstrings = function*(s) {
  const ys = [];
  for (let i = 0; i < s.length; ++i) {
    for (let j = i + 1; j <= s.length; ++j) {
      yield s.substring(i, j);
    }
  }
};

const imap = fn => function*(xs) {
  for (let x of xs) {
    yield fn(x);
  }
};
const ifilter = fn => function*(xs) {
  for (let x of xs) {
    if (fn(x)) yield x;
  }
};
const reduce = (fn, seed) => xs => {
  let it = xs[Symbol.iterator]();
  let acc = seed ?? it.next().value;
  for (let { done, value } = it.next(); !done; { done, value } = it.next()) {
      acc = fn(acc, value);
  }
  return acc;
};

const iter = xs => {
  return { 
    map: fn => iter(imap(fn)(xs)), 
    filter: fn => iter(ifilter(fn)(xs)),
    reduce: (fn, seed) => reduce(fn, seed)(xs),
    [Symbol.iterator]() { return xs[Symbol.iterator](); }
  };
};

const substrings = s => iter(isubstrings(s));

const hasRepeatingCharacter = s => {
  const m = new Set();
  return Array.from(s).some(x => m.has(x) || (m.add(x), false));
};

const lengthOfLongestSubstring = pipe(
  substrings,
  filter(not(hasRepeatingCharacter)),
  map(length),
  max(id),
);

module.exports = { lengthOfLongestSubstring };
