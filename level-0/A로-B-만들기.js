// https://github.com/rwony/programmers
// 120886
function solution(before, after) {
  return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0
}
