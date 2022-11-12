// https://github.com/rwony/programmers
// 120903
function solution(s1, s2) {
  return s1.filter(it => s2.includes(it)).length;
}