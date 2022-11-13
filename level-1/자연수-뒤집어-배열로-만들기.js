// https://github.com/rwony/programmers
// 12932
function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((it) => Number(it))
}
