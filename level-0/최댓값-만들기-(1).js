// https://github.com/rwony/programmers
// 120847
function solution(numbers) {
  const sorted = numbers.sort((a, b) => {
    return a - b
  })
  return sorted[sorted.length - 1] * sorted[sorted.length - 2]
}
