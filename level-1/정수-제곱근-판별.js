// https://github.com/rwony/programmers
// 12934
function solution(n) {
  let num = Math.sqrt(n)
  return num % 1 === 0 ? (num + 1) ** 2 : -1
}
