// https://github.com/rwony/programmers
// 120811
function solution(array) {
  array.sort((a, b) => a - b)
  return array[Math.round(array.length / 2) - 1]
}
