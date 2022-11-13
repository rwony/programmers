// https://github.com/rwony/programmers
// 12944
function solution(arr) {
  let sum = arr.reduce((acc, curr) => {
    return acc + curr
  }, 0)

  return sum / arr.length
}
