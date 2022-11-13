// https://github.com/rwony/programmers
// 120816
function solution(slice, n) {
  const result = n / slice
  return Number.isInteger(result) ? result : Math.ceil(result)
}
