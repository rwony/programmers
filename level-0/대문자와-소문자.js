// https://github.com/rwony/programmers
// 120893
function solution(my_string) {
  return [...my_string].map(it => (it === it.toUpperCase() ? it.toLowerCase() : it.toUpperCase())).join("")
}