// https://github.com/rwony/programmers
// 120890
function solution(array, n) {
  const minNum = Math.min(...array.map((a) => Math.abs(a - n)))
  return array.sort((a, b) => a - b).find((a) => Math.abs(a - n) === minNum)
}
