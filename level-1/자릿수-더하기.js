// https://github.com/rwony/programmers
// 12931
function solution(n) {
  return [('' + n).split('')].reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr)
  }, 0)
}
