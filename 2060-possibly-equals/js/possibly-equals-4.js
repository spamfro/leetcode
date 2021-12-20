const possiblyEquals = (s1, s2) => {
  const m1 = partition(strings(transform(s1)));
  const m2 = partition(strings(transform(s2)));
  // console.log({ m1, m2 });
  for (const [i, l1] of m1) {
    const l2 = m2.get(i);
    if (l2) {
      // console.log({ i, l1, l2 });
      for (const x of l1) {
        for (const y of l2) {
          // console.log({ x, y });
          if (compare(x, y)) return true;
        }
      }
    }
  }
  return false;
};

const compare = (lhs, rhs) => lhs.length === rhs.length && Array.from(lhs).every((x, i) => x === '*' || rhs.charAt(i) === '*' || x === rhs.charAt(i));

const partition = xs => {
  const iter = ({ r, i, l }, x) =>
    l === x.length ? { r, i: [...i, x], l } 
                   : { r: l ? [...r, [l, i]] : r, i: [x], l: x.length };
  const { r, i, l } = xs.sort(compareLength).reduce(iter, { r: [] });
  return new Map([...r, [l, i]]);
};

const compareLength = ({ length: lhs }, { length: rhs }) => lhs - rhs;

const strings = ({ s, ns, rs }) => {
  const rss = rs ? strings(rs) : [''];
  const nss = ns.length > 0 ? ns.map(n => s + '*'.repeat(n)) : [s];
  return nss.flatMap(h => rss.map(t => h + t));
};

const transform = str => {
  const iter = (str, i) => {
    let b = i;
    for ( ; i < str.length && !isNumber(str[i]); ++i) {}
    const s = str.substring(b, i);
    const ns = [];
    for ( ; i < str.length && isNumber(str[i]); ++i) {
      ns.push(Number(str[i])); 
    }
    const rs = i < str.length ? iter(str, i) : undefined;
    return { s, ns: numbers(ns), rs };
  };
  return iter(str, 0);
};

const isNumber = x => '123456789'.includes(x);

const numbers = ns => {
  if (ns.length === 0) return ns;
  const [i, j, k] = [0, 0].concat(ns).slice(-3);
  return Array.from(new Set([
    i + j + k, 
    i * 10 + j + k, i + j * 10 + k,
    i * 100 + j * 10 + k
  ])).sort((i, j) => i - j);
};


module.exports = { possiblyEquals };

const test = '248d222d714d496d618d882d561d275d824d234';
console.log(transform(test));
// console.log(strings(transform(test)));
// console.log(partition(strings(transform(test))));


// console.log(transform('v816u32v813u84v4v12u393v877'));
// console.log(transform('586v993u497u836u9v59v83u34v8'));
// console.log(strings(transform('586v993u497u836u9v59v83u34v8')));
// console.log(transform('internationalization'));
// console.log(transform('l123e'));
// console.log(transform('a5b'));
// console.log(transform('112s'));
// console.log(transform('ab'));
