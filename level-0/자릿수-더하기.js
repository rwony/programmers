// https://github.com/rwony/programmers
// 120906
function solution(n) {
  return n.toString().split("").reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
}
