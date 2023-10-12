// 1/1.ts
var c1 = function(arr) {
  arr.sort((x, y) => y.length - x.length);
  let maxLen = arr[0].length, i = 1;
  while (arr[i].length === maxLen)
    ++i;
  return arr.slice(0, i);
};
var c2 = function(arr) {
  let maxLen = arr.reduce((x, y) => x.length > y.length ? x : y).length, i = 1;
  while (arr[i].length === maxLen)
    ++i;
  return arr.slice(0, i);
};
var c3 = function(arr) {
  let maxLen = 0, str, res = [];
  for (str of arr)
    if (str.length > maxLen)
      maxLen = str.length;
  for (str of arr)
    if (str.length === maxLen)
      res.push(str);
  return res;
};
var arr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
console.log(c1(arr), c2(arr), c3(arr));
