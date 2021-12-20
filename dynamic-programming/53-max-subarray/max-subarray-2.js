const maxSubArray = (ns) => {
  let m = ns[0];
  let l = ns[0];
  for (let i = 1; i < ns.length; ++i) {
    l = Math.max(ns[i], l + ns[i]);
    m = Math.max(l, m);
  }
  return m;
};

const assert = (e, r) => console.assert(e === r, `expected: ${e}, result: ${r}`);

assert(6, maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
assert(1, maxSubArray([1]));
assert(23, maxSubArray([5,4,-1,7,8]));
