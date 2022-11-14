// https://github.com/rwony/programmers
// 120911
function solution(my_string) {
  const arr = [...my_string.toLowerCase()]
  return arr.sort().join('')
}
