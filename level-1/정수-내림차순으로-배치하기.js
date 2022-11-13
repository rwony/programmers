// https://github.com/rwony/programmers
// 12933
function solution(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )
}
